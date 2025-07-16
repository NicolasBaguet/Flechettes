import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../Header/Header";
import "./App.css";
import Flechettes from "../../pages/Flechettes/Flechettes";
import { Route, Routes } from "react-router-dom";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	const PageWrapper = ({ children }: { children: ReactNode }) => (
		<motion.div
			initial={{ opacity: 0, x: 10 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -10 }}
			transition={{ duration: 1 }}
		>
			{children}
		</motion.div>
	);

	return (
		<>
			<Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
			<main>
				<AnimatePresence mode="wait">
					<Routes>
						<Route
							path="/"
							element={
								<PageWrapper>
									<Flechettes />
								</PageWrapper>
							}
						/>
					</Routes>
				</AnimatePresence>
			</main>
		</>
	);
}

export default App;
