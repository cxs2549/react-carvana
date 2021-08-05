import styled from 'styled-components'
import Cards from "./Cards/Cards"
import SearchFilter from "./SearchFilter/SearchFilter"

const StyledSearch = styled.div`
  padding: 2rem 0;
`

const SearchCars = () => {
  return (
    <StyledSearch>
      <SearchFilter />
      <Cards />
    </StyledSearch>
  )
}

export default SearchCars
