"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "lib/supabaseClient";
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

    // 1. Нэвтрэх оролдлого
    const { data: signInData, error: signInError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (signInError) {
      message.error(`Нэвтрэхэд алдаа гарлаа: ${signInError.message}`);
      setLoading(false);
      return;
    }

    const userId = signInData?.user?.id;

    if (!userId) {
      message.error("Хэрэглэгчийн мэдээлэл олдсонгүй.");
      setLoading(false);
      return;
    }

    // 2. Багшийн бүртгэл байгаа эсэхийг шалгах
    const { data: teacherData, error: teacherError } = await supabase
      .from("teachers")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (teacherError || !teacherData) {
      message.error("Энэ имэйл багшийн бүртгэлтэй тохирохгүй байна.");
      await supabase.auth.signOut(); // Нэвтэрсэн бол гарах
      setLoading(false);
      return;
    }

    // 3. Амжилттай бол багшийн dashboard руу оруулах
    message.success("Амжилттай багшийн хувиар нэвтэрлээ!");
    router.push("/teachers/dashboard");
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
