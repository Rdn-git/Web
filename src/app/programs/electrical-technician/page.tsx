// app/programs/interior-design/page.tsx

import React from "react";

const ElectricalTechnlogyProgramDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
        Цахилгаан Хэрэгслийн Засвар Үйлчилгээ
      </h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        Цахилгаанчин нь барилга байгууламжийн бүх төрлийн цахилгааны шугам
        сүлжээ , бусад тоног төхөөрөмж , бэхлэх , тогтоох , угсрах , тохируулах
        , засвар үйлчилгээ хийх зэрэг ажил эрхэлнэ.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Төрөл бүрийн барилга , байгууламжид цахилгааны шугам сүлжээ болон
        холбогдох тоноглолыг тавих , суурилуулах , угсрах , тохируулах , засвар
        үйлчилгээ хийх , цахилгааны шугам зураг төсөл гаргах , техникийн
        үзүүлэлтүүдийг хянах , шалгах чадваруудыг эзэмшинэ.
      </p>

      <p className="text-blue-700 font-bold leading-relaxed">
        Суралцах хугацаа:
      </p>
      <div className="text-gray-700 font-bold">
        <p>3 жил</p>
      </div>
      <h3 className="font-bold text-gray-700 py-4 text-2xl">
        Элсэлтэд тавигдах шаардлага
      </h3>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Бүрэн дунд болон мэргэжлийн боловсрол эзэмшисэн байх.
      </p>
      <img src="../suragch2.jpg" alt="Интерьер Дизайн анги" />
    </div>
  );
};

export default ElectricalTechnlogyProgramDetailPage;
