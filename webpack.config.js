const path = require('path');

module.exports = (env, argv) => {
    const isDev = argv.mode === 'development';

    return {
        node: {
            fs: 'empty'
        },
        entry: {
            'linter.js': path.join(__dirname, 'src', 'linter.js'),
        },
        output: {
            filename: "[name]",
            path: path.resolve(__dirname, "build"),
        },
        watch: isDev,
        module: {
            rules: [
                {
                    test: /.js$/,
                    use: [
                        'babel-loader',
                        {
                            loader: 'expose-loader',
                            options: 'lint'
                        }
                    ],
                    exclude: '/node_modules/'
                }
            ]
        }
    }
};
