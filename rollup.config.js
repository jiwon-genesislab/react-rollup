import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'esm'
  },
  external: ['react', 'react-dom'],
  // globals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM'
  // }
  plugins: [
    json(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()]
};