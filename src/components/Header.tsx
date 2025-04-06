import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const AppHeader: React.FC = () => {
  return (
    <Header className="bg-[#338CF2] px-8 flex items-center justify-between h-[64px]">
      {/* Logo + College Name */}
      <div className="flex items-center space-x-4">
        <img src="/logo-dark.jpg" alt="MCK" className="h-10" />
        <span className="text-white text-lg font-bold">
          Монгол-Солонгосын Политехник Коллеж
        </span>
      </div>

      {/* Menu Items */}
      <div className="flex space-x-4">
        <Link to="/" className="text-white hover:underline">
          Нүүр
        </Link>
        <Link to="/about" className="text-white hover:underline">
          Бидний тухай
        </Link>
        <Link to="/programs" className="text-white hover:underline">
          Хөтөлбөрүүд
        </Link>
        <Link to="/contact" className="text-white hover:underline">
          Холбоо барих
        </Link>
      </div>
    </Header>
  );
};

export default AppHeader;
