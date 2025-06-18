<template>
  <div class="tag-filter">
    <button class="tag-button" :class="{ active: selectedTag === null }" @click="selectTag(null)">
      すべて
    </button>
    <button v-for="tag in uniqueTags" :key="tag" class="tag-button" :class="{ active: selectedTag === tag }"
      @click="selectTag(tag)">
      {{ tag }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      default: null
    }
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
    selectedTag: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },
  methods: {
    selectTag(tag) {
      this.selectedTag = tag;
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;

  @include sp {
    margin-bottom: 16px;
  }
}

.tag-button {
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  background: transparent;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background: #26A0F8;
    border-color: #26A0F8;
  }
}
</style>
