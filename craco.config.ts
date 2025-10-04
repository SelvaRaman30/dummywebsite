import path from "path";

const config = {
  webpack: {
    alias: {
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
    },
  },
  typescript: {
    enableTypeChecking: true,
  },
};

export default config;
