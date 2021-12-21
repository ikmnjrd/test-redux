const { build } = require('esbuild')
const path = require('path')

const isDev = process.env.NODE_ENV === '"development"';

const options = {
  define: { 'process.env.NODE_ENV': process.env.NODE_ENV },
  entryPoints: [path.resolve(__dirname, 'src/index.tsx')],
  minify: !isDev,
  sourcemap: isDev,
  bundle: true,
  target: 'es2016',
  platform: 'browser',
  outdir: path.resolve(__dirname, 'public'),
  tsconfig: path.resolve(__dirname, 'tsconfig.json'),
  watch: isDev && {
    onRebuild(err:any, result:any) {
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
.catch((err:any) => {
  process.stderr.write(err.stderr)
  process.exit(1)
})