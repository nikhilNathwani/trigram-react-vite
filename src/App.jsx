import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div id="app">
				<div id="titleScreen">
					<div id="titleScreenTitleContainer">
						<h1>Trigram</h1>
						<h3>When 5-letter words aren't enough</h3>
					</div>
					<div id="titleScreenButtonContainer">
						<div
							className="titleScreen-button"
							id="titleScreen-playButton"
						>
							Play
						</div>
						<div
							className="titleScreen-button"
							id="titleScreen-helpButton"
						>
							How to play
						</div>
						<div
							className="titleScreen-button"
							id="titleScreen-statsButton"
						>
							Stats
						</div>
					</div>
				</div>
				<div id="help" className="modal">
					<div className="modal-content">
						<div className="closeRow">
							<div className="close">&times;</div>
						</div>
						<h2>How to play Trigram</h2>
						<ul>
							<li>
								A <em>Trigram</em> is a sequence of 3 letters,
								like <span className="help-trigram">CAT</span>
							</li>
							<li>
								Make increasingly long words containing the
								Trigram of the day.
							</li>
							<li>
								You have 3 minutes to see how long a word you
								can reach!
							</li>
							<li>
								Each word unlocks the chance to enter a longer
								word. First a 4-letter word, then 5-letter word,
								then 6-letter, and so on.
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
								<span className="help-trigram-subtle">CAT</span>
								S
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
								<span className="help-trigram-subtle">CAT</span>
								E
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
								Plurals and other common suffixes (like{" "}
								<em>-ed</em> and <em>-ing</em>) are perfectly
								valid! Be as resourceful as you need be on your
								quest for the longest word you can find.
							</li>
							<li>
								Words must contain the Trigram (like "CAT") as
								is, with letters in that same order, and with no
								letters in between.
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
					<div id="keyboard">
						<div className="keyboard-row">
							<button className="keyboard-key" data-keyname="Q">
								Q
							</button>
							<button className="keyboard-key" data-keyname="W">
								W
							</button>
							<button className="keyboard-key" data-keyname="E">
								E
							</button>
							<button className="keyboard-key" data-keyname="R">
								R
							</button>
							<button className="keyboard-key" data-keyname="T">
								T
							</button>
							<button className="keyboard-key" data-keyname="Y">
								Y
							</button>
							<button className="keyboard-key" data-keyname="U">
								U
							</button>
							<button className="keyboard-key" data-keyname="I">
								I
							</button>
							<button className="keyboard-key" data-keyname="O">
								O
							</button>
							<button className="keyboard-key" data-keyname="P">
								P
							</button>
						</div>
						<div className="keyboard-row">
							<button className="keyboard-key" data-keyname="A">
								A
							</button>
							<button className="keyboard-key" data-keyname="S">
								S
							</button>
							<button className="keyboard-key" data-keyname="D">
								D
							</button>
							<button className="keyboard-key" data-keyname="F">
								F
							</button>
							<button className="keyboard-key" data-keyname="G">
								G
							</button>
							<button className="keyboard-key" data-keyname="H">
								H
							</button>
							<button className="keyboard-key" data-keyname="J">
								J
							</button>
							<button className="keyboard-key" data-keyname="K">
								K
							</button>
							<button className="keyboard-key" data-keyname="L">
								L
							</button>
						</div>
						<div className="keyboard-row">
							<button
								className="keyboard-key"
								data-enter="true"
								id="enterKey"
							>
								↵
							</button>
							<button className="keyboard-key" data-keyname="Z">
								Z
							</button>
							<button className="keyboard-key" data-keyname="X">
								X
							</button>
							<button className="keyboard-key" data-keyname="C">
								C
							</button>
							<button className="keyboard-key" data-keyname="V">
								V
							</button>
							<button className="keyboard-key" data-keyname="B">
								B
							</button>
							<button className="keyboard-key" data-keyname="N">
								N
							</button>
							<button className="keyboard-key" data-keyname="M">
								M
							</button>
							<button
								className="keyboard-key"
								data-delete="true"
								id="backspaceKey"
							>
								←
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
