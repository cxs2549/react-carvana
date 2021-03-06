import styled from "styled-components";
import heroMd from "../../../assets/hero-md.png";
import heroXl from "../../../assets/hero.png";
import Button from "../../../components/ui/Button/Button";

const StyledHero = styled.div`
  height: 60vh;
  width: 100%;
  background-color: var(--brandLight);
  background-image: url(${heroMd});
  background-position: center center;
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
      height: 70%;
      width: 100%;
      background-image: linear-gradient(to bottom, #0000004b 3%, transparent);
      z-index: 0;
    }
    h1 {
      line-height: 0.95;
      text-transform: uppercase;
      font-size: 170%;
      position: relative;
      z-index: 1;
      margin-bottom: 0.75rem;
      transition: font-size 400ms;
      letter-spacing: 0.5px;
      @media (min-width: 768px) {
        font-size: 290%;
      }
      @media (min-width: 1024px) {
        font-size: 480%;
        line-height: 0.85;
        margin-bottom: 1rem;
      }
      &::before {
        content: "";
        position: absolute;
        top: -0.75rem;
        left: 50%;
        transform: translateX(-50%);
        width: 32px;
        height: 5px;
        background-color: var(--brandYellow);
        z-index: 2;
        @media (min-width: 1024px) {
          top: 0;
        }
      }
      span {
        font-size: 0.7em;
        @media (min-width: 1024px) {
          font-size: 0.5em;
        }
      }
    }
    p,
    button {
      position: relative;
      z-index: 1;
    }
    p {
      margin-bottom: 1.5rem;
      padding: 0 2rem;
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
      &:nth-of-type(2) {
        margin-top: 1rem;
        @media (min-width: 1024px) {
          margin-top: 0;
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

      text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.201);
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
          <Button text="get pre-qualified" />
          <br />
          <span id="or">OR</span>
          <br />
          <Button text="search all vehicles" invert />
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
