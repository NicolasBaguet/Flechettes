import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header({
	setIsMenuOpen,
	isMenuOpen,
}: {
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isMenuOpen: boolean;
}) {
	return (
		<header>
			<div className="logo">
				<img src="/public/Flechettes_icon.png" alt="Logo site" />
			</div>

			<div className="title">
				<h1>Flechettes Hub</h1>
			</div>

			<div className="headerMenu">
				<button
					className="menuButton"
					type="button"
					onClick={() => {
						setIsMenuOpen(!isMenuOpen);
					}}
				>
					<FontAwesomeIcon icon={faBars} />
				</button>
			</div>
		</header>
	);
}
export default Header;
