import styled from "styled-components";
import logo from "../../../assets/logo.png";
import Menu from "./Menu/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 1rem;
	max-width: 1500px;
	margin: 0 auto;
	@media (min-width: 1024px) {
		padding: 0 1.75rem;
	}
	@media (min-width: 1536px) {
		padding: 0;
	}
  a {
    text-decoration: none;
    color: var(--brandDark);
    text-transform: uppercase;
    font-weight: 600;
		font-size: 96%;
		@media (min-width: 1024px) {
			font-size: 100%;
		}
  }
  #left {
    display: flex;
    align-items: center;

    img {
      max-width: 160px;
      min-height: 100%;
			margin-top: 2px;
    }
    #links {
			display: none;
      margin-left: 1.5rem;
			@media (min-width: 768px) {
				display: block
			}
			@media (min-width: 1024px) {
				margin-left: 4rem;
			}
      ul {
        list-style-type: none;
        gap: 2rem;
        display: flex;
      }
    }
  }
  #right {
    #signInBtn {
			display: none;
			@media (min-width: 768px) {
				display: block;
			}
      color: var(--brandLight);
    }
    svg {
      width: 30px;
      cursor: pointer;
    }
    #burger {
      @media (min-width: 768px) {
        display: none;
      }
    }
  }
`;

const Navbar = () => {
  const links = [
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
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledNavbar>
      <div id="left">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div id="links">
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <a href="/">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div id="right">
        <div id="burger" onClick={() => setIsOpen(true)}>
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
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <Menu open={isOpen} close={() => setIsOpen(false)} />
        <div>
          <a href="/" id="signInBtn">Sign in</a>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
