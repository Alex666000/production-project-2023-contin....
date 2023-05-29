import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/config";

// объект с путями:
const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths,
    isDev,
})

export default config;


/*
созадть public html -- HTMLWebpackPlugin

development - не минимизированный файл продакшн -- минимизиированный

подкючим  плагин чтобы понимать сколько процентов сборки прошло уже ProgressPlugin

настроим типизацию гуглим webpack typescript: npm install --save-dev typescript ts-loader -- меняем расширение на ts

гуглим webpack typescript config file -  сам конфиг писать на TS: расширение на ts поставить в webpack.config

required меняем на import

 */