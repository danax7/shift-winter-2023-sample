import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
            '@mainTypes': path.resolve(__dirname, './src/mainTypes'),
            '@redux': path.resolve(__dirname, './src/redux'),
            '@components': path.resolve(__dirname, './src/components')
        }
    },
    plugins: [react()]
})
