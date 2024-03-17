import { mergeConfig } from 'vite'
import type { StorybookConfig } from '@storybook/react-vite'

//https://storybook.js.org/docs/builders/vite
const config: StorybookConfig = {
  // Vou para a src e busque todos os arquivos que terminam com stories.tsx
  stories: ['../src/**/stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  // features: {
  //   storyStoreV7: true
  // },
  features: {
    // https://storybook.js.org/docs/api/main-config-features
    argTypeTargetsV7: true
  },
  docs: {
    autodocs: 'tag'
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          components: `/src/components/`,
          styles: `/src/styles/`,
          types: `/src/types/`,
          utils: `/src/utils/`
        }
      }
    })
  }
}
export default config