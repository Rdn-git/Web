import React from "react";

const GraphicProgramDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">График дизайнер</h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        График дизайны үндсэн мэдлэг чадвар дээр суурилан хэвлэл болон
        мультимедиа график дизайны шийдлийг загварчлах чадвар бүхий график
        дизайнч , зохион бүтээлт , технологийн шаардлага хангахуйц түвшний
        бүтээгдэхүүн үйлдвэрлэгч , үйлчилгээнд нэвтрүүлэх ухаан юм. Дээрх
        мэргэжлээр төгсөгч нь Компьютер графикийн програмууд болох Adobe-ийн
        багц програм (Adobe Premiere , Photoshop,Illustrator,InDesign , After
        Effect , Flash г.м) -ууд , 3DMax ,AutoDesk , AutoCad зэрэг 3 хэмжээст
        дүрслэлийн дрограмуудыг бүрэн эзэмшихээс гадна график дизайны онол , зар
        сурталчилгааны онол , хар зураг , уран зургийн онолуудыг эзэмшинэ.Мөн
        Компьютерийн сүлжээний суурь мэдлэгтэй төгсөнө. Төгсөгчид нь ихэвчлэн
        телевиз , студиуд , продакшн зэрэг газруудад ажиллаж байна.
      </p>

      <p className="text-blue-700 font-semibold">Суралцах хугацаа:</p>
      <div className="text-gray-700 leading-relaxed">
        <p>3 жил</p>
        <p>1.5 жил</p>
      </div>
      <h2 className="text-3xl font-bold text-blue-900 mb-4">
        Элсэлтэд тавигдах шаардлага:
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Бүрэн дунд болон мэргэжлийн боловсрол эзэмшсэн байх.
      </p>
      <p className="text-blue-700 font-bold py-4">Сургалтын давуу талууд:</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-10">
        <li>Чадамжинд суурилсан сургалтын хөтөлбөр</li>
        <li>Орчин үеийн сургалтын гарын авлага , сурах бичиг</li>
        <li>Чадварлаг багш</li>
        <li>Тоног төхөөрөмж бүхий дадлагын орчин</li>
        <li>Мэргэжлийн үнэмлэх олгоно</li>
        <li>Их дээд сургуульд шатлан суралцах боломжтой</li>
      </ul>
      <img src="../Suragch1.jpg" alt="График дизайнерийн анги" />
    </div>
  );
};

export default GraphicProgramDetailPage;
