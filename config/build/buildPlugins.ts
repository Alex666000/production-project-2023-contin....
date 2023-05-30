import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack, { ProgressPlugin }  from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths}: BuildOptions, progressPlugins: (HTMLWebpackPlugin | ProgressPlugin)[] = [
    new HTMLWebpackPlugin({
        template: paths.html,
    }),
    new webpack.ProgressPlugin(),
]): webpack.WebpackPluginInstance[] {

    return progressPlugins
}
