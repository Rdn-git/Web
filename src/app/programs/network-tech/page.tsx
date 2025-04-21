import React from "react";

const NetworkTechProgramDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
        Компьютерийн сүлжээний техникч
      </h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        Компьютерийн техник хангамж болон сүлжээний тоног төхөөрөмжийг холбох ,
        угсрах , ажиллагааг судлан байгууллагын сүлжээг зохион байгуулах мэдлэг
        чадвар бүхий техникч /холбоо сүлжээ/.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Компьютерийн сүлжээний техникч мэргэжлээр төгсөгч нь сүлжээний Cisco
        Packet Treacer програмыг эзэмшихээс гадна байгууллагын дотоод сүлжээ ,
        гадаад сүлжээ зохион байгуулах , сүлжээний тоног төхөөрөмжтэй ажиллах
        чадваруудыг эзэмшинэ.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Төгсөгчид нь үүрэн холбооны компани , телевиз зэрэг ямарч байгууллагад
        сүлжээний мэргэжилтнээр ажиллах боломжтой.
      </p>
      <p className="text-blue-700 leading-relaxed">Суралцах хугацаа:</p>
      <div className="text-gray-700 leading-relaxed mb-4">
        <p>3 жил</p>
        <p>1.5 жил</p>
      </div>
      <h2 className="text-2xl font-bold text-blue-900 py-4">
        Элсэлтэд тавигдах шаардлага:
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Бүрэн дунд болон мэргэжлийн боловсрол эзэмшисэн байх
      </p>
      <h3 className="text-2xl font-bold text-blue-900 py-4">
        Сургалтын давуу талууд:
      </h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
        <li>Чадамжинд суурилсан сургалтын хөтөлбөр</li>
        <li>Орчин үеийн сургалтын гарын авлага , сурах бичиг</li>
        <li>Чадварлаг багш</li>
        <li>Тоног төхөөрөмж бүхий дадлагын орчин</li>
        <li>Мэргэжлийн үнэмлэх болгоно</li>
        <li>Их дээд сургуульд шатлан суралцах боломжтой</li>
      </ul>
      <img src="../Сүлжээ.jpg" alt="Сүлжээний техникийн анги" />
    </div>
  );
};

export default NetworkTechProgramDetailPage;
