<template>
  <main>
    <div class="bgLight">
      <div class="bgLight__pos bgLight__one"></div>
      <div class="bgLight__pos bgLight__two"></div>
      <div class="bgLight__pos bgLight__three"></div>
    </div>
    <div class="c-container">
      <div class="c-page__title">
        <span class="c-page__headline">Latest projects</span>
        <h1 class="c-page__content">これまでのプロジェクトで手がけたWebサイトやアプリのデザインの一覧です</h1>
        <p class="c-page__text">これまでに携わったプロジェクトの中で制作したWebサイトやアプリのデザインの一部をぜひご覧ください。</p>
      </div>

      <section class="p-projects__wrap">
          <div v-for="project in projects" :key="project.slug" v-if="project && project.show" class="p-projects__project p-projects__project-active">
            <nuxt-link :to="`/projects/${project.slug}`" class="p-projects__project-link">
            <div class="p-projects__project-image">
              <div class="p-projects__project-wrap">
                <img :src="`/img/${project.img}`" alt="Project Image">
              </div>
            </div>
            <div class="p-projects__project-details">
              <div class="p-projects__project-tags"><span class="p-projects__tag">{{ project.tag }}</span></div>
              <div class="p-projects__project-link">{{ project.title }}</div>
              <div class="p-projects__project-description">{{ project.description }}</div>
            </div>
            </nuxt-link>
          </div>
      </section>
    </div>
  </main>
</template>

<script>
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  async asyncData() {
    const projects = await fetch('/content/projects.json')
      .then(res => res.json())
      .catch(() => []);
    return {projects};
  },

  mounted() {
    this.projectsItem();
  },

  methods: {
    projectsItem() {
      gsap.to(".p-projects__project-active", {
        opacity: 1,
        scrollTrigger: {
          trigger: ".p-projects__project-active",
          start: "top 70",
          end: "bottom 10",
          scrub: true,
        }
      });
    },
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/foundation/_bglight.scss';


.p-projects {

  &__wrap {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
  }

  &__list-grid {
    width: 100%;

    @media(max-width: 767px) {
      grid-template-columns:1fr
    }
  }

  &__project {
    position: relative;
    overflow: hidden;
    transform: translateY(100px);
    transform-origin: 50% 100%;
    opacity: 0;
    transition: all 1s;
    flex: 1;
    flex-basis: 35%;
    max-width: 550px;
    max-height: 761px;
  }

  &__project-link {
    font-size: 18px;
    font-weight: 600;
  }

  &__project-image {
    position: relative;
    border: 0;
    padding-top: 103.8%;
    height: 0;
    transition: all .5s;

    @media(max-width: 767px) {
      transform: none;
      opacity: 1
    }
  }

  &__project-image img {
    width: 100%
  }

  &__tag {
    border: 1px solid #fff;
    padding: 4px 8px;
    text-align: center;
    font-size: 14px;
    font-weight: 300;
  }

  &__project:hover &__project-image {
    transform: scale(1.02)
  }

  &__project-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
  }

  &__project-title {
    font-size: 3.75rem;
    font-weight: 500;
  }

  &__project-details {
    position: relative;
    padding: 0 3.75rem 2.5rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__project-description {
    font-size: 16px;
    margin-bottom: 1rem;
    line-height: 1.65;
    font-weight: 100;

    @media(max-width: 767px) {
      font-size: 1.7rem
    }
  }

  &__project__tag {
    font-size: 1rem;
    color: #fff;
    margin-right: 1rem;
    position: relative;
    border: 1px solid #fff;
    padding: 4px 8px;
    text-align: center;
  }

  &__project--large {
    grid-column: span 2;

    @media(max-width: 767px) {
      grid-column: span 1
    }
  }

  &__project--large &__project-image {
    padding-top: 54%
  }

  &__project--large &__project-details {
    top: 7%;
    bottom: auto;
    right: 55%;
    left: 0;
    position: absolute;
  }

  @media(max-width: 767px) {
    &__project-wrap {
      left: -8%;
      right: -8%
    }

    &__project-image {
      padding-top: 120%
    }

    &__project-details {
      padding: 0 1rem 2rem
    }

    &__project--large &__project-image {
      padding-top: 120%
    }

    &__project--large &__project-wrap {
      left: 0;
      right: 0
    }

    &__project--large &__project-details {
      position: relative;
      top: 0;
      right: 0;
      left: 0
    }
  }

  &__project-active {
    transform: none;
    opacity: 1
  }

  &__tags .button {
    margin: 0 1.5rem 1.5rem 0
  }

  @media(max-width: 767px) {
    &__tags {
      white-space: nowrap;
      margin-left: -15px;
      margin-right: -15px;
      padding-left: 15px;
      overflow: hidden;
      overflow-x: scroll
    }
  }

}

</style>
