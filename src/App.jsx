import { useState } from "react";
import { useEffect } from "react";

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
		Array.from(
			{ length: 1 + wordLength_max - wordLength_start },
			(_, index) => Array(wordLength_start + index).fill("")
		)
	);

	//keyPress event listener
	useEffect(() => {
		const handleKeyPress = (e) => {
			// e.stopPropagation();
			if (e.key === "Enter") {
				// submitGuess();
				// printGameState();
				return;
			}
			if (e.key === "Backspace" || e.key === "Delete") {
				deleteLetter();
				// printGameState();
				return;
			}
			if (e.key.match(/^[a-z]$/)) {
				console.log("Received keypress:", e.key);
				addLetter(e.key);
				// printGameState();
				return;
			}
		};

		// Add the event listener when the component is mounted
		window.addEventListener("keydown", handleKeyPress);

		// This function will be executed when the component is unmounted
		return () => {
			// Remove the event listener when the component is unmounted
			window.removeEventListener("keydown", handleKeyPress);
		};

		// The empty dependency array ensures that this effect runs only once, on mount
	}, []);

	function addLetter(letter) {
		// 1. Confirm action can be performed
		var currWordIndex = wordLengthCurrent - wordLength_start;
		var currWord = lettersProvided[currWordIndex];
		if (currWord[currWord.length - 1] != "") {
			//submitWord()
			return;
		}

		// 2. Perform the action
		var letter = letter.toUpperCase();
		var currLetterIndex = currWord.indexOf("");

		var updatedLettersProvided = lettersProvided.slice();
		currWord = updatedLettersProvided[currWordIndex];
		currWord[currLetterIndex] = letter;

		setLettersProvided(updatedLettersProvided);

		console.log("Adding", letter, "to position", currLetterIndex);
		console.log("Letters provided:", lettersProvided);

		// 3. Inform the UI
		// UI_STATE.addLetter(letter);

		// 4. Advance the game
		// nextLetterPosition =
		// 	GAME_STATE.lettersProvided[GAME_STATE.wordLength_current].length;
		// if (nextLetterPosition >= GAME_STATE.wordLength_current) {
		// 	submitGuess();
		// }
	}

	function deleteLetter() {
		// 1. Confirm action can be performed
		var currWordIndex = wordLengthCurrent - wordLength_start;
		var currWord = lettersProvided[currWordIndex];
		var firstBlankIndex = currWord.indexOf("");
		if (firstBlankIndex == 0) {
			return;
		}
		if (firstBlankIndex == -1) {
			firstBlankIndex = wordLengthCurrent;
			//^because if it == -1, that means all letter slots are full.
			// I achieve delete by setting the firstBlankIndex-1 element to "",
			// so in this case it will correctly delete the last letter
		}

		// 2. Perform the action
		var updatedLettersProvided = lettersProvided.slice();
		updatedLettersProvided[currWordIndex][firstBlankIndex - 1] = "";
		setLettersProvided(updatedLettersProvided);

		console.log("Deleting letter");
		console.log("Letters provided:", lettersProvided);

		// 3. Inform the UI
		// UI_STATE.addLetter(letter);

		// 4. Advance the game
		// nextLetterPosition =
		// 	GAME_STATE.lettersProvided[GAME_STATE.wordLength_current].length;
		// if (nextLetterPosition >= GAME_STATE.wordLength_current) {
		// 	submitGuess();
		// }
	}

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
				<Level
					targetLength={wordLengthCurrent}
					lettersReceived={
						lettersProvided[wordLengthCurrent - wordLength_start]
					}
				></Level>
				<Keyboard></Keyboard>
			</div>
		</div>
	);
}
