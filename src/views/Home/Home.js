import styled from 'styled-components'
import Hero from "./Hero/Hero"

const StyledHome = styled.div`
  color: black;
`

const Home = () => {
  return (
    <StyledHome>
      <Hero />
    </StyledHome>
  )
}

export default Home
