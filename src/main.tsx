import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./Styles/index.scss";
import App from "./components/App/App";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);