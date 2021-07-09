const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

module.exports={
    mode:'development',
    entry: './index',
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename: `bundle.js`
    },

    module: {
        rules: [
            {
                test:/\.js$/, //webpack 不支持jsx语法 需用babel-loader转译
                loader:'babel-loader',
                options: {
                    exclude:/node_modules/,
                    presets:[
                        ['@babel/preset-env'],
                        ['@babel/preset-react'],
                    ],
                    cacheDirectory:true
                }


            },
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']

            },
            {
                test:/\.(png|jpg)$/,
                use:[
                    {
                        loader:"./src/myImg-loader",

                    }


                ]
            },
            // {
            //     test:/\.(png|jpg)$/,
            //     use:[{
            //         loader: "file-loader",
            //         options: {
            //             name:'myImg.png',
            //             outputPath:'http://dummyimage.com/200x100/550066'
            //         }
            //     }]
            // },

        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open:false,
        port:8081,
        hot:true
    },



    plugins: [
        new HtmlWebpackPlugin({
                template: "./index.html"
            }

        ),
        new MiniCssExtractPlugin(),
        // new ProjectNamePlugin()
    ]

};