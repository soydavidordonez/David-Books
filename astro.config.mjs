// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // inicializara un servidor de aquí hay q exportar una constante prerender = true en el index.html y hay que hacerle en el id
  output: 'server',

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // pernite leer la variable de entorno .env y tipearla
  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({default: true, context: 'server', access: 'public' }),
      SCORE_API_ENDPOINT: envField.string({context: 'server', access: 'public'})
    }
  },

  adapter: vercel()
}
);