// Rodando outra vertente, praticamente isso aqui virou outro ambiente, por isso precisamos passar o vite e o tsconfig

import type { PlaywrightTestConfig } from '@playwright/test'

export default {
  use: {
    baseURL: 'http://localhost:8080'
  }
} as PlaywrightTestConfig
