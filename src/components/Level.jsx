import TargetLength from "./level-components/TargetLength";
import Word from "./level-components/Word";

export default function Level({ targetLength }) {
	return (
		<div id="level">
			<TargetLength targetLength={targetLength}></TargetLength>
			<Word numLetters={targetLength}></Word>
		</div>
	);
}
