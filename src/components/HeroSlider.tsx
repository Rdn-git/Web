import React from "react";

const HeroSlider: React.FC = () => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center text-white text-center">
      <img
        src="/building.jpg"
        alt="Hero Slider"
        className="w-full h-full object-cover"
      />
      <div className="bg-black bg-opacity-50 p-6 rounded-xl absolute">
        <h1 className="text-4xl font-bold mb-4">Тавтай морилно уу</h1>
        <p className="text-xl">Монгол-Солонгосын Политехник Коллеж</p>
      </div>
    </div>
  );
};

export default HeroSlider;
