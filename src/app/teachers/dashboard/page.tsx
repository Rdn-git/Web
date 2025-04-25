"use client";

import { useState, useEffect } from "react";
import { Button, Input, message, Table, Select, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import { supabase } from "lib/supabaseClient";
import { useRouter } from "next/navigation";

// Төрөл тодорхойлж өгсөн
interface Student {
  id: string;
  name: string;
  grade: number | null; // Дүн нэмэгдсэн
}

interface Class {
  id: string;
  name: string;
}

export default function TeacherDashboard() {
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [classes, setClasses] = useState<Class[]>([]);
  const [uploading, setUploading] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(
    null
  );
  const [studentGrade, setStudentGrade] = useState<number | null>(null); // Дүн оруулах

  const router = useRouter();

  // Ангиудыг авах
  const fetchClasses = async () => {
    const { data, error } = await supabase.from("classes").select("*");

    if (error) {
      message.error(`Алдаа гарлаа: ${error.message}`);
    } else {
      setClasses(data as Class[]);
    }
  };

  // Оюутнуудыг авах
  const fetchStudents = async () => {
    if (!selectedClassId) {
      return; // Анги сонгоогүй бол оюутнуудыг авахгүй
    }
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .eq("class_id", selectedClassId); // Оюутныг ангийн дагуу авах

    if (error) {
      message.error(`Алдаа гарлаа: ${error.message}`);
    } else {
      setStudents(data as Student[]);
    }
  };

  // Оюутны дүн оруулах
  const handleGradeSubmit = async () => {
    if (!selectedStudentId || studentGrade === null) {
      message.warning("Эхлээд оюутан сонгоно уу, мөн дүнгээ оруулна уу.");
      return;
    }

    const { error } = await supabase
      .from("students")
      .update({ grade: studentGrade })
      .eq("id", selectedStudentId);

    if (error) {
      message.error(`Дүн оруулахад алдаа гарлаа: ${error.message}`);
    } else {
      message.success("Дүн амжилттай орууллаа!");
    }
  };

  // PDF файл оруулах функц
  const handleUpload = async (file: RcFile) => {
    if (!selectedClassId) {
      message.warning("Эхлээд анги сонгоно уу.");
      return false;
    }

    const classId = selectedClassId;

    setUploading(true);

    const fileExt = file.name?.split(".").pop();
    const fileName = `${classId}-${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("schedules")
      .upload(filePath, file, {
        contentType: file.type,
      });

    if (uploadError) {
      message.error("Файл оруулж чадсангүй: " + uploadError.message);
      setUploading(false);
      return false;
    }

    const { data: fileData } = supabase.storage
      .from("schedules")
      .getPublicUrl(filePath);
    const publicURL = fileData?.publicUrl;

    const { data: uuidData, error: uuidError } = await supabase.rpc(
      "uuid_generate_v4"
    );

    if (uuidError) {
      message.error("UUID үүсгэх үед алдаа гарлаа: " + uuidError.message);
      setUploading(false);
      return false;
    }

    const { error: insertError } = await supabase.from("schedules").insert([
      {
        id: uuidData,
        class_id: classId,
        file_url: publicURL,
      },
    ]);

    if (insertError) {
      message.error("Файл оруулахад алдаа гарлаа: " + insertError.message);
    } else {
      message.success("Файл амжилттай орууллаа!");
    }

    setUploading(false);
    return false;
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  useEffect(() => {
    fetchStudents();
  }, [selectedClassId]);

  return (
    <div className="max-w-2xl mx-auto mt-8 space-y-4 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold">Сайн байна уу Багшаа</h2>

      {/* Анги сонгох */}
      <Select
        placeholder="Анги сонгоно уу"
        value={selectedClassId}
        onChange={(value) => setSelectedClassId(value)}
        style={{ width: "100%" }}
      >
        {classes.map((classItem) => (
          <Select.Option key={classItem.id} value={classItem.id}>
            {classItem.name}
          </Select.Option>
        ))}
      </Select>

      {/* Оюутан сонгох */}
      <Select
        placeholder="Оюутан сонгоно уу"
        value={selectedStudentId}
        onChange={(value) => setSelectedStudentId(value)}
        style={{ width: "100%" }}
      >
        {students.map((student) => (
          <Select.Option key={student.id} value={student.id}>
            {student.name}
          </Select.Option>
        ))}
      </Select>

      {/* Оюутны дүн оруулах */}
      <Input
        type="number"
        value={studentGrade ?? ""}
        onChange={(e) => setStudentGrade(Number(e.target.value))}
        placeholder="Оюутны дүн"
      />
      <Button onClick={handleGradeSubmit} type="primary">
        Дүн оруулах
      </Button>

      {/* PDF файл оруулах */}
      <Upload
        customRequest={({ file }) => handleUpload(file as RcFile)}
        showUploadList={false}
      >
        <Button type="primary" loading={uploading}>
          Хичээлийн хуваарь оруулах
        </Button>
      </Upload>

      {/* Оюутнуудын жагсаалт */}
      <Table
        dataSource={students}
        rowKey="id"
        columns={[
          { title: "ID", dataIndex: "id", key: "id" },
          { title: "Нэр", dataIndex: "name", key: "name" },
          { title: "Дүн", dataIndex: "grade", key: "grade" },
        ]}
      />
    </div>
  );
}
