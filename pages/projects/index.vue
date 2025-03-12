<template>
  <main>
    <div class="bgLight">
      <div class="bgLight__pos bgLight__one"></div>
      <div class="bgLight__pos bgLight__two"></div>
      <div class="bgLight__pos bgLight__three"></div>
    </div>
    <Projects :projects="projects" />
  </main>
</template>

<script>

import projectsData from '~/data/projects.json';


export default {
  data() {
    return {
      projects: projectsData, // JSONデータを使用
    };
  },


};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/foundation/_bglight.scss';
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
    margin-top: 13rem;
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
