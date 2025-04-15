// src/app/about/page.tsx

import AboutSlider from "@/components/AboutSlider";

const AboutPage = () => {
  return (
    <div>
      {/* Latest News section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
            Сүүлийн үеийн мэдээ, үйл явдал
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-md transition"
              >
                <div className="bg-blue-300 h-40"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Мэдээ {i}</h3>
                  <p className="text-sm text-gray-600">
                    Энд тухайн мэдээний товч тайлбар байрлана.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
