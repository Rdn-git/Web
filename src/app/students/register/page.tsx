"use client"; // Энэ мөрийг эхэнд байрлуулах

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "lib/supabaseClient";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState(""); // Хэрэглэгчийн нэр
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

    // Supabase руу бүртгэл хийх
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: "", // Баталгаажуулалтын холбоосыг түр идэвхгүй болгох
      },
    });

    if (error) {
      setError(error.message);
    } else {
      // Бүртгэл амжилттай бол хэрэглэгчийн нэрийг "students" хүснэгтэд хадгалах
      const { error: studentError } = await supabase
        .from("students") // "students" хүснэгтэд хадгалж байна
        .insert([
          {
            user_id: data.user?.id, // Supabase user ID
            name: name, // Хэрэглэгчийн нэр
            email: email, // Имэйл
          },
        ]);

      if (studentError) {
        setError(studentError.message);
      } else {
        router.push("/students/login"); // Нэвтрэх хуудсанд шилжих
      }
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Бүртгүүлэх</h1>

        {/* Хэрэглэгчийн нэр талбар */}
        <input
          type="text"
          placeholder="Хэрэглэгчийн нэр"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
          required
        />

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

        <input
          type="password"
          placeholder="Нууц үгээ давтана уу"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Бүртгэж байна..." : "Бүртгүүлэх"}
        </button>

        <p className="text-sm text-center text-gray-600">
          Аль хэдийн бүртгүүлсэн үү?{" "}
          <a
            href="/students/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Нэвтрэх
          </a>
        </p>
      </form>
    </div>
  );
}
