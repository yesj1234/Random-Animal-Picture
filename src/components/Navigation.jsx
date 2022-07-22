import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation() {
  return (
    <Navbar>
      <ul>
        <li>
          <FontAwesomeIcon icon="dog" size="3x" />
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Duck</a>
        </li>
        <li>
          <a href="#">Fox</a>
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
