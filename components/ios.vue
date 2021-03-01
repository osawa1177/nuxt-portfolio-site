<template>
  <div class="max-w-200 mt-5 m-auto">
    <h2 class="text-grey-1 text-center text-7xl my-24">
      Superfast wireless
      <div class="text-white">Hello 5G.</div>
    </h2>
    <div class="relative">
      <img class="absolute inset-0 w-full" src="~/assets/img/iphone12-5g_on_phone.jpg">
      <div class="mx-32 relative z-1 text-center pt-6">
        <img src="~/assets/img/img_6.png" class="w-full mt-16 pb-8 border-bottom-grey-2" alt="">
        <div class="w-full divide-y divide-solid divide-grey-2">
          <img src="~/assets/img/ios-sample.jpg" class="w-full py-2 fade-down"/>
          <img src="~/assets/img/img.png" class="w-full py-2 fade-down"/>
          <img src="~/assets/img/img_1.png" class="w-full py-2 fade-down"/>
          <img src="~/assets/img/img_2.png" class="w-full py-2 fade-down"/>
          <img src="~/assets/img/img_3.png" class="w-full py-2 fade-down"/>
          <img src="~/assets/img/img_4.png" class="w-full py-2 fade-down"/>
          <img src="~/assets/img/img_5.png" class="w-full py-2 fade-down"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

// クライアントサイドでプラグインを登録しておく
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
          start: "bottom 90%",
          end: "+=800"
        },
        scale: 2,
        y: -60,
        opacity: 0,
        stagger: 0.36
      })

    },


  }
}
</script>

<style>

.m-auto {
  margin-left: auto;
  margin-right: auto;
}

.py-2 {
  padding-top: .5rem!important;
  padding-bottom: .5rem!important;
}
.w-full {
  width: 100%;
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
.mx-32 {
  margin-left: 8rem!important;
  margin-right: 8rem!important;
}
.my-24 {
  margin-top: 6rem!important;
  margin-bottom: 6rem!important;
}
.absolute {
  position: absolute;
}
.max-w-200 {
  max-width: 50rem;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  background: black;
}

* {
  border-width: 0;
}

:root {
  --grey-color-1: #6e6e73;
  --grey-color-2: #222222;
}
img {
  width: 50%;
}
.z-1 {
  z-index: 1;
}
.pt-6 {
  padding-top: 6rem;
}

.mt-5 {
  margin-top: 5rem;
}

.text-grey-1 {
  color: var(--grey-color-1);
}

.border-bottom-grey-2 {
  border-bottom: 1px solid var(--grey-color-2);
}

.divide-grey-2 > * + * {
  border-color: var(--grey-color-2);
}
</style>
