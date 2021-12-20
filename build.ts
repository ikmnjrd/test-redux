const { argv } = require('process')
const { build } = require('esbuild')
const path = require('path')

const options = {
  define: { 'process.env.NODE_ENV': process.env.NODE_ENV },
  entryPoints: [path.resolve(__dirname, 'src/index.jsx')],
  minify: argv[2] === 'production',
  bundle: true,
  target: 'es2016',
  platform: 'browser',
  outdir: path.resolve(__dirname, 'public'),
  tsconfig: path.resolve(__dirname, 'tsconfig.json'),
  watch: {
    onRebuild(err, result) {
      console.log(JSON.stringify(err?.errors));
      console.log(JSON.stringify(result?.warnings));
    },
  },
}

build(options)
.then(() => {
  console.log("===========================================");
  console.log(`${new Date().toLocaleString()}: watching...`);
})
.catch(err => {
  process.stderr.write(err.stderr)
  process.exit(1)
})