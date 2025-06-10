<template>
  <div>
    <Breadcrumb :custom="breadcrumbs" />
    <article class="article-container" v-if="post">
      <h1 class="article-title">{{ post.title }}</h1>
      <p class="article-date">{{ post.date }}</p>
      <div class="article-body" v-html="post.content" />

      <div class="button__wrap button__wrap--slider">
        <nuxt-link to="/articles" class="more fadeonscroll mouse-attract button button-undefined active">
          <span class="button-inner mouse-target">
            <span class="button-fill"></span>
            <span class="button-caption">記事一覧へ戻る</span>
          </span>
        </nuxt-link>
      </div>
    </article>
  </div>
</template>

<script>
import { getPostBySlug } from '@/utils/loadMarkdown';
import Breadcrumb from '~/components/Breadcrumb.vue'

export default {
  components: { Breadcrumb },
  async asyncData({ params }) {
    const post = getPostBySlug(params.slug)
    const breadcrumbs = [
      { path: '/', label: 'TOP' },
      { path: '/articles', label: '記事一覧' },
      { path: `/articles/${params.slug}`, label: post.title }
    ]
    return { post, breadcrumbs }
  },

  created() {
    const slug = this.$route.params.slug;
    this.post = getPostBySlug(slug);
  }
};
</script>

<style lang="scss" scoped>
.button__wrap {
  margin-top: 72px;
}

.article-container {
  color: #ededed;
  max-width: 800px;
  margin: 72px auto;
  font-family: 'Noto Sans JP', sans-serif;
  line-height: 1.8;

  @include sp {
    margin: 40px 0;
    padding: 0 16px;
  }
}

.article-title {
  font-size: 32px;
  margin: 0;
  line-height: 1.2;
  font-weight: 600;

  @include sp {
    font-size: 24px;
  }
}

.article-date {
  margin-top: 16px;
  font-size: 16px;
}

.article-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

::v-deep(.article-body h2) {
  font-size: 24px;
  margin: 0;
  font-weight: 600;

  @include sp {
    font-size: 20px;
  }
}

::v-deep(.article-body h3) {
  font-size: 18px;
  margin: 0;
  padding-left: 8px;
  font-weight: 600;

  @include sp {
    font-size: 16px;
  }
}

::v-deep(.article-body h4) {
  font-size: 16px;
  margin: 0;
  padding-left: 8px;
  font-weight: 600;

  @include sp {
    font-size: 14px;
  }
}

.article-body>>>p {
  margin: 0;
  font-size: 16px;
  font-weight: 300;
}

::v-deep(.article-body ul) {
  margin: 0;
  font-size: 1rem;
  padding-left: 40px;

  @include sp {
    padding-left: 24px;
  }
}

::v-deep(.article-body ol) {
  margin: 0;
  font-size: 1rem;
  padding-left: 40px;

  @include sp {
    padding-left: 24px;
  }
}

.article-body>>>li {
  margin-bottom: 0.5rem;
}

::v-deep(.article-body img) {
  max-width: 100%;
  border-radius: 8px;

  @include sp {
    width: 100%;
  }
}

.article-body>>>blockquote {
  margin: 1.5rem 0;
  padding: 1rem;
  background-color: #f9f9f9;
  border-left: 4px solid #ccc;
  color: #555;
}

.article-body>>>a {
  color: #0056d2;
  text-decoration: underline;
}
</style>
