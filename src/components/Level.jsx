import TargetLength from "./level-components/TargetLength";
import Word from "./level-components/Word";

export default function Level({ targetLength, lettersReceived }) {
	return (
		<div id="level">
			<TargetLength targetLength={targetLength}></TargetLength>
			<Word
				targetLength={targetLength}
				lettersReceived={lettersReceived}
			></Word>
		</div>
	);
}
