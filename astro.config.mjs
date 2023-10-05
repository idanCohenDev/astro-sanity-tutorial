import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
 integrations: [
  sanity({
   projectId: "0usinhnc",
   dataset: "production",
   apiVersion: "2023-02-08",
   useCdn: false,
  }),
  react(),
 ],
});
