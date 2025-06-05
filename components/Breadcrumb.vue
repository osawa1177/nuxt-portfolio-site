<template>
  <nav aria-label="breadcrumb" class="breadcrumb">
    <ul>
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <span v-if="index !== breadcrumbs.length - 1">
          <nuxt-link :to="crumb.path">{{ crumb.label || crumb.text }}</nuxt-link>
        </span>
        <span v-else>{{ crumb.label || crumb.text }}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    custom: {
      type: Array,
      default: null
    }
  },
  computed: {
    breadcrumbs() {
      return this.custom || []
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  max-width: 1100px;
  margin: 82px auto 0;
  width: 100%;
}

.breadcrumb ul {
  display: flex;
  gap: 0.5em;
  list-style: none;
  font-size: 0.9em;

  @include sp {
    padding: 0 16px;
    font-size: 10px;
  }
}

.breadcrumb li::after {
  content: '>';
  margin: 0 0.5em;
}

.breadcrumb li:last-child::after {
  content: '';
}
</style>
