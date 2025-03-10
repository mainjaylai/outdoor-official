import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase', // 类名转换为驼峰命名
    },
    preprocessorOptions: {
      less: {
        modifyVars: {
          '@primary-color': '#1890ff', // 全局变量
        },
        javascriptEnabled: true, // 启用 Less 中的 JavaScript 表达式
      },
    },
  },
})
