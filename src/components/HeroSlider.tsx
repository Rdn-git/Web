import React from "react";

const HeroSlider: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px]">
      {/* Background Image */}
      <img
        src="/building.jpg"
        alt="Hero Slider"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Тавтай морилно уу
          </h1>
          <p className="text-lg md:text-2xl text-white drop-shadow-md">
            Монгол-Солонгосын Политехник Коллеж
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
