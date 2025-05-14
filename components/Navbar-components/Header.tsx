import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import MenuButtons from "./MenuButtons";
import AdminMenu from "./AdminMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <Container>
      <header className="bg-white py-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex justify-start items-center gap-0.5">
            <MobileMenu />
            <Logo logoText="eShopping" logoSrc="/EShopping-02.png" />
          </div>
          <MenuButtons />
          <AdminMenu />
        </div>
      </header>
    </Container>
  );
};

export default Header;
