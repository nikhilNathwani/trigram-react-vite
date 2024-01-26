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

const trigram = "CAT";
const wordLength_start = 4;
const wordLength_max = 11;

export default function App() {
	const [wordLengthCurrent, setWordLengthCurrent] =
		useState(wordLength_start);
	const [lettersProvided, setLettersProvided] = useState(
		Array.from({ length: 1 + wordLength_max - wordLength_start }, () => "")
	);

	return (
		<div id="app">
			<TitleScreen></TitleScreen>
			<HelpScreen></HelpScreen>
			<div id="game">
				<Header trigram={trigram}></Header>
				<Score
					score={
						wordLength_start == wordLengthCurrent
							? 0
							: wordLengthCurrent - 1
					}
					scoreMax={wordLength_max}
				></Score>
				<Level targetLength={wordLengthCurrent}></Level>
				<Keyboard></Keyboard>
			</div>
		</div>
	);
}
