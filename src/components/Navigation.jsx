import React, { useRef } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animalAtom } from "../recoil/atoms";

function Navigation() {
  const setCurAnimal = useSetRecoilState(animalAtom);
  const dogRef = useRef();

  const foxRef = useRef();
  const handleDogClick = () => {
    setCurAnimal(dogRef.current.innerHTML);
  };

  const handleFoxClick = () => {
    setCurAnimal(foxRef.current.innerHTML);
  };
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <Navbar>
      <ul>
        <li>
          <FontAwesomeIcon icon="dog" size="3x" />
        </li>
        <li>
          <NavLink
            to="dog"
            value="dog"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            ref={dogRef}
            onClick={handleDogClick}
          >
            Dog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="fox"
            value="fox"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            ref={foxRef}
            onClick={handleFoxClick}
          >
            Fox
          </NavLink>
        </li>
      </ul>
    </Navbar>
  );
}

export default Navigation;

const Navbar = styled.div`
  position: absolute;
  ul {
    display: flex;
    gap: 12px;
    margin-left: 6px;
    top: 0;
  }
  ul li {
    font-size: 24px;
    font-weight: 700;
    list-style: none;
    align-self: center;
  }
  ul li a {
    text-decoration: none;
  }
`;
