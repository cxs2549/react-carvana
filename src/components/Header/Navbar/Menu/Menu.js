import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import styled from "styled-components";
import logo from "../../../../assets/bigLogo.png";
import useOnClickOutside from "use-onclickoutside";

const StyledMenu = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  background-color: #f2f6f8;
  transform: ${(props) => (props.open ? "scaleY(1)" : "scale(0)")};
  transform-origin: top right;
  transition: transform 400ms;
  height: 100vh;
  overflow-y: scroll;
  @media (min-width: 768px) {
    display: none;
  }
  #header {
    padding: 0 1rem;
    padding-top: 0.85rem;
    height: 102px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    position: relative;
    background-color: #ffffff;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    button {
      background-color: transparent;
      border: none;
    }
    #logo {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      img {
        max-width: 80px;
      }
    }
  }
  #list {
    margin-top: 22px;
    height: 100vh;
    ul {
      overflow-y: scroll;
      list-style-type: none;
      li {
        padding: 1rem 2rem;
        padding-right: 1.5rem;
        border-bottom: 1px solid var(--borderColor);
        cursor: pointer;
        &:hover {
          background-color: #fff;
        }

        svg {
          max-width: 22px;
          color: var(--brandLight);
        }
        a,
        p {
          text-decoration: none;
          text-transform: uppercase;
          font-weight: 600;
        }
        > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        #drawer {
          padding: 1.5rem 1rem;
          padding-bottom: 0.5rem;
          display: flex;
          flex-flow: column;
          justify-content: flex-start;
          align-items: flex-start;
          text-transform: uppercase;
          font-size: 90%;
          font-weight: 600;
          color: var(--brandLight);
          gap: 1.5rem;
          span {
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;

const Menu = ({ open, close }) => {
  const [show, setShow] = useState(null);
  const handleShow = (id) => {
    if (show === id) return setShow(null);
    setShow(id);
  };
  const links = [
    { name: "sign in", to: "/signin" },
    { name: "search cars", to: "/cars" },
    { name: "sell/trade", to: "/sell-trade" },
    {
      name: "financing",
      sublinks: [
        "why finance with carvana",
        "get prequalified",
        "auto loan calculator",
      ],
    },
    { name: "car finder", to: "/finder" },
    {
      name: "how it works",
      sublinks: [
        "buying from carvana",
        "selling or trading in",
        "certified cars",
        "referrals",
      ],
    },
    {
      name: "about carvana",
      sublinks: [
        "our story",
        "vehicle protection",
        "careers",
        "customer reviews",
      ],
    },
  ];

  const ref = useRef();
  useOnClickOutside(ref, close);
  return (
    <StyledMenu open={open} ref={ref}>
      <div id="header" onClick={close}>
        <div id="logo">
          <img src={logo} alt="" />
        </div>
        <button onClick={close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div id="list">
        <ul>
          {links.map((link, i) => (
            <li key={i} onClick={() => handleShow(link.name)}>
              <div>
                {link.to && (
                  <NavLink to={link.to} onClick={close}>
                    {link.name}
                  </NavLink>
                )}
                {link.sublinks && <p>{link.name}</p>}
                {link.sublinks && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>
              {show === link.name && link.sublinks && (
                <div id="drawer">
                  {link.sublinks.map((item, i) => (
                    <span>{item}</span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </StyledMenu>
  );
};

export default Menu;
