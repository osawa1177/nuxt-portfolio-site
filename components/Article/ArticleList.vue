<template>
  <div class="article-list">
    <div class="c-page__contact-title">
      <span class="c-page__headline">記事</span>
      <h2 class="c-page__content">RELATED POSTS</h2>
      <p>デザインやUI/UXに関する記事をご紹介しています。<br>
        気になるテーマがあれば、ぜひ記事もあわせてご覧ください。
      </p>
    </div>

    <!-- タグフィルター -->
    <div class="tag-filter" v-if="!isTopPage">
      <button class="tag-button" :class="{ active: selectedTag === null }" @click="selectedTag = null">
        すべて
      </button>
      <button v-for="tag in uniqueTags" :key="tag" class="tag-button" :class="{ active: selectedTag === tag }"
        @click="selectedTag = tag">
        {{ tag }}
      </button>
    </div>

    <div :class="{ 'slider': isSliderEnabled }">
      <div class="article-wrap" :class="{ 'slider-track': isSliderEnabled }"
        :style="isSliderEnabled ? { transform: `translateX(-${currentSlide * 324}px)` } : {}">
        <div v-for="post in filteredPosts" :key="post.slug" class="article-item">
          <nuxt-link :to="`/articles/${post.slug}`" class="article-link">
            <img :src="post.thumbnail" :alt="post.title" class="article-thumb" />
            <div class="article-info">
              <h3>{{ post.title }}</h3>
              <div class="article-tags-wrap">
                <div class="article-tags" v-if="post.tags && post.tags.length > 0">
                  <span class="tag">{{ post.tags[0] }}</span>
                </div>
                <p class="article-date">{{ post.date }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div v-if="isSliderEnabled" class="slider__btn-left"><img :src="require(`~/assets/img/icon/left-arrow.svg`)"
        @click="prevSlide"></div>
    <div v-if="isSliderEnabled" class="slider__btn-right"><img :src="require(`~/assets/img/icon/right-arrow.svg`)"
        @click="nextSlide"></div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    },
    isSliderEnabled: {
      type: Boolean,
      default: true
    },
    isTopPage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentSlide: 0,
      selectedTag: null
    };
  },
  computed: {
    uniqueTags() {
      const tags = new Set();
      this.posts.forEach(post => {
        if (post.tags) {
          post.tags.forEach(tag => tags.add(tag));
        }
      });
      return Array.from(tags).sort();
    },
    filteredPosts() {
      if (!this.selectedTag || this.isTopPage) {
        return this.posts;
      }
      return this.posts.filter(post =>
        post.tags && post.tags.includes(this.selectedTag)
      );
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.filteredPosts.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.filteredPosts.length - 1;
      }
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

  @include sp {
    padding: 40px 16px 0;
  }
}

.slider {
  overflow: hidden;
  width: 100%;
}

.slider-track {
  display: flex;
  gap: 24px;
  transition: transform 0.5s ease;
  margin-bottom: 56px;
}

.slider__btn-left {
  cursor: pointer;
  position: absolute;
  left: -61px;
  bottom: 185px;
  opacity: 0.7;
}

.slider__btn-right {
  cursor: pointer;
  position: absolute;
  right: -61px;
  bottom: 185px;
  opacity: 0.7;
}

.indicators {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.indicators span {
  display: inline-block;
  width: 30px;
  height: 3px;
  background-color: #ccc;
  transition: background-color 0.3s, width 0.3s;
}

.indicators span.active {
  background-color: #26A0F8;
  width: 34px;
}

.article-item {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  width: 300px;
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
.tag-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  justify-content: center;
}

.tag-button {
  padding: 4px 12px;
  border: 1px solid #333;
  border-radius: 16px;
  background: transparent;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;

  &:hover {
    background: #333;
    color: #fff;
  }

  &.active {
    background: #333;
    color: #fff;
  }
}

.article-tags-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.tag {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 12px;
  color: #666;
  font-size: 10px;
  line-height: 160%;
  display: flex;
  align-items: center;
  letter-spacing: .08em;
  font-feature-settings: "palt" on;
  color: #1c1c1c;
  border: 1px solid #1c1c1c;
  border-radius: 100px;
  transition: all .25s ease-in-out;
}
</style>
