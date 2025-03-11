<template>
  <div class="container-projects">
    <div class="title" id="projects">Projects</div>
    <h2 class="text-grey-1 text-center text-7xl my-24">
      フロントエンド、CSS設計、モダンな開発環境を使用してプロジェクトを実装しています。
    </h2>
    <div class="projects__wrap">
      <a href="/projects/rakuten-money-seminar" class="projects__link-block">
        <img src="~/assets/img/projects/money-seminar.png" class="projects__img fade-down" />
        <div class="projects__text-block">
          <p class="projects__text-title">Money Seminar</p>
          <span class="projects__text-caption">2024・Web Design</span>
        </div>
      </a>
      <a href="/projects/rakuten-fire-insurance" class="projects__link-block">
        <img src="~/assets/img/projects/fire-estimate.png" class="projects__img fade-down" />
        <div class="projects__text-block">
          <p class="projects__text-title">火災保険一括見積もりフォーム</p>
          <span class="projects__text-caption">2022・Web Design / UI</span>
        </div>
      </a>
      <a href="/projects/live-masq" class="projects__link-block">
        <img src="~/assets/img/projects/livemasq-app.png" class="projects__img fade-down" />
        <div class="projects__text-block">
          <p class="projects__text-title">Live Masq</p>
          <span class="projects__text-caption">2021・Web Design / ios app</span>
        </div>
      </a>
      <a href="/projects/auto-pixelation" class="projects__link-block">
        <img src="~/assets/img/projects/autopixelation-app.png" class="projects__img fade-down" />
        <div class="projects__text-block">
          <p class="projects__text-title">Auto Pixelation</p>
          <span class="projects__text-caption">2020・UI Design</span>
        </div>
      </a>
      <a href="/projects/videochat" class="projects__link-block">
        <img src="~/assets/img/projects/videochat-app.png" class="projects__img fade-down" />
        <div class="projects__text-block">
          <p class="projects__text-title">Video chat</p>
          <span class="projects__text-caption">2020・UI Design</span>
        </div>
      </a>
      <a href="/projects/career-flight" class="projects__link-block">
        <img src="~/assets/img/projects/careerflight-app.png" class="projects__img fade-down" />
        <div class="projects__text-block">
          <p class="projects__text-title">Career Flight</p>
          <span class="projects__text-caption">2020・UI Design / Develop</span>
        </div>
      </a>
    </div>
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
.container-projects {
  max-width: 1320px;
  margin: 0 auto;
  width: 100%;
  padding-top: 11.25rem;
}

.title {
  font-size: 4rem;
  margin-left: 5rem;
  margin-bottom: 32px;

  @include sp {
    font-size: 3rem;
    margin-left: 2rem;
  }
}

.my-24 {
  margin-bottom: 4rem !important;
}

.z-1 {
  z-index: 1;
}

.pt-6 {
  padding-top: 6rem;

  @include sp {
    padding: 0;
  }
}

.text-grey-1 {
  color: $white60;
  margin-left: 5rem;
  font-weight: 600;
  font-size: 16px;

  @include sp {
    margin: 24px;
    margin-bottom: 0 !important;
  }
}

.projects {
  &__wrap {
    width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: space-between;
    margin-bottom: 64px;
  }

  &__img {
    width: 250px;
    cursor: pointer;
    border-radius: 5px;
  }

  &__link-block {
    display: flex;
    flex-direction: row;
    gap: 24px;
    width: 470px;

    &:hover {
      opacity: 0.8;
    }
  }

  &__text-block {
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 8px;
  }

  &__text-title {
    font-size: 20px;
    margin: 0;
  }

  &__text-caption {
    font-size: 16px;
    color: $white60;
  }
}
</style>
