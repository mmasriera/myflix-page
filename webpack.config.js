const webpack = require( 'webpack' ),
      paths   = {
        build  : `${__dirname}/build`,
        public : `${__dirname}/public`
      };

module.exports = {
    entry : {
        public : paths.public
    },
    output : {
        path : paths.build,
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                loader : 'babel',
                test : /\.jsx?$/,
                exclude : /node_modules/
            }
        ]
    },
    devServer : {
        contentBase : paths.build,
        historyApiFallback : true,
        hot : true,
        inline : true,
        progress : true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
