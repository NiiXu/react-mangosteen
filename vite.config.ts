import {ConfigEnv, UserConfigExport} from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'


// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    define:{
      isDev: command === 'serve',
    },
    plugins: [
      Unocss(),
      react(),
      viteMockServe(),
    ],
  }
}
