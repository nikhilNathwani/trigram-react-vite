import { useState } from "react";

import TitleScreen from "./components/modals/TitleScreen";
import HelpScreen from "./components/modals/HelpScreen";
import Header from "./components/Header";
import Level from "./components/Level";
import Keyboard from "./components/Keyboard";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div id="app">
			<TitleScreen></TitleScreen>
			<HelpScreen></HelpScreen>
			<div id="game">
				<Header></Header>
				<Level></Level>
				<Keyboard></Keyboard>
			</div>
		</div>
	);
}

export default App;
