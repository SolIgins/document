# Vue Press个人知识库搭建

> https://vuepress.vuejs.org/zh/guide/getting-started.html

# 1. 安装

## 1.1 安装依赖

Node.js v20.9.0+

## 1.2 创建项目

### 1.2.1 通过命令行创建

```bash
npm init vuepress vuepress-starter
```

### 1.2.2 手动创建

- 创建并进入一个新目录

```bash
mkdir vuepress-starter
cd vuepress-starter
```

- 初始化项目

```bash
git init
npm init
```

- 安装VuePress

```bash
# 安装 vuepress
npm install -D vuepress@next
# 安装打包工具和主题
npm install -D @vuepress/bundler-vite@next @vuepress/theme-default@next
```

- 创建docs和docs/.vuepress目录

```bash
mkdir docs
mkdir docs/.vuepress
```

- 创建 VuePress 配置文件 docs/.vuepress/config.js

```typescript
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
})
```

- 创建你的第一篇文档

```bash
echo '# Hello VuePress' > docs/README.md
```

## 1.3 目录结构

创建完成后，项目的目录结构应该是：

```
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
└─ package.json
```

`docs`目录是放置 Markdown 文件的地方，它同时也会作为 VuePress 的源文件目录。

`docs/.vuepress `目录，即源文件目录下的`.vuepress` 目录，是放置所有和 VuePress 相关的文件的地方。当前这里只有一个配置文件。默认还会在该目录下生成临时文件、缓存文件和构建输出文件。建议你把它们添加到 `.gitignore` 文件中。

## 1.4 开始使用VuePress

### 1.4.1 启动服务器

你可以在 `package.json` 中添加一些 scripts ：

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

运行 `docs:dev` 脚本可以启动开发服务器:

```bash
npm run docs:dev
```

VuePress 会在 [http://localhost:8080](http://localhost:8080/) 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。

### 1.4.2 构建网站

运行 `docs:build` 脚本可以构建你的网站：

```bash
npm run docs:build
```

在 `docs/.vuepress/dist` 目录中可以找到构建生成的静态文件。你可以查看 `部署` 来了解如何部署你的网站。

# 2. 配置

## 2.1 配置文件

VuePress 站点的基本配置文件是 .vuepress/config.js ，但也同样支持 TypeScript 配置文件。你可以使用 .vuepress/config.ts 来得到更好的类型提示。

具体而言，我们对于配置文件的路径有着约定（按照优先顺序）：

- 当前工作目录 cwd 下：
  - vuepress.config.ts
  - vuepress.config.js
  - vuepress.config.mjs
- 源文件目录 sourceDir 下：
  - .vuepress/config.ts
  - .vuepress/config.js
  - .vuepress/config.mjs

你也可以通过命令行接口的 `--config` 选项来指定配置文件：

```bash
vuepress dev docs --config my-config.ts
```

一个基础的配置文件是这样的：

```typescript
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),

  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
})
```

## 2.2 客户端配置文件

在大多数情况下，配置文件已经足够帮助你配置好你的 VuePress 站点。不过，有些时候用户们可能希望直接添加一些客户端代码。 VuePress 通过客户端配置文件来支持这种需求：

```
├─ docs
│  ├─ .vuepress
│  │  ├─ client.js   <--- 客户端配置文件
│  │  └─ config.js   <--- 配置文件
│  └─ README.md
├─ .gitignore
└─ package.json
```

同样的，我们也有关于客户端配置文件的路径约定（按照优先顺序）：

- 当前工作目录 `cmd` 下：
  - `vuepress.client.ts`
  - `vuepress.client.js`
  - `vuepress.client.mjs`
- 源文件目录 `sourceDir` 下：
  - `.vuepress/client.ts`
  - `.vuepress/client.js`
  - `.vuepress/client.mjs`

一个基础的客户端配置文件是这样的：

```typescript
import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  rootComponents: [],
})
```

# 3. 页面

VuePress 是以 Markdown 为中心的。你项目中的每一个 Markdown 文件都是一个单独的页面。

## 3.1 路由

默认情况下，页面的路由路径是根据你的 Markdown 文件的相对路径决定的。

假设这是你的 Markdown 文件所处的目录结构：

```
└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
```

将 `docs` 目录作为你的 `sourceDir` ，例如你在运行 `vuepress dev docs` 命令。此时，你的 Markdown 文件对应的路由路径为：

|           路由路径            |          相对路径           |
| :---------------------------: | :-------------------------: |
|              `/`              |        `/README.md`         |
|              `/`              |         `/index.md`         |
|     `/contributing.html`      |     `/contributing.md`      |
|           `/guide/`           |     `/guide/README.md`      |
| `/guide/getting-started.html` | `/guide/getting-started.md` |

## 3.2 Frontmatter

Markdown 文件可以包含一个 [YAML](https://yaml.org/) Frontmatter 。Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间。下面是一个基本的示例：

```md
---
lang: zh-CN
title: 页面的标题
description: 页面的描述
---
```

你肯定注意到 Frontmatter 中的字段和配置文件中的站点配置十分类似。你可以通过 Frontmatter 来覆盖当前页面的 lang, title, description 等属性。因此，你可以把 Frontmatter 当作页面级作用域的配置。

同样的，VuePress 有一些内置支持的 Frontmatter 字段，而你使用的主题也可能有它自己的特殊 Frontmatter 。

## 3.3 内容

页面的主要内容是使用 Markdown 书写的。VuePress 首先会将 Markdown 转换为 HTML ，然后将 HTML 作为 Vue 单文件组件的 `<template>` 。