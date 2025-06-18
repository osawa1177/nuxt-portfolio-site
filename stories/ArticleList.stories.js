import ArticleList from '~/components/Article/ArticleList.vue';

export default {
  title: 'Article/ArticleList',
  component: ArticleList,
  parameters: {
    docs: {
      description: {
        component: `
記事一覧を表示するコンポーネントです。
タグフィルター機能とスライダー表示の切り替えが可能です。

## 使用方法

\`\`\`vue
<template>
  <ArticleList
    :posts="posts"
    :isSliderEnabled="true"
  />
</template>
\`\`\`

## Props

| プロパティ名 | 型 | デフォルト値 | 説明 |
|------------|------|------------|------|
| posts | Array | [] | 記事データの配列 |
| isSliderEnabled | Boolean | false | スライダー表示の有効/無効 |

## 記事データの形式

\`\`\`js
{
  title: string,      // 記事タイトル
  date: string,       // 日付
  tags: string[],     // タグの配列
  thumbnail: string,  // サムネイル画像のパス
  slug: string        // 記事のスラッグ
}
\`\`\`
        `
      }
    }
  },
  argTypes: {
    posts: {
      control: 'object',
      description: '記事データの配列'
    },
    isSliderEnabled: {
      control: 'boolean',
      description: 'スライダー表示の有効/無効'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleList },
  template: '<ArticleList v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  posts: [
    {
      title: 'サンプル記事1',
      date: '2025/6/5',
      tags: ['Webデザイン'],
      thumbnail: 'https://osawa-portfolio.web.app/img/article/design-system/design-system01.png',
      slug: 'article-1'
    },
    {
      title: 'サンプル記事2',
      date: '2025/6/6',
      tags: ['UI設計'],
      thumbnail: 'https://osawa-portfolio.web.app/img/article/ooui/ooui-thumb.png',
      slug: 'article-2'
    }
  ],
  isSliderEnabled: true,
};


