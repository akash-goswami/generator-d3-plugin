import ascii from "rollup-plugin-ascii";
import node from "rollup-plugin-node-resolve";
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
  plugins: [node(), ascii(), commonjs(), replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    })]
};
