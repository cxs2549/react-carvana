import styled from "styled-components";
import Card from "./Card/Card";
import Safe from "./Safe/Safe";
import card1 from "../../../assets/homeCards/jj.png";
import card2 from "../../../assets/homeCards/keys.png";

const StyledCards = styled.div`
  background-color: #f3f7f9;
  padding: 0 0.5rem;
  height: 60vh;
  #cards {
    @media (min-width: 768px) {
      display: grid;
      gap: 0.5rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const Cards = () => {
  const couple = [
    {
      title: ["carvana +", <br />, "jimmie johnson"],
      subtitle: [
        "An exciting new partnership with one",
        <br />,
        "of the world’s most legendary drivers.",
      ],
      button: "explore now",
      image: card1,
      styled: true,
    },
    {
      title: ["sell or trade", <br />, "your car"],
      subtitle: [
        "Get a real offer in just 2 minutes.",
        <br />,
        "We'll even pick up your car.",
      ],
      button: "get an offer",
      image: card2,
    },
  ];
  return (
    <StyledCards>
      <Safe />
      <div id="cards">
        {couple.map((card, i) => (
          <Card
            key={i}
            title={card.title}
            subtitle={card.subtitle}
            button={card.button}
            image={card.image}
            styled={card.styled}
          />
        ))}
      </div>
    </StyledCards>
  );
};

export default Cards;
