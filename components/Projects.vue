<template>
  <div class="projects__container">
    <div class="projects__title" id="projects">Projects</div>
    <p class="projects__text">
      デザイン、フロントエンド、CSS設計、モダンな開発環境を使用してプロジェクトを実装しています。
    </p>
    <section>
      <div class="projects__wrap">
        <div class="projects__block projects__block--money">
          <div class="projects__text-block">
            <h3 class="projects__text-title">マネーセミナー</h3>
            <p class="projects__tag">Mobile and web site</p>
            <p class="projects__description">楽天保険のマネーセミナーは、個人向けに金融知識を提供するオンラインセミナーです。私たちのチームは、直感的なUI/UXデザインとCMS開発により、スムーズな情報取得と申し込みができるプラットフォームを構築しました。レスポンシブデザイン、運営管理システムを開発し、参加者データの管理を効率化しました。</p>
            <nuxt-link to="/projects/rakuten-money-seminar" class="more fadeonscroll mouse-attract button button-undefined active">
              <span class="button-inner mouse-target">
                <span class="button-fill"></span>
                <span class="button-caption">View More</span>
              </span>
            </nuxt-link>
          </div>
          <figure class="projects__img-block">
            <img class="projects__img" src="~/assets/img/projects/money-seminar.png" alt="マネーセミナー">
          </figure>
        </div>
        <div class="projects__block projects__block--fire">
          <div class="projects__text-block">
            <h3 class="projects__text-title">火災保険一括見積もり</h3>
            <p class="projects__tag">Mobile and web site</p>
            <p class="projects__description">火災保険一括見積もりサービスは、複数の保険会社のプランを一度の入力で比較できる便利なWebサイトです。物件情報や希望条件を入力するだけで、最適な火災保険の見積もりを取得でき、補償内容や保険料を簡単に比較できます。</p>
            <nuxt-link to="/projects/rakuten-fire-insurance" class="more fadeonscroll mouse-attract button button-undefined active">
              <span class="button-inner mouse-target">
                <span class="button-fill"></span>
                <span class="button-caption">View More</span>
              </span>
            </nuxt-link>
          </div>
          <figure class="projects__img-block">
            <img class="projects__img" src="~/assets/img/projects/fire-estimate.png" alt="火災保険一括見積もり">
          </figure>
        </div>
        <div class="projects__block projects__block--live">
          <div class="projects__text-block">
            <h3 class="projects__text-title">Live Masq</h3>
            <p class="projects__tag">iOS application</p>
            <p class="projects__description">LiveMasq は、画像をアップロードするだけで自動でモザイク処理を行うiOSアプリです。プライバシー保護を重視し、AIによる高精度な顔認識技術を活用して、個人情報が含まれる部分に自動でモザイクを適用します。
              直感的なUI/UXデザインにより、シンプルな操作で誰でも簡単に使用可能。</p>
            <nuxt-link to="/projects/live-masq" class="more fadeonscroll mouse-attract button button-undefined active">
              <span class="button-inner mouse-target">
                <span class="button-fill"></span>
                <span class="button-caption">View More</span>
              </span>
            </nuxt-link>
          </div>
          <figure class="projects__img-block">
            <img class="projects__img" src="~/assets/img/projects/livemasq-app.png" alt="Live Masq">
          </figure>
        </div>
        <div class="projects__block projects__block--auto">
          <div class="projects__text-block">
            <h3 class="projects__text-title">Auto Pixelation</h3>
            <p class="projects__tag">Desk Top web application</p>
            <p class="projects__description">Auto Pixelation は、デスクトップ向けのWebアプリで、動画と対象の人物の画像をアップロードするだけで、自動でモザイク処理を行うツールです。AIによる高精度な顔認識技術を活用し、指定した人物のみにモザイクを適用。プライバシー保護や映像編集の効率化に貢献します。</p>
            <nuxt-link to="/projects/auto-pixelation" class="more fadeonscroll mouse-attract button button-undefined active">
              <span class="button-inner mouse-target">
                <span class="button-fill"></span>
                <span class="button-caption">View More</span>
              </span>
            </nuxt-link>
          </div>
          <figure class="projects__img-block">
            <img class="projects__img" src="~/assets/img/projects/autopixelation-app.png" alt="Auto Pixelation">
          </figure>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

export default {
  mounted() {
    this.scrollItemC();
  },
  methods: {
    scrollItemC() {
      gsap.from(".fade-down", {
        scrollTrigger: {
          trigger: ".fade-down",
          scrub: true,
          start: "top 80%",
          end: "bottom 40%",
        },
        scale: 2,
        y: -10,
        opacity: 0,
        stagger: 0.13,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/foundation/_button.scss';

.projects {

  &__wrap {
    max-width: 1100px;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
  }

  &__container {
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
  }

  &__title {
    font-size: 4rem;
    margin-bottom: 32px;

    @include sp {
      font-size: 3rem;
    }
  }

  &__text {
    margin-bottom: 40px;
  }

  &__block {
    display: flex;
    gap: 40px;
    margin-bottom: 56px;
    max-height: 297px;
    height: 297px;

    &--money {
      background: #1E4762;
    }

    &--fire {
      background: #5276B4;
    }

    &--live {
      background: #415D94;
    }

    &--auto {
      background: #656584
    }
  }

  &__text-block {
    padding: 24px 0 0 24px;
    flex-basis: 50%;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__text-title {
    font-weight: 500;
    line-height: 120%;
    font-size: 24px;
    margin: 0;
  }

  &__tag {
    margin: 0;
  }

  &__description {
    margin: 0;
  }

  &__img-block {
    width: 100%;
    position: relative;
    flex-basis: 50%;
    margin: 0;
    overflow: hidden;
  }

  &__img {
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
  }
}

.button-inner {
  line-height: 0px;
  padding: 24px 48px;
}
</style>
