"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button, message } from "antd";

export default function RegisterTeacherPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Нууц үг хоорондоо таарахгүй байна.");
      setLoading(false);
      return;
    }

    // 1. Бүртгэл хийх сервер рүү хүсэлт илгээх
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password, name }),
      });

      const result = await response.json();

      if (!result.success) {
        setError(
          result.message || "Бүртгэл амжилтгүй боллоо. Дахин оролдоно уу."
        );
        setLoading(false);
        return;
      }

      router.push("/teachers/login");
    } catch (error: unknown) {
      // error-ийг тодорхойлох
      if (error instanceof Error) {
        setError("Бүртгүүлэхэд алдаа гарлаа: " + error.message);
      } else {
        setError("Бүртгүүлэхэд алдаа гарлаа.");
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Багш бүртгүүлэх</h1>

        <Input
          type="text"
          placeholder="Нэр"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <Input
          type="email"
          placeholder="Имэйл"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <Input.Password
          placeholder="Нууц үг"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <Input.Password
          placeholder="Нууц үгээ давтана уу"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Бүртгэж байна..." : "Бүртгүүлэх"}
        </Button>

        <p className="text-sm text-center text-gray-600">
          Аль хэдийн бүртгүүлсэн үү?{" "}
          <a
            href="/teachers/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Нэвтрэх
          </a>
        </p>
      </form>
    </div>
  );
}
