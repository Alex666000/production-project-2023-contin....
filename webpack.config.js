const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'src', 'index.js'),
    },
};
/*
__dirname - папка где находимся в данный мом