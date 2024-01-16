import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'

export default {
  input: 'src/index.js',
  output: [{
    name: 'index',
    file: 'dist/index.umd.js',
    format: 'umd',
    sourcemap: true
  }, {
    file: 'dist/index.es.js',
    format: 'esm',
    sourcemap: false
  }],
  plugins: [
    resolve(),
    commonjs(),
    babel()
  ],
  external: []
}
