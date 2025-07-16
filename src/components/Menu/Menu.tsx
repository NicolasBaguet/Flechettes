/** biome-ignore-all lint/a11y/useKeyWithClickEvents: because */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: because */
import { NavLink } from "react-router";
import "./Menu.scss";

function Menu({
	setIsMenuOpen,
	isMenuOpen,
}: {
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isMenuOpen: boolean;
}) {
	return (
		<div
			className={`menuNavBackground ${isMenuOpen ? "isOpen" : ""}`}
			onClick={() => {
				setIsMenuOpen(false);
			}}
		>
			<div className={`menuNav ${isMenuOpen ? "isOpen" : ""}`}>
				<nav>
					<NavLink to="/" aria-label="flechettes">
						Flechettes
					</NavLink>
					<NavLink to="/" aria-label="attente...">
						en attente demande spécifique
					</NavLink>
				</nav>
			</div>
		</div>
	);
}
export default Menu;
