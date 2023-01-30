<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="post" v-html="body"></div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://portfolio07.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { 'X-MICROCMS-API-KEY': '30183846baae4f1b83f172788a157b38e70a' }
      }
    )
    return data
  }
}
</script>
