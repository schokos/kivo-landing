import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initTheme } from "./components/marketing/ThemeToggle";
import "./i18n";

initTheme();

createRoot(document.getElementById("root")!).render(<App />);
