import { Fragment } from 'react'
import { useRoutes } from "react-router"
import GlobalStyle from './globalStyle'
import Header from './components/Header/Header'
import Home from "./views/Home/Home"
import SearchCars from "./views/SearchCars/SearchCars"
import Sell from "./views/Sell/Sell"

const routes = [
	{path: "/", element: <Home />},
	{path: "/cars", element: <SearchCars />},
	{path: "/sell-my-car", element: <Sell />},
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
