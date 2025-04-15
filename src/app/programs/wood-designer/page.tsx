// app/programs/wood-designer/page.tsx

import React from "react";

const WoodDesignerProgramDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
        Мод боловсруулагч , Дизайнч
      </h1>
      <div className="text-gray-700 leading-relaxed mb-4">
        <p>
          Мод боловсруулагч , дизайнч нь модыг ашиглан сонгож , модонд багаж
          тоног төхөөрөмж ашиглан боловсруулалт хийх , мод боловсруулах суурь
          машинуудыг ажиллуулах , шахмал хавтанг эсгэж эдлэл хийх , угсрах ,
          хэмжилт тохируулга хийхээс гадна гарч буй бүтээгдэхүүнд чанарын хяналт
          тавих үүрэг гүйцэтгэнэ.
        </p>
        Мод боловсруулагч , дизайнч мэргэжлээр төгсөгч нь мод , модон эдлэлийн
        үйлдвэр , цехүүдэд ажиллахаас гадна ШУТИС, Хөдөлмөрийн дээд сургууль ,
        Боловсролын их сургуулиудын мэргэжлийн ангиудад элсэн суралцах
        боломжтой.
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        📚 <strong>Суралцах хугацаа:</strong> 2.5 жил
      </p>
      <p className="text-gray-700 leading-relaxed">
        ✅ <strong>Элсэлтэд тавигдах шаардлага:</strong> Суурь боловсрол
        эзэмшсэн байх
      </p>
      <h2 className="text-2xl font-bold text-blue-800 py-4">
        Сургалтын Давуу талууд:
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
        <li>Чадамжинд суурилсан сургалтын хөтөлбөр</li>
        <li>Орчин үеийн сургалтын гарын авлага , сурах бичиг</li>
        <li>Чадварлаг багш</li>
        <li>Тоног төхөөрөмж бүхий дадлагын орчин</li>
        <li>Мэргэжлийн үнэмлэх олгоно</li>
        <li>Их дээд сургуульд шатлан суралцах боломжтой</li>
      </ul>
      <img src="../Wooddesignjpg.jpg" alt="Мод боловсруулагч дизайн анги" />
    </div>
  );
};

export default WoodDesignerProgramDetailPage;
