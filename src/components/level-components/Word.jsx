export default function Word({ numLetters }) {
	const letterDivs = Array.from({ length: numLetters }, (_, index) => (
		<div className="letter" letter-key={index}>
			Div {index + 1}
		</div>
	));
	return <div id="word">{letterDivs}</div>;
}
