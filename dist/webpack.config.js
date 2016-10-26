"use strict";
const path = require('path');
function root(__path = '.') {
    return path.join(__dirname, __path);
}
module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: root("bundle")
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".js", ".json"],
    },
    module: {},
};
//# sourceMappingURL=webpack.config.js.map