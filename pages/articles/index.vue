<template>
  <main>
    <div class="bgLight">
      <div class="bgLight__pos bgLight__one"></div>
      <div class="bgLight__pos bgLight__two"></div>
      <div class="bgLight__pos bgLight__three"></div>
    </div>
    <ArticleList :posts="articles" />
  </main>
</template>

<script>
import { getAllPosts } from '@/utils/loadMarkdown';
import ArticleList from '~/components/Article/ArticleList.vue';

export default {
  components: {
    ArticleList
  },
  data() {
    return {
      articles: getAllPosts(), // Markdownデータを使用
    };
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/foundation/_bglight.scss';
@import '~/assets/scss/foundation/_button.scss';

.article-list {
  padding: 20vh 0 3.2rem;
}
</style>
