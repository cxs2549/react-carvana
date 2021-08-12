import styled from 'styled-components'

const StyledSafe = styled.div`
  display: flex;
  justify-content: center;
  gap: .75rem;
  padding: 1.5rem 0;
  color: var(--brandDark);
  a {
    text-decoration: none;
    color: var(--brandLight);
    display: flex;
    align-items: center;
    gap: .25rem;
    svg {
      font-size: 11px;
    }
  }
`

const Safe = () => {
  return (
    <StyledSafe>
      <p>Safe, touchless delivery & pickup.</p>
      <a href="/"><span>Learn More</span><i class="fa fa-chevron-right" aria-hidden="true"></i></a>
    </StyledSafe>
  )
}

export default Safe
