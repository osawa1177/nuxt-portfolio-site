<template>
  <main>
    <Breadcrumb :custom="breadcrumbs" />
    <div class="bgLight">
      <div class="bgLight__pos bgLight__one"></div>
      <div class="bgLight__pos bgLight__two"></div>
      <div class="bgLight__pos bgLight__three"></div>
    </div>
    <ArticleList :posts="articles" />
  </main>
</template>

<script>
import { getAllPosts } from '@/utils/loadMarkdown.client';
import ArticleList from '~/components/Article/ArticleList.vue';
import Breadcrumb from '~/components/Breadcrumb.vue'

export default {
  components: {
    ArticleList,
    Breadcrumb
  },
  data() {
    return {
      articles: getAllPosts(), // Markdownデータを使用
      breadcrumbs: [
        { text: 'TOP', path: '/' },
        { text: '記事一覧', path: '/articles' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/foundation/_bglight.scss';
@import '~/assets/scss/foundation/_button.scss';
</style>
