<template>
  <div class="c-page__thanks-wrap">
    <div class="c-page__thanks-title">
      <h1>お問い合わせありがとうございます！</h1>
      <p>この度はお問合せをいただき誠にありがとうございます。<br>1営業日以内を目安に、ご連絡いたします。</p>
    </div>
    <div class="thank-you-image">
      <img :src="require(`~/assets/img/contact/thanks.svg`)" alt="Project Image">
    </div>
    <div class="button__wrap button__wrap--slider">
      <nuxt-link to="/" class="more fadeonscroll mouse-attract button button-undefined active">
        <span class="button-inner mouse-target">
          <span class="button-fill"></span>
          <span class="button-caption">TOPへ戻る</span>
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss">
.c-page {

  &__thanks-wrap {
    display: flex;
    padding: 20vh 0 3.2rem;
    max-width: 1100px;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
    flex-direction: column;
    text-align: center;
    gap: 48px;
  }

  &__thanks-title {
    display: flex;
    gap: 24px;
    flex-direction: column;

    h1 {
      margin: 0;
      font-weight: 600;
    }

    p {
      font-size: 20px;
      line-height: 1.7;
    }
  }


}
</style>
