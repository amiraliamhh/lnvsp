const path = require('path')
const svelte = require('rollup-plugin-svelte')
const sveltePreprocess = require('svelte-preprocess')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const copy = require('rollup-plugin-copy')
const serve = require('rollup-plugin-serve')

module.exports = {
  input: path.resolve(__dirname, 'src', 'main.js'),
  output: {
    file: path.resolve(__dirname, 'dist', 'bundle.js'),
    format: 'iife',
  },
  plugins: [
    serve({
      open: true,
      contentBase: path.resolve(__dirname, 'dist'),
      port: 3001,
    }),
    svelte({
      extensions: ['.svelte'],
      include: 'src/**/*.svelte',
      preprocess: sveltePreprocess(),
      emitCss: false,
    }),
    nodeResolve({
      browser: true,
    }),
    copy({
      targets: [
        {
          src: path.resolve(__dirname, 'public', 'index.html'),
          dest: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
  ],
}
