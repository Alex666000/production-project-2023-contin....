import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import path from "path";

// сюда перенесем всю конфигурацию что делали в корне проекта
export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    // деструктуризировали объект с опциями чтобы использовать свойства более удобно
    const {paths, mode} = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}
