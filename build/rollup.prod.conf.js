const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { babel } = require('@rollup/plugin-babel')
const { terser } = require('rollup-plugin-terser')
const visualizer = require('rollup-plugin-visualizer')
const del = require('rollup-plugin-delete')
const { analyze } = process.env

const config = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'jsSnippets',
    },
    {
      file: 'dist/index.umd.min.js',
      format: 'umd',
      name: 'jsSnippets',
      plugins: [terser()],
    },
    {
      file: 'dist/index.mjs',
      format: 'es',
    },
    {
      file: 'dist/index.min.mjs',
      format: 'es',
      sourcemap: true,
      plugins: [
        terser(),
        analyze && visualizer({ open: true, sourcemap: true, gzipSize: true }),
      ],
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    nodeResolve(),
    babel({ babelHelpers: 'bundled' }),
  ],
}

module.exports = config
