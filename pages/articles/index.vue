<template>
  <main>
    <Breadcrumb :custom="breadcrumbs" />
    <div class="bgLight">
      <div class="bgLight__pos bgLight__one"></div>
      <div class="bgLight__pos bgLight__two"></div>
      <div class="bgLight__pos bgLight__three"></div>
    </div>
    <div class="article__wrap">
      <ArticleList :posts="articles" :isSliderEnabled="false" />
    </div>
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

::v-deep(.article-wrap) {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  width: 1100px;
}

::v-deep(.article-item) {
  width: 350px;
}
</style>
