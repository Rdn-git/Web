"use client";
import React from "react";
import Footer from "../../components/Footer";
import ITProgramDetailPage from "@/components/ProgramCard";

const ProgramsPage: React.FC = () => {
  const programs = [
    {
      title: "Мэдээллийн технологи",
      image: "/icons/info.jpg",
      slug: "it",
      shortDescription:
        "Компьютер, сүлжээ, систем, програмчлал зэрэг мэдээллийн технологийн өргөн хүрээг хамарсан мэргэжил.",
    },
    {
      title: "Хувцасны дизайн",
      image: "/icons/fashion.png",
      slug: "fashion",
      shortDescription:
        "Загварын дизайн, хувцасны бүтээлч шийдэл, эсгүүр хийц боловсруулах чадварыг эзэмшүүлэх хөтөлбөр.",
    },
    {
      title: "Хэвлэлийн График дизайнер",
      image: "/icons/graphic.png",
      slug: "graphic",
      shortDescription:
        "Хэвлэл, мультимедиа, зар сурталчилгааны график дизайн боловсруулах чадвар эзэмшүүлэх хөтөлбөр.",
    },
    {
      title: "Компьютерийн сүлжээний Суурилуулалт , үйлчилгээ",
      image: "/icons/net.png",
      slug: "network-tech",
      shortDescription:
        "Сүлжээний төхөөрөмж угсрах, Cisco програм ашиглах, байгууллагын дотоод сүлжээ зохион байгуулах чадвартай мэргэжилтэн бэлтгэнэ.",
    },
    {
      title: "Интерьер дизайн",
      image: "/icons/interior.png",
      slug: "interior-design",
      shortDescription:
        "Дотоод орчны гоо зүй, зохион байгуулалт, тохижилтыг урлагийн түвшинд гүйцэтгэх чадвартай мэргэжилтэн бэлтгэнэ.",
    },

    {
      title: "Техникийн мэргэжлийн орчуулга",
      image: "/icons/language1.jpg",
      slug: "technical-korean-translator",
      shortDescription:
        "Техникийн баримт бичиг, мэргэжлийн агуулгыг Солонгос хэлнээс орчуулах чадвартай орчуулагч мэргэжилтэн бэлтгэнэ.",
    },
    {
      title: "Барилгын Техник , Технологи",
      image: "/icons/enginer.png",
      slug: "engineering-facility-technology",
      shortDescription:
        "Барилгын зураг төсөл, технологийн мэдлэгтэй, талбай дээр ажиллах чадвартай мэргэжилтэн бэлтгэнэ..",
    },
    {
      title: "Цахилгаан хэрэгслийн засвар үйлчилгээ",
      image: "/icons/light.png",
      slug: "electrical-technician",
      shortDescription:
        "Цахилгаан хэрэгслийг оношлох, засварлах, үйлчилгээ хийх чадвартай мэргэжилтэн бэлтгэнэ.",
    },
    {
      title: "Хөнгөн үйлдвэрийн машин тоног төхөөрөмжийн ашиглалт",
      image: "/icons/ind.png",
      slug: "industrial-technician",
      shortDescription:
        "Хөнгөн үйлдвэрийн машин, тоног төхөөрөмжийг угсрах, тохируулах, ашиглах, засвар үйлчилгээ хийх чадвартай мэргэжилтэн бэлтгэнэ.",
    },
    {
      title: "Автомашины механик , мехатроник",
      image: "/icons/car.png",
      slug: "car-mechanics",
      shortDescription:
        "Автомашины механик, цахилгаан, удирдлагын системийг оношлох, засварлах чадвартай мэргэжилтэн бэлтгэнэ.",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-10">
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          {/* Шинээр нэмэгдсэн хэсэг */}
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Техникийн боловсрол олгох сургалт
            </h3>
            <p className="text-gray-700">
              ТЕХНИКИЙН БОЛОВСРОЛ ОЛГОХ СУРГАЛТ-нд ЕБС-ийн 12 анги төгсөгчид
              болон мэргэжлийн сургууль төгсөгчид хамрагдах боломжтой.
            </p>
          </div>

          {/* Гарчиг */}
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
            Суралцах мэргэжлийн чиглэлүүд:
          </h2>

          {/* Програмуудын жагсаалт */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {programs.map((program, index) => (
              <ITProgramDetailPage key={index} {...program} />
            ))}
          </div>
        </div>
      </section>
      <div className="justify-items-center">
        <h3 className="text-blue-900 text-3xl font-bold py-4">
          Сургалтын давуу талууд:
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6 ">
          <li>Мэргэжлийн дипломтой төгсөнө</li>
          <li>Ажлын байраар хангана</li>
          <li>
            ШУТИС , СИТИ их сургууль , Урлах эрдэм дээд сургуулийн 2-3-р курсээс
            шатлан суралцах боломжтой.
          </li>
          <li>Төгсөхдөө 3.000.000-6.000.000 төгрөгийн тэтгэлэг авна.</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default ProgramsPage;
