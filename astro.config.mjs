// https://astro.build/config
import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
import react from '@astrojs/react';
import vue from "@astrojs/vue";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [lit(), react(), vue({
    template: {
      compilerOptions: {
        // treat all tags with a dash as custom elements
        isCustomElement: tag => tag.includes('-')
      }
    }
  }), tailwind(), svelte()],
  output: "server",
  adapter: netlify()
});