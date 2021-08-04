import styled from "styled-components";
import heroMd from "../../../assets/hero-md.png";
import heroXl from "../../../assets/hero.png";

const StyledHero = styled.div`
  height: 49vh;
  width: 100%;
  background-color: var(--brandLight);
  background-image: url(${heroMd});
  background-position: center bottom;
  background-size: cover;
  transition: height 400ms;
  @media (min-width: 768px) {
    background-image: url(${heroXl});
    height: 58vh;
  }
  @media (min-width: 1280px) {
    height: 65vh;
  }

  #textWrapper {
    height: 100%;
    text-align: center;
    padding-top: 2.5rem;
    color: white;
    position: relative;
    @media (min-width: 768px) {
      padding-top: 3rem;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 60%;
      width: 100%;
      background-image: linear-gradient(to bottom, #0000004c 3%, transparent);
      z-index: 0;
    }
    h1 {
      line-height: 0.95;
      text-transform: uppercase;
      font-size: 170%;
      position: relative;
      z-index: 1;
      margin-bottom: 1rem;
      transition: font-size 400ms;
      @media (min-width: 768px) {
        font-size: 290%;
      }
      @media (min-width: 1024px) {
        font-size: 470%;
      }
      &::before {
        content: "";
        position: absolute;
        top: -0.75rem;
        left: 50%;
        transform: translateX(-50%);
        width: 40px;
        height: 5px;
        background-color: var(--brandYellow);
      }
      span {
        font-size: .7em;
        @media (min-width: 1024px) {
          font-size: .5em;
        }
      }
    }
    p,
    button {
      position: relative;
      z-index: 1;
    }
    p {
      margin-bottom: 1rem;
      padding: 0 3rem;
      @media (min-width: 768px) {
        font-size: 140%;
      }
      @media (min-width: 1024px) {
        font-size: 160%;
      }
    }
    #buttons {
      @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
      }
    }
    button {
      width: 200px;
      min-width: 88px;
      font-size: 14px;
      box-sizing: border-box;
      min-height: 45px;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      line-height: 20px;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      border: 0px;
      display: inline-flex;
      padding: 0px;
      outline: none;
      user-select: none;
      align-items: center;
      vertical-align: middle;
      justify-content: center;
      text-decoration: none;
      border-radius: 2px;
      margin: 0.5rem 0;
      @media (min-width: 768px) {
        height: 56px;
        width: 250px;
      }
      &:first-of-type {
        background-color: var(--brandLight);
        color: white;
        &:hover {
          background-color: white;
          color: var(--brandLight);
        }
      }
      &:nth-of-type(2) {
        color: var(--brandLight);
        background-color: white;
        &:hover {
          color: white;
          background-color: var(--brandLight);
        }
      }
    }
    #or {
      font-size: 90%;
      position: relative;
      font-weight: 600;
      color: white;
      position: relative;
      z-index: 1;
      text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
      &::before {
        content: "";
        position: absolute;
        right: 1.75rem;
        top: 55%;
        transform: translateY(-50%);
        width: 80px;
        height: 1px;
        background-color: #fff;
        @media (min-width: 768px) {
          display: none;
        }
      }
      &::after {
        content: "";
        position: absolute;
        left: 1.75rem;
        top: 55%;
        transform: translateY(-50%);
        width: 80px;
        height: 1px;
        background-color: #fff;
        @media (min-width: 768px) {
          display: none;
        }
      }
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <div id="textWrapper">
        <h1>
          <span>cars that</span> <br /> fit your budget
        </h1>
        <p>Get pre-qualified to see personalized financing terms.</p>
        <div id="buttons">
          <button>get pre-qualified</button>
          <br />
          <span id="or">OR</span>
          <br />
          <button>search all vehicles</button>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
