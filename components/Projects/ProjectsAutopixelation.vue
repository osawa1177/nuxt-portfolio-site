<template>
  <div class="projects__wrap" id="development">
    <div class="projects__title-wrap">
      <div class="projects__group">Project-02 / <span>2020-12</span></div>
      <div class="projects__title">モザイクWebアプリ</div>
      <div class="projects__description">
        動画から人物の顔を検出し、人物の顔部分にモザイク処理を施した動画を出力します。人物の非特定化などプライバシー保護に活用できます。
      </div>
      <div class="projects__tags">
        <span class="projects__tags">UI設計</span>
        <span class="projects__tags">デザイン</span>
      </div>
    </div>

    <div class="projects__preview-wrap">
      <div class="projects__preview">
        <div class="projects__image">
          <img src="@/assets/img/autopixelation.png">
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  mounted() {
    this.projectsItem()
  },
  methods: {
    projectsItem() {
      gsap.to(".projects__preview-wrap", {
        opacity: 1,
        scrollTrigger: {
          trigger: ".projects__preview-wrap",
          start: "top 70%",
          end: "bottom 10%",
          scrub: true,
        }
      });
    },


  }
}
</script>

<style lang="scss" scoped>

.projects {

  &__wrap {
    max-width: 1320px;
    margin: 11.25rem auto 0;
    width: 100%;
    min-width: 861px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }


  &__title-wrap {
    margin-left: 5rem;
    margin-bottom: auto;
    width: 50%;
  }


  &__group {
    flex: 0 0 auto;
    margin-bottom: 2rem
  }

  &__title {
    font-size: 2.5rem;
    line-height: 1.3;
    font-weight: 600;
    margin-bottom: 2rem
  }

  &__description {
    line-height: 150%;
    opacity: .5;
    margin-bottom: 2rem;
  }

  &__tags-wrap {
    display: flex;
  }

  &__tags {
    margin: 0 1rem 0 0;
  }

  &__preview-wrap {
    opacity: 0;
    height: calc(100vh - 260px);
    overflow: hidden;
    pointer-events: none;
    width: 100%;
  }

  &__preview {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative
  }

  &__image {
    width: 100%;
    height: 100%;
  }

  &__image img {
    width: 100%;
    height: 100%;
    object-fit: contain
  }

}
</style>
