import { NavLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import logo from "../../../../assets/bigLogo.png";

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
  @media (min-width: 768px) {
    display: none;
  }
  #header {
    padding: 0 1rem;
    padding-bottom: 1rem;
    height: 102px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;
    background-color: #fff;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
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
    ul {
      list-style-type: none;
      li {
        padding: 1rem 2rem;
        padding-right: 1.5rem;
        border-bottom: 1px solid var(--borderColor);
				cursor: pointer;
        svg {
          max-width: 22px;
        }
        a, p {
          text-decoration: none;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--brandDark);
          &:hover {
            color: var(--brandLight);
          }
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
    { name: "search cars", to: "/search" },
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
  return (
    <StyledMenu open={open}>
      <div id="header">
        <div id="logo">
          <img src={logo} alt="" />
        </div>
        <button onClick={close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
                {link.to && <NavLink to={link.to}>{link.name}</NavLink>}
								{link.sublinks && (
									<p>{link.name}</p>
								)}
                {link.sublinks && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
