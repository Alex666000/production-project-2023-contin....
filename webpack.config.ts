import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from "html-webpack-plugin"

const config: webpack.Configuration = {
    mode: 'development',
    // точка входа
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    // выхода - куда компилилируется файл сборки
    output: {
        // contenthash -  чтобы уникальный файл компилился и не кешерировался не запоминался
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        // чистим после сборки все файлы удаляем
        clean: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            // используем как шаблон чтобы в него встраивались скрипты
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin(),
    ],
    module: {
        // rules - самое важное вебпака --- тут конфигурируем loaders - предназначены чтобы обрабатывать файлы которые выходят за рамки js json: css typescript png и тд.
        rules: [
            {
                // находим файлы которые пропускаем через лоадеры
                test: /\.tsx?$/,
                use: 'ts-loader',
                // исключить файлы в папке node_modules - их обрабатывать не нужно
                exclude: /node_modules/,
            }
        ],
    },
    // расширения тех файлов для которых при импорте не будем указывать расширение
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}

export default config;


/*
созадть public html -- HTMLWebpackPlugin

development - не минимизированный файл продакшн -- минимизиированный

подкючим  плагин чтобы понимать сколько процентов сборки прошло уже ProgressPlugin

настроим типизацию гуглим webpack typescript: npm install --save-dev typescript ts-loader -- меняем расширение на ts

гуглим webpack typescript config file -  сам конфиг писать на TS: расширение на ts поставить в webpack.config

required меняем на import

 */