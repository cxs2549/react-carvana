import styled from 'styled-components'
import Navbar from './Navbar/Navbar'
import Topbar from "./Topbar/Topbar"


const StyledHeader = styled.header`border-bottom: 1px solid var(--borderColor);
	position: relative;
	z-index: 200;
`

const Header = () => {

	return (
		<StyledHeader>
			<Topbar />
			<Navbar />
		</StyledHeader>
	)
}

export default Header
