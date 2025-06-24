<template>
  <main>
    <Breadcrumb :custom="breadcrumbs" />
    <div class="bgLight">
      <div class="bgLight__pos bgLight__one"></div>
      <div class="bgLight__pos bgLight__two"></div>
      <div class="bgLight__pos bgLight__three"></div>
    </div>
    <div class="article__wrap">
      <div class="c-page__contact-title">
        <span class="c-page__headline">記事</span>
        <h2 class="c-page__content">RELATED POSTS</h2>
        <p>デザインやUI/UXに関する記事をご紹介しています。<br>
          気になるテーマがあれば、ぜひ記事もあわせてご覧ください。
        </p>
      </div>
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
  },
  head() {
    return {
      title: '記事一覧 | ポートフォリオ'
    }
  }
};
</script>

<style scoped lang="scss">
@import '~/assets/scss/foundation/_bglight.scss';
@import '~/assets/scss/foundation/_button.scss';

::v-deep .article-wrap {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  width: 100%;
    max-width: 1100px;
    margin: 0 auto;
}

::v-deep .article-item {
  width: 350px;
}
::v-deep .article-list {
  padding-top: 40px;
}

.article__wrap {
  width: 100%;
  margin: 0 auto;
  max-width: 1100px;
}
</style>
