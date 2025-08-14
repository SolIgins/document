---
home: true
heroImage: /images/home-logo.png

actions:
  - text: 首页
    link: /README.md
    type: primary
    
features:
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
    link: 
  - title: Vue驱动
    details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT 协议 | 版权所有 © 2018-至今 Lip
---

目录
**Input**

```md
[[toc]]
```

**Output**

# Hello VuePress

<!-- 相对路径 -->

[首页](../README.md)  
[配置参考](../reference/config.md)  
[快速上手](./getting-started.md)

<!-- 绝对路径 -->

[指南 > 介绍](/zh/guide/introduction.md)  
[配置参考 > markdown.links](/zh/reference/config.md#links)

<!-- URL -->

[GitHub](https://github.com)

Emoji :tada: 
VuePress 2 已经发布 :tada: ！


一加一等于： `{{ 1 + 1 }}`

`<span v-for="i in 3"> span: {{ i }} </span>`
