import styled from 'styled-components'
import logo from '../../../assets/logo.png'
import Menu from './Menu/Menu'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const StyledNavbar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 60px;
	padding: 0 1rem;
	#left {
		display: flex;
		align-items: center;

		img {
			max-width: 160px;
			min-height: 100%;
		}
	}
	#right {
        svg {
            width: 30px;
			cursor: pointer;
        }
	}
`

const Navbar = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	return (
		<StyledNavbar>
			<div id="left">
				<Link to="/"><img src={logo} alt="" /></Link>
			</div>
			<div id="right">
				<div onClick={() => setIsOpen(true)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</div>
				<Menu open={isOpen} close={() => setIsOpen(false)} />
			</div>
		</StyledNavbar>
	)
}

export default Navbar
