import styled from "styled-components";
import logo from "../../../assets/logo.png";
import Menu from "./Menu/Menu";
import Menu2 from "../Topbar/Menu2/Menu2";
import { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import useOnClickOutside from 'use-onclickoutside'

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 1rem;
  max-width: var(--maxWidth);
  margin: 0 auto;
  color: var(--brandDark);
  position: fixed;
  top: 36px;
  left: 0;
  background-color: #fff;
  width: 100%;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  @media (min-width: 1024px) {
    padding: 0 1.75rem;
  }
  @media (min-width: 1536px) {
    padding: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 96%;
    @media (min-width: 1024px) {
      font-size: 100%;
    }
    &:hover {
      color: var(--brandLight);
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
        display: block;
      }
      @media (min-width: 1024px) {
        margin-left: 4rem;
      }
      ul {
        list-style-type: none;
        gap: 2rem;
        display: flex;
        font-size: 90%;
        
        @media (min-width: 1024px) {
          font-size: 100%;
        }
        li {
          position: relative;
        }
      }
      #more {
        text-transform: uppercase;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
  #right {
    #signInBtn {
      display: none;
      font-size: 90%;
      @media (min-width: 768px) {
        display: block;
      }
      @media (min-width: 1024px) {
        font-size: 100%;
      }
      color: var(--brandLight) !important;
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
    { name: "search cars", to: "/cars" },
    { name: "sell/trade", to: "/sell-my-car" },
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
  const [isOpenFin, setIsOpenFin] = useState(false);

  const handleFin = () => {
    setIsOpenFin(!isOpenFin)
  }
  const handleFinClose = () => {
    setIsOpenFin(false)
  }

  const aboutLinks = [
    { name: "about us", to: "/about-us" },
    { name: "vehicle protection", to: "/vehicle-protection" },
    { name: "customer reviews", to: "/customer-reviews" },
    { name: "careers", to: "/careers" },
  ];

  const finRef = useRef()
  useOnClickOutside(finRef, handleFinClose)
  return (
    <StyledNavbar>
      <div id="left">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div id="links">
          <ul ref={finRef}>
            {links.map((link, i) => (
              <li key={i} onClick={i === 2 && handleFin} >
                {link.to && <NavLink to={link.to}>{link.name}</NavLink>}
                {!link.to && (
                  <div id="more">
                    <p>{link.name}</p>
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                  </div>
                )}
                {i === 2 && <Menu2 open={isOpenFin} links={aboutLinks} />}
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
        <div id="signInBtn">
          <a href="/">Sign in</a>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
