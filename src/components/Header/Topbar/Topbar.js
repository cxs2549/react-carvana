import styled from "styled-components";
import Menu from "./Menu/Menu";
import { useState } from "react";
import Menu2 from "./Menu2/Menu2";

const StyledTopbar = styled.div`
  background-color: var(--brandBlue);
  color: white;
  padding: 0.7rem 1rem;
  height: 36px;
  @media (min-width: 768px) {
    padding: 0.7rem 1.75rem;
  }
  #wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 4rem;
    z-index: 100;
    max-width: 1500px;
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
    &:hover {
      text-shadow: 1px 1px 0px gray;
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
    @media (min-width: 768px) {
      font-size: 75%;
    }
  }
`;

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(null);

  const handleClick = () => {
    if (isOpen2 !== null) setIsOpen2(null);
    setIsOpen(!isOpen);
  };

  const handleClose1 = () => {
    setIsOpen(false)
  }

  
  
  const handleClick2 = (id) => {
    if (isOpen2 === id) return setIsOpen2(null);
    if (isOpen) setIsOpen(false);
    setIsOpen2(id);
  };
  
  const handleClose = () => {
    setIsOpen2(null)
  }
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

  return (
    <StyledTopbar>
      <div id="wrapper">
        <div id="box">
          <button onClick={() => handleClick2("how")}>
            <span>how it works</span>
            <i className="fa fa-caret-down" aria-hidden="true" />
            <Menu2 open={isOpen2 === "how"} links={howLinks} close={handleClose} />
          </button>
        </div>
        <div id="box">
          <button onClick={() => handleClick2("about")}>
            <span>about carvana</span>
            <i className="fa fa-caret-down" aria-hidden="true" />
            <Menu2 open={isOpen2 === "about"} links={aboutLinks} />
          </button>
        </div>
        <div id="box">
          <button onClick={handleClick}>
            <span>support & contact</span>
            <i className="fa fa-caret-down" aria-hidden="true" />
          </button>
          <Menu open={isOpen} questions={supportQuestions} close={handleClose1} />
        </div>
      </div>
    </StyledTopbar>
  );
};

export default Topbar;
