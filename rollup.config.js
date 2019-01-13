import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';
import replace from 'rollup-plugin-replace';
import camelcase from 'lodash.camelcase';
import pkg from './package.json';

const capitalize = s => s[0].toUpperCase() + s.slice(1);

const format = process.env.BUILD_FORMAT;

const defaultGlobals = Object.keys(pkg.peerDependencies || {}).reduce(
  (deps, dep) => {
    // eslint-disable-next-line no-param-reassign
    deps[dep] = capitalize(camelcase(dep));
    return deps;
  },
  {}
);

// const esm = format === 'esm';
const umd = format === 'umd';

const config = {
  input: 'src/index.js',
  output: {
    globals: defaultGlobals,
  },
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
    cleanup(),
  ],
};

export default config;
