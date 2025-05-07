"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Энд ямар нэг authentication байхгүй тул шууд loading false болгоно
    setLoading(false);
  }, []);

  const handleLogout = () => {
    // Ямар нэг auth алга учраас шууд login руу явуулна
    router.push("/students/login");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <p>Түр хүлээнэ үү...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Оюутны мэдээлэл</h1>

        <div className="space-y-2">
          <p>Имэйл: demo@student.mn</p>
          <p>Нэвтэрсэн огноо: 2025-04-29 10:00 AM</p>

          <p>Нэр: Демо Оюутан</p>
          <p>Утас: 99999999</p>
          <p>Хөтөлбөр: Мэдээллийн технологи</p>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
          >
            Нэвтрэхээс гаргах
          </button>
        </div>
      </div>
    </div>
  );
}
