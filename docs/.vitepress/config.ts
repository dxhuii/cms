import type { DefaultTheme } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { version } from '../../package.json'
import { appDescription, appName } from '../constants'
import vite from './vite.config'

const VUE: DefaultTheme.NavItemWithLink[] = [
  { text: 'English', link: 'https://vue.cms.im' },
  { text: '简体中文', link: 'https://cn.vue.cms.im' },
  { text: 'Vite', link: 'https://vite.cms.im' },
  { text: 'Vitest', link: 'https://vitest.cms.im' },
  { text: 'Vitepress', link: 'https://vitepress.cms.im' },
]

const REACT: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
  { text: 'English', link: 'https://react.cms.im' },
  { text: '简体中文', link: 'https://zh-hans-react.cms.im' },
]

const title = '内容管理系统'

export default defineConfig({
  title,
  description: appDescription,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    codeTransformers: [
      transformerTwoslash(),
    ],
    languages: ['js', 'jsx', 'ts', 'tsx'],
    config: (md) => {
      md.use(groupIconMdPlugin)
    },
    math: true,
  },
  cleanUrls: true,
  vite: vite as any,
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      {
        text: 'Vue',
        items: [
          {
            items: VUE,
          },
        ],
      },
      {
        text: 'React',
        items: REACT,
      },
    ],
    sidebar: {
      '/': [
        {
          text: '工具',
          items: [
            { text: 'BMI身体质量指数', link: '/bmi/' },
            { text: 'RGB转16进制', link: '/rgb2hex/' },
            { text: '简繁转换', link: '/simple2traditional/' },
          ],
        },
      ],
      // '/bmi/': [
      //   {
      //     text: '工具',
      //     items: [
      //       { text: 'BMI计算器', link: '/bmi/' },
      //       { text: 'BMI标准对照表', link: '/bmi/#标准对照表' },
      //     ],
      //   },
      // ],
    },
    editLink: {
      pattern: 'https://github.com/dxhuii/cms/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },
    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dxhuii/cms' },
    ],

    footer: {
      message: `内容管理 - cms.im v${version}`,
      copyright: 'Copyright © 2025-PRESENT Dxh.me',
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Dxh' }],
    ['meta', { property: 'og:title', content: appName }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/favicon.svg' }],
    ['meta', { property: 'og:description', content: appDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: '/favicon.svg' }],
    ['meta', { name: 'twitter:title', content: appName }],
    ['meta', { name: 'twitter:description', content: appDescription }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
    ['script', { 'src': 'https://d.vv.chat/script.js', 'defer': 'true', 'data-website-id': '691ab4f0-9191-40bb-8b3c-da5d2ffb3ab1' }],
  ],
})
