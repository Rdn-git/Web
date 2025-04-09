"use client";

import React, { useState } from "react";
import { Layout, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Image from "next/image";

const { Header } = Layout;

const AppHeader = () => {
  const router = useRouter();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <Header className="bg-blue-700 shadow-md sticky top-0 z-50 w-full px-4 md:px-8 py-2 ">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo + Title + Buttons */}
        <div className="flex items-center gap-6 flex-wrap">
          {/* Logo + Title */}
          <div className="flex items-center gap-3 mb-4 ">
            <Image
              src="/logo-dark.png"
              alt="Logo"
              width={100}
              height={50}
              className="rounded-md object-contain"
              priority
            />
            <span className="text-white text-lg md:text-xl font-semibold leading-tight mt-3 whitespace-nowrap">
              Монгол-Солонгосын Политехник Коллеж
            </span>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4 relative">
            <Button
              type="primary"
              className="text-white"
              onClick={() => router.push("/currentnews")}
            >
              Мэдээ
            </Button>
            <Button
              type="primary"
              className="text-white"
              onClick={() => router.push("/programs")}
            >
              Хөтөлбөр
            </Button>

            {/* Оюутан dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              <Button type="primary" className="text-white">
                Оюутан
              </Button>

              {isDropdownVisible && (
                <div className="absolute top-full left-0 bg-white rounded shadow-md -mt-4 z-50 min-w-[120px]">
                  <button
                    onClick={() => router.push("/students/grades")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Дүн
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <Button
            type="text"
            icon={<MenuOutlined className="text-white text-xl" />}
          />
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
