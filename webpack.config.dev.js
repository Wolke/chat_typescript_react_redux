const path = require('path');
function root(__path = '.') {
  return path.join(__dirname, __path);
}

var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: "./src/index.tsx",
  
    
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    })
  ],
   module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
};
