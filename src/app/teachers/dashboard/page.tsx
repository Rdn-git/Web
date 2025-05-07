"use client";

import { useState } from "react";
import { Button, Input, message, Table, Select, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import { useRouter } from "next/navigation";

// Төрөл тодорхойлж өгсөн
interface Student {
  id: string;
  name: string;
  grade: number | null;
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
  const [studentGrade, setStudentGrade] = useState<number | null>(null);

  const router = useRouter();

  const handleGradeSubmit = () => {
    if (!selectedStudentId || studentGrade === null) {
      message.warning("Эхлээд оюутан сонгоно уу, мөн дүнгээ оруулна уу.");
      return;
    }

    setStudents((prev) =>
      prev.map((student) =>
        student.id === selectedStudentId
          ? { ...student, grade: studentGrade }
          : student
      )
    );

    message.success("Дүн амжилттай хадгалагдлаа! (түр хадгалалт)");
  };

  const handleUpload = async (file: RcFile) => {
    if (!selectedClassId) {
      message.warning("Эхлээд анги сонгоно уу.");
      return false;
    }

    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      message.success(
        "Файл амжилттай орууллаа! (жинхэнэ хадгалалт хийгдээгүй)"
      );
    }, 1000);

    return false;
  };

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
