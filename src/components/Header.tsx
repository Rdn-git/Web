"use client";

import React, { useEffect, useRef, useState } from "react";
import { Layout, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Image from "next/image";

const { Header } = Layout;

const AppHeader = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // 👉 Гадна талд дарвал mobile menu хаагдах
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <Header className="bg-blue-700 shadow-md sticky top-0 z-50 w-full px-4 md:px-8 py-2">
      <div className="flex justify-between items-center max-w-7xl mx-auto relative">
        {/* Logo + Title */}
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <Image
            src="/logo-dark.png"
            alt="Logo"
            width={100}
            height={50}
            className="rounded-md object-contain"
            priority
          />
          <span className="text-white text-lg md:text-xl font-semibold leading-tight mt-3 whitespace-nowrap">
            Монгол-Солонгосын Политехник Коллеж ТБОС
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
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
          <Button
            type="primary"
            className="text-white"
            onClick={() => router.push("students/login")}
          >
            Оюутан
          </Button>
          <Button
            type="primary"
            className="text-white"
            onClick={() => router.push("teachers/login")}
          >
            Багшаар нэвтрэх
          </Button>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <Button
            type="text"
            icon={<MenuOutlined className="text-white text-xl" />}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div
            ref={menuRef}
            className="absolute left-0 right-0 top-full w-full bg-blue-600 px-4 pb-1 space-y-2 z-40 flex flex-col items-end max-w-7xl mx-auto"
          >
            <Button
              type="primary"
              className="text-white w-[100px] h-[36px] text-sm"
              onClick={() => {
                router.push("/currentnews");
                setMobileMenuOpen(false);
              }}
            >
              Мэдээ
            </Button>
            <Button
              type="primary"
              className="text-white w-[100px] h-[36px] text-sm"
              onClick={() => {
                router.push("/programs");
                setMobileMenuOpen(false);
              }}
            >
              Хөтөлбөр
            </Button>
            <Button
              type="primary"
              className="text-white w-[100px] h-[36px] text-sm"
              onClick={() => {
                router.push("students/login");
                setMobileMenuOpen(false);
              }}
            >
              Оюутан
            </Button>
            <Button
              type="primary"
              className="text-white w-[100px] h-[36px] text-sm"
              onClick={() => {
                router.push("teachers/login");
                setMobileMenuOpen(false);
              }}
            >
              Багшаар нэвтрэх
            </Button>
          </div>
        )}
      </div>
    </Header>
  );
};

export default AppHeader;
