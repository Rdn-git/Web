"use client";
import Link from "next/link";
import Image from "next/image"; // Image импорт хийх

const CurrentNewsPage: React.FC = () => {
  const news = [
    {
      title: "Ажлын байранд урьж байна",
      slug: "news-1",
      image: "/job.jpg", // Public хавтсанд байрлуулсан зураг
      shortDescription: "",
    },
    {
      title: "СҮЛЖМЭЛИЙН ҮЙЛДВЭРИЙН ТЕХНОЛОГИ ",
      slug: "news-2",
      image: "/news2.jpg", // Public хавтсанд байрлуулсан зураг
      shortDescription:
        "Сүлжмэлийн Үйлдвэрийн Технологи мэргэжлийн суралцагчид ШУТИС-ийн хөнгөн үйлдвэрийн судалгаа хөгжлийн хүрээлэнгийн лаборатортай танилцаа",
    },
    {
      title: "Уран Жиргээ",
      slug: "news-3",
      image: "/Жиргээ.jpg", // Public хавтсанд байрлуулсан зураг
      shortDescription:
        "МОНГОЛ-СОЛОНГОСЫН ПОЛИТЕХНИК КОЛЛЕЖИЙН УРАН УНШЛАГЫН НААДАМ АМЖИЛТТАЙ ЗОХИОН БАЙГУУЛАГДЛАА.",
    },
  ];

  return (
    <div>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
            Сүүлийн үеийн мэдээ, үйл явдал
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item) => (
              <div
                key={item.slug}
                className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-md transition"
              >
                <div className="relative bg-blue-300 h-40">
                  <Image
                    src={item.image} // Зураг зам
                    alt={item.title} // Зургийн тайлбар
                    layout="fill" // Зураг хөрвүүлэх (fill тохиргоо)
                    objectFit="cover" // Зургийг дүрсээр нь тохируулж байрлуулах
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">
                    {item.shortDescription}
                  </p>
                  <Link
                    href={`/currentnews/${item.slug}`}
                    className="text-blue-600 hover:underline mt-4 block"
                  >
                    Дэлгэрэнгүй
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentNewsPage;
