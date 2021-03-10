<template>
  <div class="intro">
    <h1 class="intro__text">2014年からWebサイトの設計、構築、運用、保守を行っています。企画・アイデアから実装まで、サイトやアプリのサービス全体を通してデザイン、開発しています</h1>
    <h1 class="intro__text-ios">Design</h1>
  </div>
</template>

<script>
export default {
  name: "services"
}
</script>

<style scoped>


.intro {
  display: flex;
  align-content: center;
  flex-direction: column;
  min-height: 80vh;
}

.intro__text {
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.4;
  text-align: left;
  margin: 5rem;
}

.intro__text-ios {
  margin: 10px auto 0 auto;
  font-size: 200px;
  color: #333;
}

</style>
