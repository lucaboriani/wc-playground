import "sass";
import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
import react from '@astrojs/react';
import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";
// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import auth from "auth-astro";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";
// https://astro.build/config
export default defineConfig({
  site: 'https://wc-playground-xi.vercel.app/',
  integrations: [
    lit(), 
    react(), 
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: tag => tag.includes('-')
        }
      }
    }), 
    tailwind(), 
    svelte(), 
    auth()
  ],
  output: "server",
  adapter: vercel()
});