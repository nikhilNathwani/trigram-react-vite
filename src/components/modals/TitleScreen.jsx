export default function TitleScreen() {
	return (
		<div id="titleScreen">
			<div id="titleScreenTitleContainer">
				<h1>Trigram</h1>
				<h3>When 5-letter words aren't enough</h3>
			</div>
			<div id="titleScreenButtonContainer">
				<div className="titleScreen-button" id="titleScreen-playButton">
					Play
				</div>
				<div className="titleScreen-button" id="titleScreen-helpButton">
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
	);
}
