import { defineConfig } from 'dumi';

const isProd =
  process.env.NODE_ENV === 'production' && process.env.PREVIEW_PR !== 'true';

const repo = 'saber2pr-umi/test-dumi-enum';

export default defineConfig({
  ssr: isProd ? {} : false,
  exportStatic: isProd ? {} : false,
  title: 'Site Name',
  mode: 'site',
  locales: [
    ['zh', '中文'],
    ['en', 'English'],
  ],
  resolve: {
    passivePreview: true,
  },
  hash: isProd,
  base: isProd ? `/${repo.split('/')[1]}` : '/',
  publicPath: isProd ? `//cdn.jsdelivr.net/gh/${repo}@gh-pages/` : '/',
});
