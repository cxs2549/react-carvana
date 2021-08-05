import styled from 'styled-components'
import Card from "./Card/Card"

const StyledCards = styled.div`
  padding: 2rem 1rem;
  background-color: #f4f8fa;
  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

const Cards = () => {
  return (
    <StyledCards>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledCards>
  )
}

export default Cards
