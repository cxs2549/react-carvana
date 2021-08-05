import styled from 'styled-components'
import SearchFilter from "./SearchFilter/SearchFilter"

const StyledSearch = styled.div`
  padding: 2rem 0;
`

const SearchCars = () => {
  return (
    <StyledSearch>
      <SearchFilter />
    </StyledSearch>
  )
}

export default SearchCars
