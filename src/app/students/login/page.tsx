"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Нэвтрэх процесс
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message); // Алдааг шалгах
      }

      // Нэвтэрсэн хэрэглэгчийг шалгах
      if (data?.user) {
        // Нэвтэрсэн тохиолдолд students dashboard руу шилжих
        router.push("/students/dashboard");
      } else {
        throw new Error("Хэрэглэгч олдсонгүй.");
      }
    } catch (err: any) {
      setError("Нэвтрэхэд алдаа гарлаа: " + err.message); // Алдааг харуулах
    }

    setLoading(false);
  };

  // Бүртгүүлэх хуудсанд шилжих
  const handleRedirect = () => {
    router.push("/students/register");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Оюутны Нэвтрэх</h1>

        <input
          type="email"
          placeholder="Имэйл"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
          required
        />

        <input
          type="password"
          placeholder="Нууц үг"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Нэвтэрч байна..." : "Нэвтэрэх"}
        </button>

        <p className="text-sm text-center text-gray-600">
          Бүртгэлгүй юу?{" "}
          <button
            onClick={handleRedirect}
            className="text-blue-600 hover:underline font-medium"
          >
            Бүртгүүлэх
          </button>
        </p>
      </form>
    </div>
  );
}
