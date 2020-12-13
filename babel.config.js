module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          browsers: ['last 2 versions', '> 1%', 'not IE <= 10'],
        },
      },
    ],
  ],
}
