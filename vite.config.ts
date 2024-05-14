import react from "@vitejs/plugin-react-swc";
import { ConfigEnv, loadEnv, UserConfig } from "vite";
import path from "path";
import removeConsole from "vite-plugin-remove-console";

export default ({ mode }: ConfigEnv): UserConfig => {
  // 环境变量
  const { VITE_APP_SRC, VITE_APP_ENV, VITE_APP_VERSION } = loadEnv(
    mode,
    process.cwd(),
    ""
  );
  return {
    define: {
      __APP_ENV__: JSON.stringify(VITE_APP_ENV),
      __APP_VERSION__: JSON.stringify(VITE_APP_VERSION),
    },
    plugins: [
      react(),
      removeConsole({ external: ["error", "warn"] }),
    ],
    base: VITE_APP_SRC,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      target: "es2015",
      outDir: "react-admin",
    },
    server: {
      port: 9527,
      open: true,
    },
  };
};
