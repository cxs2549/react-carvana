import styled from 'styled-components'
import Menu from './Menu/Menu'
import { useState } from 'react'

const StyledSupportbar = styled.div`
	background-color: var(--brandBlue);
	color: white;
	padding: .7rem 1rem;
	display: flex;
	justify-content: flex-end;
	button {
		background-color: transparent;
		color: inherit;
		text-transform: uppercase;
		gap: .5rem;
		display: flex;
		border: none;
		font-weight: 600;
		cursor: pointer;
		&:hover {
			text-shadow: 1px 1px 0px gray;
		}
	}
`

const Supportbar = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	return (
		<StyledSupportbar>
			<button onClick={() => setIsOpen(!isOpen)}>
				<span>support & contact</span>
				<i class="fa fa-caret-down" aria-hidden="true" />
			</button>
			<Menu open={isOpen} />
		</StyledSupportbar>
	)
}

export default Supportbar
