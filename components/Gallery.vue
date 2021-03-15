<template>
<div>
  <div class="grid-container" id="services">
    <div class="grid">
      <div class="gridLayer">
        <div class="gridBlock"></div>
      </div>
      <div class="gridLayer">
        <div class="gridBlock"></div>
      </div>
      <div class="gridLayer">
        <div class="gridBlock"></div>
      </div>
      <div class="gridLayer centerPiece">
        <div class="gridBlock centerBlock">
<!--          <video src="~/assets/video/design.mp4" muted="muted" autoplay="autoplay" playsinline="" loop="loop" class="hero-video hero-video-design"></video>-->
        </div>
      </div>
      <div class="gridLayer">
        <div class="gridBlock"></div>
      </div>
      <div class="gridLayer">
        <div class="gridBlock"></div>
      </div>
      <div class="gridLayer">
        <div class="gridBlock"></div>
      </div>
      <div class="gridLayer text__last2">
        <div class="gridBlock"></div>
      </div>
      <div class="gridLayer">
        <div class="gridBlock"></div>
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

      gsap.timeline({
        scrollTrigger: {
          trigger: ".grid-container",
          start: "top 10%",
          end: () => innerHeight * 4,
          endTrigger: ".text__last2",
          scrub: true,
          pin: ".grid",
          anticipatePin: 1
        }
      })
        .set(".gridBlock:not(.centerBlock)", {autoAlpha: 0})
        .to(".gridBlock:not(.centerBlock)", {duration: 0.1, autoAlpha: 1}, 0.001)
        .from(".gridLayer", {
          scale: 3.3333,
          ease: "none",
        });


      const size = Math.max(innerWidth, innerHeight);
      gsap.set('.gridBlock', {
        backgroundImage: "~assets/img/img.png"
      });

        gsap.to(".centerPiece .gridBlock", {
          autoAlpha: 1,
          start: "bottom 10%",
          end: "top 10%",
          duration: 0.5
        });

    }
  }
}
</script>

<style scoped>
.gridBlock {
  opacity: 0;
}


.grid-container {
  width: 100vw;
  position: relative;
  /*margin-top: 40vh;*/
}
.grid {
  top: 0;
  left: 0;
  z-index: 1;
  width: 70vw;
  height: 60vw;
  margin: 0 calc(100vw / 20 * 3);
  /*position: absolute;*/

}
@media only screen and (max-width: 580px) {
  .grid {
    margin: 0;
    width: 100vw;
    height: 89.444vw;
  }
}
.gridBlock {
  background-size: cover;
  background-color: darkgray;
}
.gridLayer {
  top: 10%;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  will-change: transform;
  transform-origin: 44% 50%;
}

.gridLayer:nth-child(2) .gridBlock {
  top: 0;
  left: 28.5vw;
  width: 15vw;
  height: 15vw;
  background: url("~assets/img/img_12.png") no-repeat;
  background-size: cover;
}
@media only screen and (max-width: 580px) {
  .gridLayer:nth-child(2) .gridBlock {
    top: 0;
    left: 43.333vw;
    width: 26.389vw;
    height: 26.389vw;
  }
}
.gridLayer:nth-child(3) .gridBlock {
  left: 5vw;
  top: 32.5vw;
  width: 15vw;
  height: 15vw;
  background: url("~assets/img/img_13.png") no-repeat;
  background-size: cover;
}
@media only screen and (max-width: 580px) {
  .gridLayer:nth-child(3) .gridBlock {
    top: 30.278vw;
    left: 0;
    width: 26.389vw;
    height: 26.389vw;
  }
}
.gridLayer:nth-child(4) .gridBlock {
  top: 18.5vw;
  left: 22.5vw;
  width: 30vw;
  height: 30vw;
  z-index: 3;
  background: url("~assets/img/autopixelation.png") no-repeat;
  background-size: contain;

}
@media only screen and (max-width: 580px) {
  .gridLayer:nth-child(4) .gridBlock {
    top: 30.278vw;
    left: 30.278vw;
    width: 39.444vw;
    height: 39.444vw;
  }
}

@media only screen and (max-width: 580px) {
  .gridLayer:nth-child(5) svg {
    width: 4.722vw;
  }
}
.gridLayer:nth-child(6) .gridBlock {
  left: 46vw;
  top: 27.5vw;
  width: 20vw;
  height: 20vw;
  background: url("~assets/img/img_14.png") no-repeat;
  background-size: contain;
}
@media only screen and (max-width: 580px) {
  .gridLayer:nth-child(6) .gridBlock {
    top: 43.889vw;
    left: 73.889vw;
    width: 26.389vw;
    height: 26.389vw;
  }
}


.gridBlock {
  display: block;
  position: absolute;
}

</style>
