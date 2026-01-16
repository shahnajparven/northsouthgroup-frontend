// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import flowbiteReact from "flowbite-react/plugin/vite";

// // https://vite.dev/config/
// export default defineConfig({
//    base: '/',
//   plugins: [react(), tailwindcss(), flowbiteReact()],
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss(), flowbiteReact()],
});
