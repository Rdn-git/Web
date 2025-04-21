"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "lib/supabaseClient";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [studentData, setStudentData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    const { data: userResponse, error: userError } =
      await supabase.auth.getUser();

    if (userError || !userResponse?.user) {
      console.error("User fetch error:", userError);
      router.push("/students/login");
      return;
    }

    const authUser = userResponse.user;
    setUser(authUser);

    // Students хүснэгтээс хэрэглэгчийн дэлгэрэнгүй мэдээллийг авах
    const { data: student, error: studentError } = await supabase
      .from("students")
      .select("*")
      .eq("user_id", authUser.id) // user_id нь students хүснэгт дээрх талбар
      .single();

    if (studentError) {
      console.error("Student fetch error:", studentError);
    } else {
      setStudentData(student);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
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
          <h2 className="font-semibold">Имэйл: {user.email}</h2>
          <h2 className="font-semibold">
            Нэвтэрсэн огноо: {new Date(user.created_at).toLocaleString()}
          </h2>

          {studentData && (
            <>
              <p>Нэр: {studentData.name}</p>
              <p>Утас: {studentData.phone}</p>
              <p>Хөтөлбөр: {studentData.program}</p>
              {/* Өөр мэдээллүүдийг энд харуулж болно */}
            </>
          )}
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
