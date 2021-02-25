import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Member from "./components/Member";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/" exact>
					<Homepage />
				</Route>
				<Route path="/member" exact>
					<Member />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
