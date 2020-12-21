const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { babel } = require('@rollup/plugin-babel')
const commonjs = require('@rollup/plugin-commonjs')
const del = require('rollup-plugin-delete')
const { getInputFiles } = require('./utils')
const esmEntry = require('./rollup-plugin-esm-entry')

const { BABEL_ENV } = process.env

const hasRuntime = BABEL_ENV === 'runtime'

const dir = hasRuntime ? 'dist/esm/runtime' : 'dist/esm/plain'
const babelHelpers = hasRuntime ? 'runtime' : 'bundled'

const config = {
  input: getInputFiles(),
  output: {
    dir,
    entryFileNames: '[name].js',
    format: 'es',
  },
  external: (id) => {
    return id.includes('@babel/runtime')
  },
  plugins: [
    del({ targets: dir }),
    nodeResolve(),
    babel({
      babelHelpers,
      exclude: 'node_modules/**',
    }),
    // plugin/babel 会动态插入 import _ArrayFrom from '@babel/runtime-corejs3/...'
    // 但是原来的 corejs3 是 cjs 模块，所以 babel 引 会报错
    // 这里把 corejs3 里的 cjs 模块改成 es 模块
    commonjs({}),
    esmEntry({ path: `${dir}/index.js` }),
  ],
}

module.exports = config
