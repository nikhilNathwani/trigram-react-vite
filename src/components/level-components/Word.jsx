import "./Word.css";

export default function Word({ targetLength, lettersReceived }) {
	// console.log("In Word component, lettersReceived=", lettersReceived);
	const letterDivs = Array.from({ length: targetLength }, (_, index) => (
		<div className="letter" key={index}>
			{lettersReceived[index]}
		</div>
	));
	return <div id="word">{letterDivs}</div>;
}
