import { useState, useRef } from "react";
import styled from "styled-components";
import Menu from "./Menu/Menu";
import Menu2 from "./Menu2/Menu2";
import useOnClickOutside from 'use-onclickoutside'


const StyledTopbar = styled.div`
  background-color: var(--brandBlue);
  color: white;
  padding: 0.7rem 1rem;
  height: 36px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  @media (min-width: 1024px) {
    padding: 0.7rem 1.75rem;
  }
  #wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 4rem;
    z-index: 100;
    max-width: var(--maxWidth);
    margin: 0 auto;
    position: relative;
  }
  #box {
    &:first-child,
    &:nth-child(2) {
      display: none;
      @media (min-width: 768px) {
        display: block;
        position: relative;
      }
    }
  }
  button {
    background-color: transparent;
    color: inherit;
    text-transform: uppercase;
    gap: 0.5rem;
    display: flex;
    border: none;
    font-weight: 600;
    font-size: 70%;
    cursor: pointer;
    transition: color 200ms;
    opacity: .9;
    @media (min-width: 768px) {
      font-size: 75%;
    }
    &:hover, &:focus {
      opacity: 1;
    }
  }
`;

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const handleClick = () => {
    if (!isOpen2) setIsOpen2(false);
    if (!isOpen3) setIsOpen3(false);
    setIsOpen(!isOpen);
  };

  const handleClick2 = () => {
    if (isOpen2) return setIsOpen2(false);
    if (isOpen) return setIsOpen(false);
    setIsOpen2(!isOpen2);
  };
  const handleClick3 = () => {
    if (isOpen2) return setIsOpen2(false);
    if (isOpen) return setIsOpen(false);
    setIsOpen3(!isOpen3);
  };
  const handleClose1 = () => {
    setIsOpen(false);
  };
  const handleClose3 = () => {
    setIsOpen3(false);
  };


  const handleClose = () => {
    setIsOpen2(null);
  };
  const supportQuestions = [
    {
      name: "How does your process work?",
      answer:
        "Using our comprehensive search filters and 360 degree vehicle tour, you can find your dream car right from the comfort of home. Personalize your order by applying for financing, choosing your payment option, adding a trade-in, and scheduling your vehicle to be delivered right to your door or picked up from our coin-operated vending machine!",
      id: "work",
    },
    {
      name: "How do I buy a car?",
      answer:
        'Once you find the car you want, click "Get Started" on the vehicle details page to kick off the order process. Entering your personal information and completing each step will extend the time the vehicle is reserved for you to complete your order.',
      id: "buy",
    },
    {
      name: "Are the Carvana financing terms I see on the site real? Will they change?",
      answer:
        "When you pre-qualify you'll see real, personalized terms based on the information you provide. As long as the information you provided can be verified as accurate by our Underwriting Team, there should not be any changes to your terms. To get pre-qualified, click here.",
      id: "finance",
    },
  ];
  const aboutLinks = [
    { name: "about us", to: "/about-us" },
    { name: "vehicle protection", to: "/vehicle-protection" },
    { name: "customer reviews", to: "/customer-reviews" },
    { name: "careers", to: "/careers" },
  ];
  const howLinks = [
    { name: "buying from carvana" },
    { name: "selling or trading in" },
    { name: "certified cars" },
    { name: "referrals" },
  ];
  // let menuRef = useClickOutside(() => {
  //   handleClose1();
  // });
  // const menuRef2 = useClickOutside(() => {
  //   handleClose();
  // });

  const menuRef = useRef()
  const menuRef2 = useRef()
  const menuRef3 = useRef()

  useOnClickOutside(menuRef, handleClose1)
  useOnClickOutside(menuRef2, handleClose)
  useOnClickOutside(menuRef3, handleClose3)

  return (
    <StyledTopbar>
      <div id="wrapper">

        

        <div id="box" ref={menuRef2}>
          <button onClick={handleClick2}>
            <span>how it works</span>
            <i className="fa fa-caret-down" aria-hidden="true" />
            <Menu2 open={isOpen2} links={howLinks} />
          </button>
        </div>
        <div id="box" ref={menuRef3}>
          <button onClick={handleClick3}>
            <span>about carvana</span>
            <i className="fa fa-caret-down" aria-hidden="true" />
            <Menu2 open={isOpen3} links={aboutLinks} />
          </button>
        </div>

        <div id="box" ref={menuRef}>
          <Menu open={isOpen} questions={supportQuestions} />
          <button onClick={handleClick}>
            <span>support & contact</span>
            <i className="fa fa-caret-down" aria-hidden="true" />
          </button>
        </div>
      </div>
    </StyledTopbar>
  );
};

export default Topbar;
