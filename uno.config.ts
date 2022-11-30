import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
      'abs-tl': 'absolute top-0 left-0',
      'abs-tr': 'absolute top-0 right-0',
      'abs-bl': 'absolute bottom-0 left-0',
      'abs-br': 'absolute bottom-0 right-0',
      'flip-x': '-scale-x-100',
      'flip-y': '-scale-y-100',
    },
    [/^bga-(.*?)$/, ([_, c]) => `bg-[rgba(var(--${c}-rgb),var(--un-bg-opacity,1))]`],
  ],
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons(),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})