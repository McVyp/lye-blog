import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import image from "@astrojs/image";

import addClasses from 'rehype-add-classes';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://about.lyejournal.com/',
  integrations: [sitemap(), react(), image(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-4xl font-bolf font-mplus',
          h2: 'text-2xl font-bolf font-mplus',
          h3: 'text-xl font-bolf font-mplus',
          h4: 'text-lg font-bolf font-mplus',
          h5: 'font-bolf font-mplus',
          h6: 'font-bolf font-mplus',
          image: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
          p: 'mb-6',
          a: 'underline underline-offset-2 hover:text-orange-500 decoration-orange-500'
        }
      ]
    ]
  }
});