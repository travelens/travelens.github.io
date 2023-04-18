import {
  defineConfig,
  presetTypography,
  presetIcons,
  presetUno,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    { 'i-logo': 'i-logos-astro w-6em h-6em transform transition-800' },
  ],
  transformers: [
    transformerDirectives(),
  ],
  presets: [
    presetUno(),
    presetTypography(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  safelist: [
    ...Array.from({ length: 3 }, (_, i) => `bg-gray-${i + 1}00`),
    ...Array.from({ length: 3 }, (_, i) => `bg-red-${i + 1}00`),
    ...Array.from({ length: 3 }, (_, i) => `bg-yellow-${i + 1}00`),
    ...Array.from({ length: 3 }, (_, i) => `bg-green-${i + 1}00`),
    ...Array.from({ length: 3 }, (_, i) => `bg-blue-${i + 1}00`),
    ...Array.from({ length: 3 }, (_, i) => `bg-indigo-${i + 1}00`),
    ...Array.from({ length: 3 }, (_, i) => `bg-purple-${i + 1}00`),
    ...Array.from({ length: 3 }, (_, i) => `bg-pink-${i + 1}00`),
    'text-xs',
    'text-sm',
    'text-base',
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'i-fa6-brands-linkedin',
    'i-fa6-brands-facebook',
    'i-fa6-brands-instagram',
    'i-fa6-brands-github',
  ],
})