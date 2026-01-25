import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Layout } from "./pages/layout.tsx";
import App from "./pages/Page.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <App />
    </Layout>
  </StrictMode>,
);
