// @ts-check
import dxhuii from '@dxhuii/eslint-config'
import antfu from '@antfu/eslint-config'

export default antfu({vue: true, unocss: true, formatters: true, typescript: true }, dxhuii({}), {
  ignores: [
    'dist',
    '.umi',
    'mock',
    'node_modules',
    'coverage',
    'scripts',
    'config',
    '.history',
    '/lambda/',
    'public',
    '**/*.json'
  ]
})
