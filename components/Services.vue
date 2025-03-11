<template>
  <div class="intro">
    <h2 class="intro__title">
      Webサイトの設計、構築、運用、保守を行っています。企画・アイデアから実装まで、サイトやアプリのサービス全体を通してデザイン、開発をしています
    </h2>
    <h3 class="intro__text">Design / Engineer</h3>
  </div>
</template>

<script>
export default {
  name: "services",
};
</script>

<style lang="scss" scoped>
.intro {
  max-width: 1320px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-content: center;
  flex-direction: column;
  min-height: 80vh;

  @include sp {
    width: 90%;
    min-height: 0;
  }

  &__title {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.5;
    text-align: left;
    margin: 11.25rem auto 8px;
    text-align: center;
    width: 74%;

    @include sp {
      font-size: 1.5rem;
      margin: auto;
      padding: 40px;
    }
  }

  &__text {
    font-size: 80px;
    color: #333;
    text-align: center;

    @include sp {
      font-size: 120px;
    }
  }
}
</style>
