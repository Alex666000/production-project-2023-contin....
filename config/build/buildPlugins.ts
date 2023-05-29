import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "config/build/types/config";

export function buildPlugins({paths}: BuildOptions, progressPlugins: any = [
    new HTMLWebpackPlugin({
        template: paths.html,
    }),
    new webpack.ProgressPlugin(),
]): webpack.WebpackPluginInstance[] {

    return progressPlugins
}

/*
paths - путь до файлика с html-кой

    // возвращаем массив плагинов

 */