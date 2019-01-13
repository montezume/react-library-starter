import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import replace from 'rollup-plugin-replace';
import pkg from './package.json';

const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');

const format = process.env.BUILD_FORMAT;

// const esm = format === 'esm';
const umd = format === 'umd';

const config = {
  input: 'src/index.js',
  external: umd ? [] : Object.keys(pkg.peerDependencies) || [],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    babel({
      exclude: ['node_modules/**'],
    }),
    commonjs(),
    nodeResolve(),

    // To remove comments, trim trailing spaces, compact empty lines,
    // and normalize line endings
    cleanup(),
  ],
};

export default config;
