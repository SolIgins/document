import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'


export default defineUserConfig({
    bundler: viteBundler(),

    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/images/web-logo.png'
            }
        ]
    ],

    lang: 'zh-CN',
    title: 'Videns-Lip知识库',
    description: '这是我的第一个 VuePress 站点',

    theme: defaultTheme({
        logo: '/images/me-logo.png',
        // 配置目录
        navbar: [
            { text: '首页', link: '/' },

        ]
    }),

    plugins: [
        docsearchPlugin({
            // 配置项
        }),
    ],
})

