import { Fragment } from 'react'
import { useRoutes } from "react-router"
import GlobalStyle from './globalStyle'
import Header from './components/Header/Header'
import Home from "./views/Home/Home"

const routes = [
	{path: "/", element: <Home />}
]

const App = () => {
	const element = useRoutes(routes)
	return (
		<Fragment>
			<GlobalStyle />
			<Header />
			<main>
				{element}
			</main>
		</Fragment>
	)
}

export default App
