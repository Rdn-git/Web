// app/programs/interior-design/page.tsx

import React from "react";

const InteriorDesignProgramDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Интерьер дизайн</h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        Интерьер гэдэг нь дотоод гэсэн утгатай франц үг юм. Иймд дотоод засал
        чимэглэлийг Интерьер дизайн гэж нэрлэдэг бөгөөд энэ нь өөрийн болон
        хүрээлэн буй орчны тав тухтай нөхцөл , аливаа юмсын хэлбэр , гоо зүйн
        зохицол , орон зайн зөв шийдэл , тохилог орчныг бий болгох хэрэглээний
        урлаг юм.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Интерьер дизайны гүйцэтгэлийн зорилго нь аливаа зүйлсийн орон зайг гоо
        зүйн хувьд төгс төгөлдөр болгож дээд зэргийн тав тухтай , тааламжтай
        орчинг бий болгоход чиглэгдэнэ.Хүн дизайны хүнд нөлөөлөх нөлөөлөл нь
        суурин амьдрал хөгжихийн хирээр түүний хэрэгцээ улам нэмэгдсээр байна.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
        Интерьер дизайнд дараах хүчин зүйлс нөлөөлнө:
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
        <li>Архитектурын шийдэл, өрөө тасалгааны зохион байгуулалт</li>
        <li>Захиалагчийн хүсэл сонирхол, хэрэгцээ, таашаал</li>
        <li>Интерьер дизайны урлагийн мэдрэмж, уран сэтгэмж</li>
        <li>Төсөв хөрөнгө оруулалтын хэмжээ</li>
        <li>Материалын шинж чанар, сонголт</li>
        <li>Гүйцэтгэлийн мэргэшсэн нарийн ажиллагаа</li>
        <li>Тавилга, хэрэглэлийн сонголт</li>
        <li>Туслах чимэглэлийн зохицол, тохирол</li>
      </ul>

      <p className="text-blue-700 font-bold leading-relaxed">
        Суралцах хугацаа:
      </p>
      <div className="text-gray-700 font-bold">
        <p>3 жил</p>
        <p>1.5 жил</p>
      </div>
      <h3 className="font-bold text-gray-700 py-4 text-2xl">
        Элсэлтэд тавигдах шаардлага
      </h3>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Бүрэн дунд болон мэргэжлийн боловсрол эзэмшисэн байх.
      </p>
      <img src="../123.jpg" alt="Интерьер Дизайн анги" />
    </div>
  );
};

export default InteriorDesignProgramDetailPage;
