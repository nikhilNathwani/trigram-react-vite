export default function Keyboard() {
	return (
		<div id="keyboard">
			<div className="keyboard-row">
				<button className="keyboard-key" data-keyname="Q">
					Q
				</button>
				<button className="keyboard-key" data-keyname="W">
					W
				</button>
				<button className="keyboard-key" data-keyname="E">
					E
				</button>
				<button className="keyboard-key" data-keyname="R">
					R
				</button>
				<button className="keyboard-key" data-keyname="T">
					T
				</button>
				<button className="keyboard-key" data-keyname="Y">
					Y
				</button>
				<button className="keyboard-key" data-keyname="U">
					U
				</button>
				<button className="keyboard-key" data-keyname="I">
					I
				</button>
				<button className="keyboard-key" data-keyname="O">
					O
				</button>
				<button className="keyboard-key" data-keyname="P">
					P
				</button>
			</div>
			<div className="keyboard-row">
				<button className="keyboard-key" data-keyname="A">
					A
				</button>
				<button className="keyboard-key" data-keyname="S">
					S
				</button>
				<button className="keyboard-key" data-keyname="D">
					D
				</button>
				<button className="keyboard-key" data-keyname="F">
					F
				</button>
				<button className="keyboard-key" data-keyname="G">
					G
				</button>
				<button className="keyboard-key" data-keyname="H">
					H
				</button>
				<button className="keyboard-key" data-keyname="J">
					J
				</button>
				<button className="keyboard-key" data-keyname="K">
					K
				</button>
				<button className="keyboard-key" data-keyname="L">
					L
				</button>
			</div>
			<div className="keyboard-row">
				<button
					className="keyboard-key"
					data-enter="true"
					id="enterKey"
				>
					↵
				</button>
				<button className="keyboard-key" data-keyname="Z">
					Z
				</button>
				<button className="keyboard-key" data-keyname="X">
					X
				</button>
				<button className="keyboard-key" data-keyname="C">
					C
				</button>
				<button className="keyboard-key" data-keyname="V">
					V
				</button>
				<button className="keyboard-key" data-keyname="B">
					B
				</button>
				<button className="keyboard-key" data-keyname="N">
					N
				</button>
				<button className="keyboard-key" data-keyname="M">
					M
				</button>
				<button
					className="keyboard-key"
					data-delete="true"
					id="backspaceKey"
				>
					←
				</button>
			</div>
		</div>
	);
}
