"use client";

import { useState, useEffect } from "react";
import { Button, Input, message, Table } from "antd";
import { supabase } from "lib/supabaseClient";
import { useRouter } from "next/navigation";

// Төрөл тодорхойлж өгсөн
interface Student {
  id: string;
  name: string;
}

export default function TeacherDashboard() {
  const [studentId, setStudentId] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [homework, setHomework] = useState<string>("");
  const [schedule, setSchedule] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [students, setStudents] = useState<Student[]>([]);

  const router = useRouter();

  // Дүн оруулах функц
  const handleAddGrade = async () => {
    if (!studentId || !grade) {
      message.warning("Оюутны ID болон дүнг оруулна уу.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("grades").insert([
      {
        student_id: studentId,
        grade,
        homework,
        schedule,
      },
    ]);

    setLoading(false);

    if (error) {
      message.error(`Алдаа гарлаа: ${error.message}`);
    } else {
      message.success("Дүн амжилттай орууллаа!");
      setGrade("");
      setHomework("");
      setSchedule("");
    }
  };

  // Оюутнуудыг авах
  const fetchStudents = async () => {
    const { data, error } = await supabase.from("students").select("*");

    if (error) {
      message.error(`Алдаа гарлаа: ${error.message}`);
    } else {
      setStudents(data as Student[]);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8 space-y-4 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold">Багшийн Dashboard</h2>

      <Input
        placeholder="Оюутны ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <Input
        placeholder="Дүн"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
      <Input
        placeholder="Гэрийн даалгавар"
        value={homework}
        onChange={(e) => setHomework(e.target.value)}
      />
      <Input
        placeholder="Хичээлийн хуваарь"
        value={schedule}
        onChange={(e) => setSchedule(e.target.value)}
      />

      <div className="flex gap-2">
        <Button type="primary" onClick={handleAddGrade} loading={loading}>
          Дүн оруулах
        </Button>
        <Button onClick={fetchStudents}>Оюутнуудын жагсаалт</Button>
      </div>

      <Table
        dataSource={students}
        rowKey="id"
        columns={[
          { title: "ID", dataIndex: "id", key: "id" },
          { title: "Нэр", dataIndex: "name", key: "name" },
        ]}
      />
    </div>
  );
}
