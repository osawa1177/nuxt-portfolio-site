<template>
  <div class="projects__container">
    <div class="projects__title" id="projects">Projects</div>
    <p class="projects__text">
      デザイン、フロントエンド、CSS設計、モダンな開発環境を使用してプロジェクトを実装しています。
    </p>
    <section>
      <div class="projects__wrap">
        <div v-for="(project, index) in projects.slice(0, displayCount)" :key="index" class="projects__block" :class="project.textBlockClass">
          <div class="projects__text-block">
            <h3 class="projects__text-title">{{ project.title }}</h3>
            <p class="projects__tag">{{ project.tag }}</p>
            <p class="projects__description">{{ project.description }}</p>
            <nuxt-link :to="`/projects/${project.link}`" class="more fadeonscroll mouse-attract button button-undefined active">
              <span class="button-inner mouse-target">
                <span class="button-fill"></span>
                <span class="button-caption">View More</span>
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projectsData from '~/data/projects.json';

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

export default {
  data() {
    return {
      projects: projectsData, // JSONデータを使用
      displayCount: 4,
    };
  },
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
    padding: 24px 0 24px 24px;
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
