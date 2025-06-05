// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

const LIVE_URL = "https://Ricgo01.github.io";
const REPO_NAME = "Portafolio";

export default defineConfig({
  site: LIVE_URL,
  base: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/',
  integrations: [
    tailwind({
    }), 
    react()
  ],
  output: 'static',
  build: {
    assets: '_astro'
  }
});