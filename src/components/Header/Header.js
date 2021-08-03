import styled from 'styled-components'
import Navbar from './Navbar/Navbar'
import Supportbar from './Supportbar/Supportbar'

const StyledHeader = styled.header`border-bottom: 1px solid var(--borderColor);`

const Header = () => {
	return (
		<StyledHeader>
			<Supportbar />
			<Navbar />
		</StyledHeader>
	)
}

export default Header
