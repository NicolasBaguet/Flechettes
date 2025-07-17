import { useState } from "react";
import "./Flechettes.css";

function Flechettes() {
	const [isNewGame, setIsNewGame] = useState(true);
	const [NumbPlayers, setNumbPlayers] = useState(1);
	const [ScoreGoal, setScoreGoal] = useState(301);

	return (
		<section className="flechettes">
			{isNewGame && (
				<div className="newGameBackground">
					<div className="newGame">
						<form
							className="newGameForm"
							onSubmit={(e) => {
								e.preventDefault();
								setNumbPlayers(Number(e.currentTarget.players.value) || 1);
								setScoreGoal(Number(e.currentTarget.score.value) || 301);
								setIsNewGame(false);
							}}
						>
							<label htmlFor="players">Nombre de joueurs :</label>
							<select id="players" name="players" defaultValue={1} required>
								{[...Array(8)].map((_, i) => {
									const playerValue = i + 1;
									return (
										<option key={playerValue} value={playerValue}>
											{playerValue}
										</option>
									);
								})}
							</select>
							<label htmlFor="score">Score à atteindre :</label>
							<select id="score" name="score" defaultValue={301} required>
								<option value={151}>151</option>
								<option value={301}>301</option>
								<option value={501}>501</option>
							</select>
							<button type="submit">Commencer la partie</button>
						</form>
					</div>
				</div>
			)}
		</section>
	);
}
export default Flechettes;
