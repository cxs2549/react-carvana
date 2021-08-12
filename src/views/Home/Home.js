import styled from 'styled-components'
import Cards from "./Cards/Cards"
import Hero from "./Hero/Hero"

const StyledHome = styled.div`
  color: black;
`

const Home = () => {
  return (
    <StyledHome>
      <Hero />
      <Cards />
    </StyledHome>
  )
}

export default Home
