
import { useRef } from "react";
import styled from "styled-components";
import useOnClickOutside from 'use-onclickoutside'

const StyledMenu = styled.div`
  position: absolute;
  top: 2rem;
  left: 0;
  width: 200px;
  background-color: white;
  color: black;
  z-index: 200;
  display: ${(props) => (props.open ? "block" : "none")};
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 1rem;
  ul {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    list-style-type: none;
    gap: 1rem;
    a {
      text-decoration: none;
      color: var(--brandDark);
      &:hover { color: var(--brandLight)}
    }
  }
`;

const Menu2 = ({ open, links }) => {
  return (
    <StyledMenu open={open}>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <a href="/">{link.name}</a>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

export default Menu2;
