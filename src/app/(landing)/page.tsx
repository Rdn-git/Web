// src/app/(landing)/page.tsx
"use client";

import React from "react";
import { Layout } from "antd";
import AppHeader from "@/components/Header";
import Footer from "@/components/Footer";

const { Content } = Layout;

export default function LandingPage() {
  return (
    <Layout className="bg-white text-gray-800 min-h-screen">
      <AppHeader />

      <Content>
        {/* Hero section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Монгол-Солонгосын Политехник Коллеж
            </h1>
            <p className="text-lg md:text-xl">
              Ирээдүйг бүтээх ур чадвартай мэргэжилтнүүдийг бэлтгэж байна
            </p>
          </div>
        </section>

        {/* Training Programs section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
              Сургалтын Хөтөлбөрүүд
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Мэргэжлийн боловсрол", icon: "📘" },
                { title: "Техникийн боловсрол", icon: "⚙️" },
                { title: "Машин үйлдвэрлэлийн сургалт", icon: "🛠️" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">
                    Дэлгэрэнгүй мэдээллийг энд оруулна...
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
              Сүүлийн үеийн мэдээ, үйл явдал
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-md transition"
                >
                  <div className="bg-blue-300 h-40"></div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Мэдээ {i}</h3>
                    <p className="text-sm text-gray-600">
                      Энд тухайн мэдээний товч тайлбар байрлана.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner logos */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-10">
            {[
              { name: "MSPK", logo: "/logo-dark.png" },
              { name: "KOICA", logo: "/koica.png" },
              { name: "GIZ", logo: "/Giz.png" },
              { name: "MESC", logo: "/AustrialianAid.png" },
              { name: "KCCI", logo: "/Germany.png" },
            ].map((partner, index) => (
              <div
                key={index}
                className="w-32 h-16 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </Content>

      <Footer />
    </Layout>
  );
}
