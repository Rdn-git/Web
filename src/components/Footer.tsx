import React from "react";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white pt-10 pb-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Холбоо барих */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Холбоо барих</h3>
          <p className="flex items-center gap-2 mb-2">
            <EnvironmentOutlined /> Улаанбаатар хот, Хан-Уул дүүрэг
          </p>
          <p className="flex items-center gap-2 mb-2">
            <PhoneOutlined /> +976 7711-xxxx
          </p>
          <p className="flex items-center gap-2">
            <MailOutlined /> info@mkpc.edu.mn
          </p>
        </div>

        {/* Товч холбоос */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Тусламж</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:underline">
                Бидний тухай
              </a>
            </li>
            <li>
              <a href="/programs" className="hover:underline">
                Хөтөлбөр
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Холбоо барих
              </a>
            </li>
          </ul>
        </div>

        {/* Зохиогчийн эрх */}
        <div className="md:col-span-1 text-sm">
          <h3 className="text-lg font-semibold mb-4">Зохиогчийн эрх</h3>
          <p className="leading-relaxed">
            © 2025 Монгол-Солонгосын Политехник Коллеж. <br />
            Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </div>

      <div className="border-t border-white border-opacity-20 mt-8 pt-4 text-center text-sm text-gray-300">
        Вэб сайтыг бүтээв —{" "}
        <a
          href="https://github.com/yourname"
          target="_blank"
          className="underline hover:text-white"
        >
          Баярхүү / МТ-3А
        </a>
      </div>
    </footer>
  );
};

export default Footer;
