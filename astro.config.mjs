import UnoCSS from 'unocss/astro'
import { defineConfig } from 'astro/config'
import { SiteMetadata } from 'astro-travelens/config'

// https://astro.build/config
export default defineConfig({
  site: SiteMetadata.site,
  experimental: {
    assets: true
  },
  integrations: [UnoCSS({
    injectReset: true
  })]
})