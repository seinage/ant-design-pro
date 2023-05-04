// https://umijs.org/config/
import {defineConfig} from '@umijs/max';

const { REACT_APP_ENV = 'pre' } = process.env;
export default defineConfig({
  headScripts: [
    // 解决首次加载时白屏的问题
    {
      src: './scripts/loading.js',
      async: true,
    },
  ],
});
