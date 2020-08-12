const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist') //这个目录会自动创建
    }
}