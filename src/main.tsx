import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initConsentState } from "./components/CookieConsent";

initConsentState();

createRoot(document.getElementById("root")!).render(<App />);