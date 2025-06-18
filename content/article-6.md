---

title: "Nuxt2 × Storybookで記事一覧コンポーネントを可視化する"
date: "2025-06-18"
tags: ["Nuxt", "Storybook"]
thumbnail: "/img/article/storybook/storybook1.png"
---

![記事一覧コンポーネントのStorybook表示](/img/article/storybook/storybook1.png)

## はじめに

UIコンポーネントの振る舞いや状態を「実装しながら確認する」のは効率的ではありません。
そこで、**Nuxt2プロジェクトにStorybookを導入し、記事一覧コンポーネント（ArticleList）を視覚的に確認・管理**できる環境を整えました。

この記事では、そのセットアップ方法と、実際のStoryファイルの内容、利便性について紹介します。

## 1. Nuxt2 × Storybook 導入手順（Yarn使用）
```bash
yarn storybook init
```

Vue 2 + Nuxt2で動かすには以下の依存も追加します：
```bash
yarn add -D @storybook/vue @babel/core
```

`.storybook/main.js` でNuxtのパスエイリアスやSCSS読み込みに対応する設定を加えましょう。
```js
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)', '../components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: '@storybook/vue-webpack4',
  core: {
    builder: 'webpack4'
  },
  docs: {
    autodocs: true
  },
  staticDirs: ['../static', '../assets'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.vue$/,
      loader: 'vue-loader'
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: `@use "assets/scss/foundation/_variables.scss" as *;
@use "assets/scss/foundation/_mixin.scss" as *;`,
            sassOptions: {
              includePaths: [
                path.resolve(__dirname, '../'),
                path.resolve(__dirname, '../assets/scss')
              ]
            }
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'raw-loader'
        }
      ]
    });

    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[ext]',
            outputPath: 'static/',
            publicPath: '/static/'
          }
        }
      ]
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../'),
      '~': path.resolve(__dirname, '../'),
      'assets': path.resolve(__dirname, '../assets'),
      'vue$': 'vue/dist/vue.esm.js'
    };

    config.plugins.push(new VueLoaderPlugin());

    return config;
  },
};

```

## 2. ArticleListコンポーネントの実装

* 記事のタイトル、日付、タグ、サムネイル画像などを一覧表示
* プロパティで「スライダー表示」を有効化できる
* Figma上でUI設計済み

```js
<ArticleList :posts="posts" :isSliderEnabled="true" />
```
![記事一覧コンポーネントのStorybook表示](/img/article/storybook/storybook2.png)
## 3. Storyファイルの構成

以下のように、コンポーネントの使用方法、データ構造などを記述することで、**開発者・デザイナー双方が使いやすいドキュメント**になります。

```js
export default {
  title: 'Article/ArticleList',
  component: ArticleList,
  parameters: {
    docs: {
      description: {
        component: `
記事一覧を表示するコンポーネントです。
タグフィルター機能とスライダー表示の切り替えが可能です。
...
        `
      }
    }
  },
  argTypes: {
    posts: { control: 'object' },
    isSliderEnabled: { control: 'boolean' }
  }
};
```

StorybookのUI上でデータを切り替えられるため、状態ごとの確認も簡単です。


## 4. なぜ便利なのか？（Figmaとの利便性も）

* **Figmaと見比べやすい**：設計通りに実装されているか即座に確認
* **デザイナー・開発者間の共通言語**になる
* **状態を網羅できる**：スライダー表示有無など複数パターンを1つのStoryで確認可能
* **UIレビューが簡単**：静的な画面ではなく、インタラクティブに確認できる

![記事一覧コンポーネントのStorybook表示](/img/article/storybook/storybook3.png)

## まとめ

ArticleListのように「状態が変わるUIコンポーネント」こそ、Storybookでの管理が真価を発揮します。
Nuxt2環境でも導入・運用は十分可能です。

Figmaで設計したUIを、**より正確に・共有しやすく・保守しやすく**する手段として、Storybookをぜひ活用してみてください。
