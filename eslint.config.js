// @ts-check
import antfu from '@antfu/eslint-config'
import dxhuii from '@dxhuii/eslint-config'

export default antfu({
  unocss: true, formatters: true, typescript: true, vue: true, markdown: true, stylistic: true,
  rules: {
    'ts/no-unused-expressions': 'off',
    'import/order': 'off',
    'sort-imports': 'off'
  }
}, dxhuii())
