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
}

.intro__text {
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.4;
  text-align: left;
  margin: 11.25rem 0 5rem 5rem;

  @include sp {
    font-size: 1.5rem;
    margin: auto;
    padding: 40px;
  }
}

.intro__text-ios {
  margin: 10px auto 0 auto;
  font-size: 200px;
  color: #333;

  @include sp {
    font-size: 120px;
  }

}

</style>
