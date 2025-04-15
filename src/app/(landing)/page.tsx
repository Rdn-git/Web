"use client";

import React from "react";
import { Layout } from "antd";
import AppHeader from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

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
              Монгол-Солонгосын Политехник Коллеж ТБОС
            </h1>
            <p className="text-lg md:text-xl">
              Ирээдүйг бүтээх ур чадвартай мэргэжилтнүүдийг бэлтгэж байна
            </p>
          </div>
        </section>

        {/* About Us section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-gray-900 mb-8">
              Бидний тухай
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p className="leading-relaxed">
                Монгол-Солонгосын Политехник Коллеж нь 1966 онд үүсгэн
                байгуулагдсан бөгөөд 60 жилийн турш хөнгөн аж үйлдвэрийн салбарт
                мэргэжилтнүүдийг бэлтгэж ирсэн.
              </p>
              <div className="space-y-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900">
                  Түүхийн тойм
                </h3>
                <p className="text-lg leading-relaxed mb-6">
                  <strong>1966 он:</strong> Хөнгөн Үйлдвэрийн Техник Мэргэжлийн
                  Сургууль үүсгэн байгуулагдав.
                  <br />
                  <strong>1980 он:</strong> Хөнгөн Хүнсний Аж Үйлдвэрийн
                  Техникум болж өргөжсөн.
                  <br />
                  <strong>1991 он:</strong> Боловсролын шинэчлэлийн хүрээнд
                  сургуулийн бүтэц өөрчлөгдсөн.
                  <br />
                  <strong>2000 он:</strong> Сургуулийг “Монгол-Солонгосын
                  Техникийн Коллеж” гэж нэрлэж өргөжсөн.
                  <br />
                  <strong>2012 он:</strong> Монгол-Солонгосын Политехник Коллеж
                  гэж нэрлэгдэж, өнөөгийн нэртэйгээр үйл ажиллагаагаа явуулж
                  байна.
                </p>

                <p className="leading-relaxed">
                  Өнөөдөр бид олон улсын стандартад нийцсэн, чанартай сургалтын
                  хөтөлбөрийг санал болгодог бөгөөд 2012 оноос Монгол-Солонгосын
                  Политехник Коллеж нэртэйгээр үйл ажиллагаагаа явуулж байна.
                </p>
              </div>

              {/* Key Facts Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-blue-600">60</h3>
                  <p className="text-gray-500">Жил</p>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-blue-600">26</h3>
                  <p className="text-gray-500">Мэргэжил</p>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-blue-600">
                    1000+
                  </h3>
                  <p className="text-gray-500">Төгсөгчид</p>
                </div>
              </div>

              {/* Image Section */}
              <div className="mt-12">
                <Image
                  src="/building.jpg"
                  alt="Бидний тухай зураг"
                  width={900}
                  height={400}
                  className="mx-auto rounded-xl shadow-lg"
                />
              </div>

              {/* Alumni Section */}
              <div className="mt-12 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Алдартнууд
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-lg text-gray-700">
                    Монгол улсын хөдөлмөрийн баатар Ш.Эрдэнэчимэг
                  </li>
                  <li className="text-lg text-gray-700">
                    Аж үйлдвэрийн гавьяат ажилтан М.Мөнхцэцэг
                  </li>
                  <li className="text-lg text-gray-700">
                    Монгол ардын жүжигчин Д.Мөнхшүр
                  </li>
                  <li className="text-lg text-gray-700">
                    Монгол улсын гавьяат тамирчин Ц.Цогтгэрэл
                  </li>
                </ul>
              </div>
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
