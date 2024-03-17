import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Colocando uma porta mais facil de lembrar
    port: 3000
  },
  // O preview nada mais é que uma instancia, tipo um node server que roda o build de uma aplicação so pra você ver como a aplicação esta rodando quando ela tiver em build
  preview: {
    // Pode deixar a mesma porta do server
    port: 3000
  },

  resolve: {
    // O alias nada mais é que o caminho menor para importar os arquivos, em vez de fazer aquele caminho de rato longo, ex: '../../../...'
    alias: {
      // Esse __dirname so é possivel por conta do @types/node, aqui você pode colocar de acorda como esta organizado seu projeto
      components: `${__dirname}/src/components`,
      styles: `${__dirname}/src/styles`,
      utils: `${__dirname}/src/utils`,
      types: `${__dirname}/src/types`,
      hooks: `${__dirname}/src/hooks`
    }
  },

  define: {
    // Leitura de variáveis de ambiente, a leitura do vite é --> import.meta.env.VITE_***, com isso mudamos so para process.env
    'process.env': process.env,
    // window.document
    global: 'window'
  }
})
