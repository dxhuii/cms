import { pwa } from './config/pwa'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt'
  ],
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/global.css'
  ],
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', href: 'data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%221em%22%20width%3D%221em%22%3E%20%3Cpath%20d%3D%22m21.66%2010.44-.98%204.18c-.84%203.61-2.5%205.07-5.62%204.77-.5-.04-1.04-.13-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19c.2-.85.44-1.59.74-2.2%201.17-2.42%203.16-3.07%206.5-2.28l1.67.39c4.19.98%205.47%203.05%204.49%207.23Z%22%20fill%3D%22%23c9d1d9%22%2F%3E%20%3Cpath%20d%3D%22M15.06%2019.39c-.62.42-1.4.77-2.35%201.08l-1.58.52c-3.97%201.28-6.06.21-7.35-3.76L2.5%2013.28c-1.28-3.97-.22-6.07%203.75-7.35l1.58-.52c.41-.13.8-.24%201.17-.31-.3.61-.54%201.35-.74%202.2l-.98%204.19c-.98%204.18.31%206.24%204.48%207.23l1.68.4c.58.14%201.12.23%201.62.27Zm2.43-8.88c-.06%200-.12-.01-.19-.02l-4.85-1.23a.75.75%200%200%201%20.37-1.45l4.85%201.23a.748.748%200%200%201-.18%201.47Z%22%20fill%3D%22%23228e6c%22%20%2F%3E%20%3Cpath%20d%3D%22M14.56%2013.89c-.06%200-.12-.01-.19-.02l-2.91-.74a.75.75%200%200%201%20.37-1.45l2.91.74c.4.1.64.51.54.91-.08.34-.38.56-.72.56Z%22%20fill%3D%22%23228e6c%22%20%2F%3E%20%3C%2Fsvg%3E' }
      ]
    }
  },
  colorMode: {
    classSuffix: ''
  },
  pwa,
  vite: {
    vue: {
      script: {
        defineModel: true
      }
    }
  }
})
