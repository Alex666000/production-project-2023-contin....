import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    // open - автоматически в браузере будет открываться страница с нашим арр
    open: true,
    // для реакт-роутера...
    historyApiFallback: true,
    // hot reloading
    hot: true,

  };
}
