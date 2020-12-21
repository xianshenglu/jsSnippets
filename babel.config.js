module.exports = {
  presets: [['@babel/preset-env', { modules: false }]],
  plugins: [],
  env: {
    test: {
      presets: [['@babel/preset-env']],
    },
    runtime: {
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            corejs: 3,
          },
        ],
      ],
    },
  },
}
