<template>
  <section>
    <div class="c-page__container">
      <div class="c-page__other-title">
        <span class="c-page__headline">その他の実績</span>
        <h2 class="c-page__content">OTHER PROJECTS</h2>
      </div>
      <div class="slider">
        <div class="slider-track" :style="{ transform: `translateX(-${currentSlide * 278}px)` }">
          <div v-for="(project, index) in projects" :key="index" class="c-page__other-list">
            <a :href="project.link">
              <img class="slider-track-img" :src="require(`~/assets/img/projects/${project.other_project_img}`)" alt="Project Image">
            </a>
            <h3 class="c-page__other-list-title">{{ project.client }}</h3>
            <p class="c-page__other-list-text">{{ project.other_project_description }}</p>
          </div>
        </div>
      </div>
      <div class="slider__btn-wrap">
        <div class="slider__btn-left"><img :src="require(`~/assets/img/icon/left-arrow.svg`)" @click="prevSlide"></div>
        <div class="indicators">
          <span v-for="(project, index) in projects" :key="index" :class="{ 'active': currentSlide === index }"></span>
        </div>
        <div class="slider__btn-right"><img :src="require(`~/assets/img/icon/right-arrow.svg`)" @click="nextSlide"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,

    }
  },
  data() {
    return {
      currentSlide: 0
    };
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.projects.length - 1) {
        this.currentSlide++;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-page__container {
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;

  @include sp {
    padding: 0 16px;
  }
}

.c-page__other-title {
  padding: 72px 0 32px;
}

.c-page__other-list {
  display: flex;
  flex-direction: column;
  width: 257px;
  gap: 16px;
}

.c-page__other-list-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

.c-page__other-list-text {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.7;
  color: #aaa;
}

.slider {
  overflow: hidden;
  width: 1100px;
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease;
  gap: 24px;
}

.slider-track-img {
  max-width: 258px;
  transition: transform 0.3s;
}

.slider-track-img:hover {
  transform: scale(1.05);
}

.slider__btn-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  justify-content: center;
}

.slider__btn-left {
  cursor: pointer;
}

.slider__btn-right {
  cursor: pointer;
}

.indicators {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.indicators span {
  display: inline-block;
  width: 30px;
  height: 3px;
  background-color: $white;
  transition: background-color 0.3s, width 0.3s;
}

.indicators span.active {
  background-color: #26A0F8;
  width: 34px;
}
</style>
