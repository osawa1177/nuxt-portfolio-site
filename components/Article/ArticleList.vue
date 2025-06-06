<template>
  <div class="article-list">
    <div class="c-page__contact-title">
      <span class="c-page__headline">記事</span>
      <h2 class="c-page__content">RELATED POSTS</h2>
      <p>デザインやUI/UXに関する記事をご紹介しています。<br>
        気になるテーマがあれば、ぜひ記事もあわせてご覧ください。
      </p>
    </div>
    <ul>
      <li v-for="post in posts" :key="post.slug" class="article-item">
        <nuxt-link :to="`/articles/${post.slug}`" class="article-link">
          <img :src="post.thumbnail" :alt="post.title" class="article-thumb" />
          <div class="article-info">
            <h3>{{ post.title }}</h3>
            <p class="article-date">{{ post.date }}</p>
            <p class="read-more">記事を読む</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.article-list {
  display: flex;
  flex-direction: column;
  padding-top: 72px;
  height: 100%;
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;

  ul {
    display: flex;
    flex-direction: row;
    gap: 24px;
    flex-flow: wrap;
  }

  @include sp {
    padding: 40px 16px 0;
  }
}

.article-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  width: calc(34% - 24px);
  height: auto;

  @include sp {
    width: 100%;
  }
}

.article-item:hover {
  transform: translateY(-5px);
  opacity: 0.9;
}

.article-link {
  text-decoration: none;
  color: inherit;
}

.article-thumb {
  width: 100%;
  height: auto;
}

.article-info {
  padding: 4px 16px 16px;
  font-size: 16px;
  color: #333;
  margin: 0;
  gap: 8px;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 16px;
    color: #333;
    margin: 0;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 70px;
  }
}

.article-date {
  color: #333;
  margin: 0;
  font-size: 14px;
}

.read-more {
  color: #1e90ff;
  font-weight: 300;
  margin: 0;
  font-size: 14px;
}
</style>