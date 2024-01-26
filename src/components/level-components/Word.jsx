import "./Word.css";

export default function Word({ numLetters }) {
	const letterDivs = Array.from({ length: numLetters }, (_, index) => (
		<div className="letter" letter-key={index}></div>
	));
	return <div id="word">{letterDivs}</div>;
}
