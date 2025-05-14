"use client";
import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import SideMenu from "./SideMenu";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="md:hidden"
      >
        <AlignLeft className="text-primary-color hoverEffect hover:text-accent-color hover:cursor-pointer" />
      </button>
      <div className="md:hidden">
        <SideMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen((prev) => !prev)}
        />
      </div>
    </>
  );
};

export default MobileMenu;
