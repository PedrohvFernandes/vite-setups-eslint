module.exports = {
  // Jsdom que é pra fazer o render da nossa aplicação
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  // Cobertura de testes, um relatório
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura', 'json'],
  collectCoverage: true,
  // Alguns testes unitários e e2e utilizam esse .test para saber que aquilo é um teste para ser rodado. Tem pessoas que utilizam o .spec. No jest usamos o .test, no playwright usamos o .spec
  testMatch: ['**/?(*.)(test).ts?(x)'],
  // Aqui basicamente olhar para src e ignora tudo que tem stories.tsx, styles, types e mock
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/styles/**/*.ts',
    '!src/types/**/*.d.ts',
    '!src/**/mock.ts(x)?'
  ],
  // setupFilesAfterEnv: Esta opção especifica uma lista de arquivos que serão executados após o ambiente de teste ter sido configurado antes de cada teste. Isso é útil para configurar o ambiente de teste comum para todos os testes. No seu caso, você está apontando para o arquivo setup.ts dentro do diretório .jest, que contém as importações que você deseja aplicar a todos os testes.
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  // modulePaths: Esta opção especifica uma lista de diretórios que o Jest deve usar para procurar módulos quando eles são importados. No seu caso, você está adicionando os diretórios src e .jest. Isso permite que você importe módulos diretamente desses diretórios sem a necessidade de caminhos relativos longos nos seus testes.
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy'
  }
}
