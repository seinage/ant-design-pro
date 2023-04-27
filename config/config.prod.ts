// https://umijs.org/config/
import {defineConfig} from '@umijs/max';

const { REACT_APP_ENV = 'prod' } = process.env;
export default defineConfig({
  base:'./',
  publicPath:'./',
  headScripts: [

    // 解决首次加载时白屏的问题
    {
      src: './scripts/loading.js',
      async: true,
    },
  ],
});

