import { useState } from "react";

import TitleScreen from "./components/modals/TitleScreen";
import HelpScreen from "./components/modals/HelpScreen";
import Header from "./components/Header";
import Score from "./components/Score";
import Level from "./components/Level";
import Keyboard from "./components/Keyboard";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

export default function App() {
	const [count, setCount] = useState(0);

	return (
		<div id="app">
			<TitleScreen></TitleScreen>
			<HelpScreen></HelpScreen>
			<div id="game">
				<Header trigram={"CAR"}></Header>
				<Score score={0} scoreMax={12}></Score>
				<Level></Level>
				<Keyboard></Keyboard>
			</div>
		</div>
	);
}
