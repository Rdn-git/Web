"use client";
import React from "react";
import Footer from "../../components/Footer";

const ProgramsPage: React.FC = () => {
  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Хөтөлбөрүүд</h1>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>Газар зүй - аялал жуулчлалын багш</li>
        <li>Программ хангамжийн багш</li>
        {/* Хэрвээ нэмэлт програм байвал энд нэм */}
      </ul>
      <Footer />
    </div>
  );
};

export default ProgramsPage;
