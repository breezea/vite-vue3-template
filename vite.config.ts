import { defineConfig } from 'vite'


import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        },
    ],
      dts: "src/auto-import.d.ts",
      resolvers: [ ElementPlusResolver() ]
    }),
    Components({
      resolvers: [ElementPlusResolver(), NaiveUiResolver()]
    }),
    Unocss({
      presets : [
        presetUno(),
        presetAttributify(),
        presetIcons()
      ],
      rules: [
        [/^z-(\d+)$/, ([, d]) => ({ 'z-index': d })],
        [
          'p-c',
          {
            position:'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`
          },
        ],
        [
          'border',
          {
            border: '1px solid black'
          }
        ]
      ]
    }),
  ],
})
