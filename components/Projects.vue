<template>
  <div class="projects__container">
    <div class="c-page__contact-title">
      <span class="c-page__headline">これまでの実績</span>
      <h2 class="c-page__content">PROJECTS</h2>
      <p>デザイン、フロントエンド、CSS設計、モダンな開発環境を使用してプロジェクトを実装しています。</p>
    </div>
    <section>
      <div class="projects__wrap">
        <div v-for="(project, index) in projects.slice(0, displayCount)" :key="index" class="projects__block fade-down"
          :class="project.textBlockClass">
          <div class="projects__text-block">
            <h3 class="projects__text-title">
              {{ project.title }}
            </h3>
            <p class="projects__tag">
              {{ project.tag }}
            </p>
            <p class="projects__description">
              {{ project.description }}
            </p>
            <nuxt-link :to="`/projects/${project.link}`"
              class="more fadeonscroll mouse-attract button button-undefined active">
              <span class="button-inner mouse-target">
                <span class="button-fill"></span>
                <span class="button-caption">View</span>
              </span>
            </nuxt-link>
          </div>
          <figure class="projects__img-block">
            <img class="projects__img" :src="require(`~/assets/img/projects/${project.imgSrc}`)" :alt="project.title">
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import projectsData from "~/data/projects.json"

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
    displayCount: {
      type: Number,
      default() {
        return this.projects ? this.projects.length : 0 // デフォルトで全件表示
      },
    },
  },
  mounted() {
    this.scrollItemC()
  },
  methods: {
    scrollItemC() {
      if (window.innerWidth <= 768) return

      gsap.from(".fade-down", {
        scrollTrigger: {
          trigger: ".fade-down",
          scrub: true,
          start: "top 100%",
          end: "bottom 10%",
        },
        scale: 2,
        y: -10,
        opacity: 0,
        stagger: 0.13,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/foundation/_button.scss";

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

    @include sp {
      margin-top: 6rem;
      padding: 72px 16px 0;
    }
  }

  &__title {
    font-size: 4rem;
    margin-bottom: 32px;
    font-weight: 500;

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
    height: auto;
    min-height: 300px;
    border-radius: 3px;

    &::after {
      mix-blend-mode: overlay;
      content: "";
      border-radius: inherit;
      pointer-events: none;
      background: linear-gradient(rgba(255, 255, 255, 0.6), rgb(231 215 190 / 60%) 0%, rgba(127, 104, 69, 0.4) 105%, rgba(255, 255, 255, 0.2)) border-box;
      border: 1.5px solid rgba(0, 0, 0, 0);
      position: absolute;
      inset: 0;
    }

    @include sp {
      flex-direction: column-reverse;
      gap: 0;
      margin-bottom: 24px;
    }

    &--pay {
      background: var(--background-pay);
    }

    &--money {
      background: var(--background-money);
    }

    &--fire {
      background: var(--background-fire);
    }

    &--live {
      background: var(--background-live);
    }

    &--auto {
      background: var(--background-auto);
    }

    &--flight {
      background: var(--background-flight);
    }

    &--video {
      background: var(--background-video);
    }
  }

  &__text-block {
    padding: 24px 0 24px 24px;
    flex-basis: 50%;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @include sp {
      padding: 16px;
    }
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

    @include sp {
      flex-basis: auto;
      height: 200px;
    }
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
  background-color: var(--btn-background)
}
</style>
