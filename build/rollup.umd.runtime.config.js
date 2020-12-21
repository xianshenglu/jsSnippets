const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { babel } = require('@rollup/plugin-babel')
const { terser } = require('rollup-plugin-terser')
const commonjs = require('@rollup/plugin-commonjs')
const visualizer = require('rollup-plugin-visualizer')
const del = require('rollup-plugin-delete')

const { analyze } = process.env

const config = {
  input: './src/index.js',
  output: [
    {
      file: 'dist/umd/index.runtime.js',
      format: 'umd',
      name: 'jsSnippets',
      plugins: [],
    },
    {
      file: 'dist/umd/index.runtime.min.js',
      format: 'umd',
      name: 'jsSnippets',
      plugins: [
        terser(),
        analyze && visualizer({ open: true, sourcemap: true, gzipSize: true }),
      ],
    },
  ],
  plugins: [
    del({ targets: 'dist/umd/index.runtime*.js' }),
    nodeResolve(),
    babel({ babelHelpers: 'runtime', exclude: 'node_modules/**' }),
    // plugin/babel 会动态插入 import _ArrayFrom from '@babel/runtime-corejs3/...'
    // 但是原来的 corejs3 是 cjs 模块，所以 babel 引 会报错
    // 这里把 corejs3 里的 cjs 模块改成 es 模块
    commonjs({}),
  ],
}

module.exports = config
