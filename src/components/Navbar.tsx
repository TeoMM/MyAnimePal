import React, { useState } from "react";

import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/">
        <span>My</span>Anime<span>Pal</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Linker to="/toplist">Friend Toplist</Linker>
        <Linker to="/search">Search Profile</Linker>
        <Linker to="/profile">Your Profile</Linker>
      </Menu>
    </Nav>
  );
}

type MenuProps = {
  isOpen: boolean;
};

const MenuLink = styled.a`
  padding: 1rem 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #b0ffdeca;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #7b7fda;
  }
`;
const Linker = MenuLink.withComponent(Link);

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #3358b1;
`;

const LogoTemplate = styled.a`
  padding: 1rem 0;
  color: #959afa;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 400;
    font-size: 1.3rem;
  }
`;
const Logo = LogoTemplate.withComponent(Link);

const Menu = styled.div<MenuProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
