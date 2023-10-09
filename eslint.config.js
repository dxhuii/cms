import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'
import dxhuii from '@dxhuii/eslint-config'

export default antfu({}, unocss.configs.flat, dxhuii({ react: false }))
