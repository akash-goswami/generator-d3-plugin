import ascii from "rollup-plugin-ascii";
import node from "rollup-plugin-node-resolve";
import commonjs from 'rollup-plugin-commonjs';

export default {
  plugins: [node(), ascii(), commonjs()]
};
