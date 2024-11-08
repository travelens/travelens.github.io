import UnoCSS from 'unocss/astro'
import { defineConfig } from 'astro/config'
import { SiteMetadata } from 'astro-travelens/config'

// https://astro.build/config
export default defineConfig({
  site: SiteMetadata.site,
  integrations: [UnoCSS({
    injectReset: true
  })]
})