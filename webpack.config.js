module.exports = {
 entry: './app/main.ts',
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       loader: 'ts-loader',
       exclude: /node_modules/,
     }
   ]
 },
 output: {
   filename: './dist/bundle.js',
   path: __dirname
 }
};