import styled from "styled-components";

const StyledMenu = styled.div`
  position: absolute;
  top: 1.4rem;
  left: 0;
  width: auto;
  background-color: white;
  color: black;
  z-index: 200;
  transform: ${(props) => (props.open ? "translateY(0)" : "translateY(-150%)")};
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: transform 400ms;
  ul {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    list-style-type: none;
    gap: 0 !important;
    li {
      padding: .75rem 1rem;
      padding-right: 2rem;
      width: 100%;
      text-align: start;
    }
    a {
      text-decoration: none;
      color: var(--brandDark);
      &:hover {
        color: var(--brandLight);
      }
      white-space: nowrap;
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
