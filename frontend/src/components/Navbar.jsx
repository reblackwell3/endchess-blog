import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #282c34;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavbarRight = styled.div`
  display: flex;
  gap: 20px;
`;

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLeft>
        <ProfileImage src="/profile.jpg" alt="Profile" />
      </NavbarLeft>
      <NavbarRight>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/about">About Me</NavbarLink>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;
