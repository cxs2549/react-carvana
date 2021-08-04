import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	scrollbar-width: none;
}

body {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
		'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
:root {
	--brandBlue: #114C8C;
	--brandDark: rgb(24, 53, 88);
	--brandLight: rgb(0, 174, 217);
	--borderColor: rgb(170, 177, 199);
}
`

export default GlobalStyle
