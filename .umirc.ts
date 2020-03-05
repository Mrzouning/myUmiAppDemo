import { defineConfig } from 'umi';

export default defineConfig({
  routes: [{ path: '/', component: '@/pages/index' }],
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    default: 'zh-CN',
    baseNavigator: true,
  },
  dynamicImport: {
    // 无需 level, webpackChunkName 配置
    // loadingComponent: './components/PageLoading/index'
    loading: '@/components/PageLoading/index',
  },
});
