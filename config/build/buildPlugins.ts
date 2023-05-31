import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            // какие названия будут у файлов и где они будут распологаться
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // прокидывать в приложение глобальные переменные
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
/*
__IS_DEV__  -- нозовем так глобальные переменные сборки чтобы отделять их от переменных что используем в самом приложении
 */