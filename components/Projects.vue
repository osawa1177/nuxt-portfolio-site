<template>
  <div class="container-projects">
    <div class="title" id="projects">Projects</div>
    <h2 class="text-grey-1 text-center text-7xl my-24">
      フロントエンドCSS設計、モダンな開発環境を使用してプロジェクトを実装しています。
    </h2>
    <div class="relative">
      <img class="absolute inset-0 w-full" src="~/assets/img/macbookpro.jpg">
      <div class="mx-32 relative z-1 text-center pt-6">
        <div class="w-full divice">
          <img src="~/assets/img/img.png" class=" py-2 fade-down"/>
          <img src="~/assets/img/img_1.png" class="py-2 fade-down"/>
          <img src="~/assets/img/img_2.png" class=" py-2 fade-down"/>
          <img src="~/assets/img/img_3.png" class=" py-2 fade-down"/>
          <img src="~/assets/img/img_4.png" class=" py-2 fade-down"/>
          <img src="~/assets/img/img_5.png" class="py-2 fade-down"/>
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
    this.scrollItemC()
  },
  methods: {
    scrollItemC() {
      gsap.from('.fade-down', {
        scrollTrigger: {
          trigger: ".fade-down",
          scrub: true,
          start: "top 80%",
          end: "bottom 40%",
        },
        scale: 2,
        y: -10,
        opacity: 0,
        stagger: 0.13
      })

    },


  }
}
</script>

<style>

.container-projects {
  max-width: 1320px;
  margin: 0 auto;
  width: 100%;
}

.title {
  font-size: 4rem;
  margin-left: 5rem;
  margin-bottom: 2rem;
}

.divice {
  text-align: center;
  padding-top: 2rem;
  min-height: 85vh;
  padding-left: 2rem;
}


.py-2 {
  padding-bottom: 2.5rem;
  width: 450px;
}
.w-full {
  width: 90%;
  margin: 0 auto;
}
.z-1 {
  z-index: 1;
}

.relative {
  position: relative;
}
.inset-0 {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.my-24 {
  margin-bottom: 4rem!important;
}
.absolute {
  position: absolute;
}

a:hover {
  opacity: 0.6;
}

.z-1 {
  z-index: 1;
}
.pt-6 {
  padding-top: 6rem;
}


.text-grey-1 {
  color: rgba(255,255,255,0.5);
  line-height: 1.5;
  margin-left: 5rem;
  font-weight: 300;
}


</style>
