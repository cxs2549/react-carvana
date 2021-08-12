import styled from "styled-components";

const StyledButton = styled.button`
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
  border-radius: 3px;
  margin-bottom: 0.5rem;
  background-color: ${(props) => (props.invert ? "#fff" : "var(--brandLight)")};
  color: ${(props) => (props.invert ? "var(--brandLight)" : "white")};
  @media (min-width: 768px) {
    height: 56px;
    width: 250px;
  }
  @media (min-width: 1024px) {
    font-size: 100%;
  }
  &:hover {
    color: ${(props) => (props.invert ? "white" : "var(--brandLight)")};
    background-color: ${(props) => (props.invert ? "var(--brandLight)" : "white")};
  }
`;

const Button = ({ text, invert }) => {
  return <StyledButton invert={invert}>{text}</StyledButton>;
};

export default Button;
