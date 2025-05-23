import Image from "next/image";

export default function SuljmelSection() {
  return (
    <div className="text-center px-4">
      <h1 className="font-bold text-blue-700 text-2xl mb-4">
        "ХҮРЭЛ ТУЛГА-2025" МОНГОЛ-СОЛОНГОСЫН ПОЛИТЕХНИК КОЛЛЕЖИЙН ЯРУУ НАЙРГИЙН
        НААДАМ АМЖИЛТТАЙ ЗОХИОН БАЙГУУЛАГДЛАА.
      </h1>

      <p className="mt-3 leading-relaxed text-left max-w-4xl mx-auto">
        Тус уралдааны зорилго нь: Суралцагч, өсвөр үеийнхнийг Монгол хэлний
        үгсийн урлагийн гайхамшигт ертөнцөөр аялуулах, үг хэллэгийн арвин баялаг
        сантай танилцуулж, зохиох, бүтээн туурвих урлагт сургах; 👩‍💻🧑‍💻 Уралдаанд
        нийт 38 суралцагч оролцсоноос дараах суралцагчид бусдыгаа авьяас
        чадвараараа манлайлан тэргүүллээ. ✅ "Хүрэл тулга" наадамд:
        <br /> 🥇 1-р байр У. Амарсайхан — ТБОС-н График дизайнч-1,5
        <br /> 🥈 2-р байр Ц.Эрхсаран — МБОС-н Сүлжих машины оператор-1б
        <br /> 🥉 3-р байр Б.Нарантунгалаг — МБОС-н Сүлжмэлийн үйлдвэрийн
        технологийн ажилтан-1а
        <br /> 🏅 Тусгай байр: Ц.Лхагвасүрэн — ТБОС-н Хувцас дизайн-1.5
        <br /> 🏅 Тусгай байр: Г.Оюу-Эрдэнэ — МБОС-н Оёмол бүтээгдэхүүн
        үйлдвэрлэл-2а
        <br />
        👏👏👏 Яруу найргийн наадамд амжилттай оролцсон нийт суралцагчдадаа баяр
        хүргэж амжилт хүсье. ❤️💯👏
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <Image
          src="/1.jpg"
          alt="Наадмын зураг 1"
          width={600}
          height={500}
          className="rounded-xl shadow-md my-4 max-w-full h-auto"
        />
        <Image
          src="/2.jpg"
          alt="Наадмын зураг 2"
          width={600}
          height={500}
          className="rounded-xl shadow-md my-4 max-w-full h-auto"
        />
      </div>
    </div>
  );
}
