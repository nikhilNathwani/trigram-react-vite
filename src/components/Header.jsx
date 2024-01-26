import "./Header.css";

export default function Header({ trigram }) {
	return (
		<div id="header">
			<div id="helpButton">?</div>
			<div id="trigram">{trigram}</div>
			<div id="statsButton">+</div>
		</div>
	);
}
