import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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
							class="titleScreen-button"
							id="titleScreen-playButton"
						>
							Play
						</div>
						<div
							class="titleScreen-button"
							id="titleScreen-helpButton"
						>
							How to play
						</div>
						<div
							class="titleScreen-button"
							id="titleScreen-statsButton"
						>
							Stats
						</div>
					</div>
				</div>
				<div id="help" class="modal">
					<div class="modal-content">
						<div class="closeRow">
							<div class="close">&times;</div>
						</div>
						<h2>How to play Trigram</h2>
						<ul>
							<li>
								A <em>Trigram</em> is a sequence of 3 letters,
								like <span class="help-trigram">CAT</span>
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
								<span class="help-trigram">CAT</span>
							</li>
							<li>
								4-letter word:{" "}
								<span class="help-trigram-subtle">CAT</span>S
							</li>
							<li>
								5-letter word:{" "}
								<span class="help-trigram-subtle">CAT</span>ER
							</li>
							<li>
								6-letter word:{" "}
								<span class="help-trigram-subtle">CAT</span>SUP
							</li>
							<li>
								7-letter word: S
								<span class="help-trigram-subtle">CAT</span>TER
							</li>
							<li>
								8-letter word: DELI
								<span class="help-trigram-subtle">CAT</span>E
							</li>
							<li>
								9-letter word: DELI
								<span class="help-trigram-subtle">CAT</span>ES
							</li>
							<li>
								10-letter word: DELI
								<span class="help-trigram-subtle">CAT</span>ELY
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
						<div id="scoreWidget" class="jumbotron-widget">
							<p class="widget-title" id="scoreTitle">
								score
							</p>
							<p class="widget-value" id="score">
								0
							</p>
						</div>
						<div id="trigramWidget" class="jumbotron-widget">
							<p class="widget-value" id="trigram">
								CAR
							</p>
						</div>
						<div id="timerWidget" class="jumbotron-widget">
							<p class="widget-title" id="timerTitle">
								timer
							</p>
							<p class="widget-value" id="timer">
								0
							</p>
						</div>
					</div>
					<div id="level"></div>
					<div id="keyboard">
						<div class="keyboard-row">
							<button class="keyboard-key" data-keyname="Q">
								Q
							</button>
							<button class="keyboard-key" data-keyname="W">
								W
							</button>
							<button class="keyboard-key" data-keyname="E">
								E
							</button>
							<button class="keyboard-key" data-keyname="R">
								R
							</button>
							<button class="keyboard-key" data-keyname="T">
								T
							</button>
							<button class="keyboard-key" data-keyname="Y">
								Y
							</button>
							<button class="keyboard-key" data-keyname="U">
								U
							</button>
							<button class="keyboard-key" data-keyname="I">
								I
							</button>
							<button class="keyboard-key" data-keyname="O">
								O
							</button>
							<button class="keyboard-key" data-keyname="P">
								P
							</button>
						</div>
						<div class="keyboard-row">
							<button class="keyboard-key" data-keyname="A">
								A
							</button>
							<button class="keyboard-key" data-keyname="S">
								S
							</button>
							<button class="keyboard-key" data-keyname="D">
								D
							</button>
							<button class="keyboard-key" data-keyname="F">
								F
							</button>
							<button class="keyboard-key" data-keyname="G">
								G
							</button>
							<button class="keyboard-key" data-keyname="H">
								H
							</button>
							<button class="keyboard-key" data-keyname="J">
								J
							</button>
							<button class="keyboard-key" data-keyname="K">
								K
							</button>
							<button class="keyboard-key" data-keyname="L">
								L
							</button>
						</div>
						<div class="keyboard-row">
							<button
								class="keyboard-key"
								data-enter="true"
								id="enterKey"
							>
								↵
							</button>
							<button class="keyboard-key" data-keyname="Z">
								Z
							</button>
							<button class="keyboard-key" data-keyname="X">
								X
							</button>
							<button class="keyboard-key" data-keyname="C">
								C
							</button>
							<button class="keyboard-key" data-keyname="V">
								V
							</button>
							<button class="keyboard-key" data-keyname="B">
								B
							</button>
							<button class="keyboard-key" data-keyname="N">
								N
							</button>
							<button class="keyboard-key" data-keyname="M">
								M
							</button>
							<button
								class="keyboard-key"
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
