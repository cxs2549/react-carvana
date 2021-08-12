import styled from "styled-components";
import Button from "../../../../components/ui/Button/Button";

const StyledCard = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 8px;
  height: 260px;
  width: 100%;
  background-repeat: no-repeat;
  color: white;
  padding: 3rem 1.75rem;
  position: relative;
  margin-bottom: 0.5rem;
  background-color: #080808;
  background-position: ${props => (props.styled ? 'right -155px center' : '')};
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to right 10%, black, transparent);
    z-index: 0;
  }
  @media (min-width: 768px) {
    background-position: ${props => (props.styled ? 'right -175px center' : '')};
    padding: 3rem;
  }
  @media (min-width: 1280px) {
    padding: 3rem 4rem;
    background-position: ${props => (props.styled ? 'right   center' : 'top center')};
    background-size: ${props => (props.styled ? 'contain' : 'cover')};
  }
 
  h1 {
    line-height: 1.05;
    text-transform: uppercase;
    font-size: 170%;
    margin-bottom: 1rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: -1rem;
      left: 0;

      width: 32px;
      height: 5px;
      background-color: var(--brandYellow);
      z-index: 2;
    }
  }
  p {
    margin-bottom: 0.75rem;
    position: relative;
    line-height: 1.4;
  }
  button {
    position: relative;
  }
 
`;

const Card = ({ title, subtitle, button, image, styled }) => {
  return (
    <StyledCard image={image} styled={styled}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <Button text={button} />
    </StyledCard>
  );
};

export default Card;
