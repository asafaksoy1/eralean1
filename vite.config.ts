import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

// The reactRouter() plugin includes React support, so @vitejs/plugin-react
// is no longer needed. Tailwind/PostCSS keep working via the existing
// postcss.config.js + tailwind.config.js (those files are unchanged).
export default defineConfig({
  plugins: [reactRouter()],
});
