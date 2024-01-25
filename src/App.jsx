import { useState } from "react";
import Keyboard from "./components/Keyboard";
import TitleScreen from "./components/modals/TitleScreen";
import HelpScreen from "./components/modals/HelpScreen";
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
				<div id="jumbotron">
					<div id="scoreWidget" className="jumbotron-widget">
						<p className="widget-title" id="scoreTitle">
							score
						</p>
						<p className="widget-value" id="score">
							0
						</p>
					</div>
					<div id="trigramWidget" className="jumbotron-widget">
						<p className="widget-value" id="trigram">
							CAR
						</p>
					</div>
					<div id="timerWidget" className="jumbotron-widget">
						<p className="widget-title" id="timerTitle">
							timer
						</p>
						<p className="widget-value" id="timer">
							0
						</p>
					</div>
				</div>
				<div id="level"></div>
				<Keyboard></Keyboard>
			</div>
		</div>
	);
}

export default App;
