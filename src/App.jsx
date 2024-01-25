import { useState } from "react";
import Keyboard from "./components/Keyboard";
import TitleScreen from "./components/modals/TitleScreen";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div id="app">
			<TitleScreen></TitleScreen>
			<div id="help" className="modal">
				<div className="modal-content">
					<div className="closeRow">
						<div className="close">&times;</div>
					</div>
					<h2>How to play Trigram</h2>
					<ul>
						<li>
							A <em>Trigram</em> is a sequence of 3 letters, like{" "}
							<span className="help-trigram">CAT</span>
						</li>
						<li>
							Make increasingly long words containing the Trigram
							of the day.
						</li>
						<li>
							You have 3 minutes to see how long a word you can
							reach!
						</li>
						<li>
							Each word unlocks the chance to enter a longer word.
							First a 4-letter word, then 5-letter word, then
							6-letter, and so on.
						</li>
					</ul>

					<h2>Example</h2>
					<ul>
						<li>
							Trigram of the day:{" "}
							<span className="help-trigram">CAT</span>
						</li>
						<li>
							4-letter word:{" "}
							<span className="help-trigram-subtle">CAT</span>S
						</li>
						<li>
							5-letter word:{" "}
							<span className="help-trigram-subtle">CAT</span>
							ER
						</li>
						<li>
							6-letter word:{" "}
							<span className="help-trigram-subtle">CAT</span>
							SUP
						</li>
						<li>
							7-letter word: S
							<span className="help-trigram-subtle">CAT</span>
							TER
						</li>
						<li>
							8-letter word: DELI
							<span className="help-trigram-subtle">CAT</span>E
						</li>
						<li>
							9-letter word: DELI
							<span className="help-trigram-subtle">CAT</span>
							ES
						</li>
						<li>
							10-letter word: DELI
							<span className="help-trigram-subtle">CAT</span>
							ELY
						</li>
						<li>Can you continue the streak??</li>
					</ul>
					<h2>Notes</h2>
					<ul>
						<li>
							Plurals and other common suffixes (like <em>-ed</em>{" "}
							and <em>-ing</em>) are perfectly valid! Be as
							resourceful as you need be on your quest for the
							longest word you can find.
						</li>
						<li>
							Words must contain the Trigram (like "CAT") as is,
							with letters in that same order, and with no letters
							in between.
						</li>
					</ul>
				</div>
			</div>
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
