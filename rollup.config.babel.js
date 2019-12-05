import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';


export default {
  input: './src/index.js',

  output: {
    file: './dist/index.js',
    format: 'esm',
    moduleName: 'react-mk-components',
  },

  plugins: [
    postcss({
      modules: true,
      inject: true,
      minimize: true,
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    resolve(),
    commonjs()
  ],

  external: ['react', 'react-dom'],
};
