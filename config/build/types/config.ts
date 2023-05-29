// конфигурировать конфиг: задавать пути на этапе до сборки: порт пути адрес апи режим и тд - будем управлять этим из вне
export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildMode;
    // пути используемые в сборке в конфигурации - не будем их хардкодить в вебпак конфиге - вынесем в переменную
    paths: BuildPaths;
    // isDev === true if mode === 'development'
    isDev: boolean;
}