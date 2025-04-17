// app/programs/interior-design/page.tsx

import React from "react";

const CarMechanicsProgramDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
        Автомашины Механик , Мехатроник
      </h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        Автомеханикч нь автомашины эд ангийн хийцийг судлах , автомашины эд
        ангийн эсэргүүцэл , бат бөхийн тооцоо гаргах , техникийн зураг зурах ,
        хөдөлгүүр , явах эд анги , цахилгаан тоноглол , электрон систем зэргийг
        оношилж , засварыг хариуцан хийх , засварыг хариуцан хийх , засварчдыг
        удирдах чадвартай байна.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Автомеханик мэргэжлээр төгсөгчид нь төрийн салбар секторуудад , хувийн
        автомашины засварын газруудад ажиллаж байна.
      </p>

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
      <img src="../car1.jpg" alt="Автомашин механик" />
    </div>
  );
};

export default CarMechanicsProgramDetailPage;
