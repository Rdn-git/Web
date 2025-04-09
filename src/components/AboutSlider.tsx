import React from "react";
import Image from "next/image";

const AboutSlider: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Зураг */}
        <div className="w-full flex justify-center">
          <Image
            src="/aboutslider2.jpg"
            alt="About"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Танилцуулга хэсэг */}
        <div className="space-y-8 text-center md:text-left">
          <div>
            <div className="text-4xl mb-2">🎯</div>
            <h3 className="text-xl font-bold mb-2">ЭРХЭМ ЗОРИЛГО</h3>
            <p className="text-sm leading-relaxed">
              Салбартаа манлайлагч, инновацийг нэвтрүүлэгч байх
            </p>
          </div>

          <div>
            <div className="text-4xl mb-2">👁️</div>
            <h3 className="text-xl font-bold mb-2">АЛСЫН ХАРАА</h3>
            <p className="text-sm leading-relaxed">
              Дэлхийн өрсөлдөөнд манлайлах мэргэжилтэн бэлтгэх
            </p>
          </div>

          <div>
            <div className="text-4xl mb-2">📘</div>
            <h3 className="text-xl font-bold mb-2">ҮНЭТ ЗҮЙЛС</h3>
            <p className="text-sm leading-relaxed">
              Хүндлэл, мэдлэг, чадвар, хөгжлийг эрхэмлэнэ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSlider;
