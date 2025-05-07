"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button, message } from "antd";

export default function LoginTeacherPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      message.warning("Имэйл болон нууц үгээ оруулна уу");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (!result.success) {
        message.error(result.message || "Нэвтрэхэд алдаа гарлаа");
        setLoading(false);
        return;
      }

      const userId = result.userId;

      if (!userId) {
        message.error("Хэрэглэгчийн мэдээлэл олдсонгүй.");
        setLoading(false);
        return;
      }

      const teacherResponse = await fetch(`/api/teachers/${userId}`);
      const teacherData = await teacherResponse.json();

      if (!teacherData || teacherData.error) {
        message.error("Энэ имэйл багшийн бүртгэлтэй тохирохгүй байна.");
        setLoading(false);
        return;
      }

      // ✅ Session хадгалах (user ID-г хадгалж байна)
      localStorage.setItem("userId", userId);
      localStorage.setItem("role", "teacher"); // Хэрэглэгчийн үүрэг

      message.success("Амжилттай багшийн хувиар нэвтэрлээ!");
      router.push("/teachers/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        message.error("Нэвтрэхэд алдаа гарлаа: " + error.message);
      } else {
        message.error("Нэвтрэхэд алдаа гарлаа");
      }
    }

    setLoading(false);
  };

  const handleRegister = () => {
    router.push("/teachers/register");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow space-y-4">
      <h1 className="text-2xl font-bold">Багш нэвтрэх</h1>
      <Input
        placeholder="Имэйл"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input.Password
        placeholder="Нууц үг"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex justify-between gap-2">
        <Button type="primary" loading={loading} onClick={handleLogin}>
          Нэвтрэх
        </Button>
        <Button type="default" onClick={handleRegister}>
          Бүртгүүлэх
        </Button>
      </div>
    </div>
  );
}
