<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    // ローカルストレージからテーマを読み込む、なければダークモード
    const savedTheme = localStorage.getItem('theme') || 'dark'
    document.documentElement.setAttribute('data-theme', savedTheme)
  }
}
</script>

