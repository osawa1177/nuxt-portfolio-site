<template>
  <div class="projects__wrap" id="development">
    <div class="projects__title-wrap">
      <div class="projects__group">Project-03 / <span>2020-07</span></div>
      <div class="projects__title">ビデオチャットWebアプリ</div>
      <div class="projects__description">
       表示されている顔の表情から、各個人の楽しい表情や悲しい表情など様々な感情をグラフで確認できるビデオチャットWebアプリです。
      </div>
      <div class="projects__tags">
        <span class="projects__tags">UI設計</span>
        <span class="projects__tags">デザイン</span>
      </div>
    </div>

    <div class="projects__preview-wrap preview-videochat">
      <div class="projects__preview">
        <div class="projects__image">
          <img src="@/assets/img/videochat.png">
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
      gsap.to(".preview-videochat", {
        opacity: 1,
        scrollTrigger: {
          trigger: ".preview-videochat",
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

    @include sp {
      flex-direction: column;
      min-width: 400px;
    }
  }


  &__title-wrap {
    margin-left: 5rem;
    margin-bottom: auto;
    width: 50%;

    @include sp {
      margin: 0 24px;
      width: auto;
    }
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

    @include sp {
      margin: 0px 0px 16px;
    }
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
