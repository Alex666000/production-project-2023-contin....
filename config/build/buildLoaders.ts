import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
// переменные...
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        // возвращает массив лоадеров - их порядок важен -- поэтому их выносим в переменные!
        typescriptLoader,
    ]
}