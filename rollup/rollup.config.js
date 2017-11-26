import babel from "rollup-plugin-babel"
import stylusCssModules from 'rollup-plugin-stylus-css-modules';

export default {
  input: "src/index.js",
  plugins: [
    babel({exclude: 'node_modules/**'}),
    stylusCssModules({
      output: 'styles.css'
    })
  ],
  external: [
    'react',
    'react-dom',
  ],
  output: {
    file: "dist/bundle.js",
    format: 'iife'
  },
}
