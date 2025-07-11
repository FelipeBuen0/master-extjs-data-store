const path = require('path');
const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');
const portfinder = require('portfinder');

module.exports = async function (env) {
    function get(it, val) {
        if (env === undefined) {
            return val;
        } else if (env[it] === undefined) {
            return val;
        } else {
            return env[it];
        }
    }

    const rules = [{ test: /.(js)$/, use: ['babel-loader'] }];
    const resolve = {};
    const host = '0.0.0.0';
    const stats = 'none';
    const framework = get('framework', 'extjs');
    const contextFolder = get('contextFolder', './');
    const entryFile = get('entryFile', './index.js');
    const outputFolder = get('outputFolder', 'build/production/JsDaysDataStore');
    const toolkit = get('toolkit', 'modern');
    const theme = get('theme', 'theme-material');
    const packages = get('packages', ['treegrid']);
    const script = get('script', '');
    const emit = get('emit', 'yes');
    const profile = get('profile', '');
    const environment = get('environment', 'development');
    const treeshake = get('treeshake', 'no');
    let browser = get('browser', 'yes');
    let watch = get('watch', 'yes');
    const verbose = get('verbose', 'no');
    const cmdopts = get('cmdopts', []);
    let isProd = false;

    if (environment === 'production' || cmdopts.includes('--production') || cmdopts.includes('--environment=production') || cmdopts.includes('-e=production') || cmdopts.includes('-pr')) {
        browser = 'no';
        watch = 'no';
        isProd = true;
    }

    const bundleFormat = isProd ? '[name].[hash].js' : '[name].js';
    const ignoreFolders = [path.resolve(__dirname, './generatedFiles'), path.resolve(__dirname, './build')];

    portfinder.basePort = (env && env.port) || 1962;
    return portfinder.getPortPromise().then((port) => {
        const plugins = [
            new ExtWebpackPlugin({
                framework: framework,
                toolkit: toolkit,
                theme: theme,
                packages: packages,
                script: script,
                emit: emit,
                port: port,
                profile: profile,
                environment: environment,
                treeshake: treeshake,
                browser: browser,
                watch: watch,
                verbose: verbose,
                cmdopts: cmdopts
            })
        ];
        return {
            mode: environment,
            devtool: environment === 'development' ? 'inline-source-map' : false,
            context: path.join(__dirname, contextFolder),
            entry: entryFile,
            output: {
                path: path.join(__dirname, outputFolder),
                filename: bundleFormat
            },
            plugins: plugins,
            module: {
                rules: rules
            },
            resolve: resolve,
            performance: { hints: false },
            stats: 'none',
            optimization: { emitOnErrors: false },
            node: false,
            devServer: {
                liveReload: !isProd,
                historyApiFallback: !isProd,
                host: host,
                port: port,
                allowedHosts: 'all',
                compress: isProd,
                static: {
                    directory: path.resolve(__dirname, outputFolder),
                    watch: isProd ? false : { ignored: ignoreFolders }
                },
                devMiddleware: {
                    stats: stats
                }
            }
        };
    });
};
