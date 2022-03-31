<template>

  <div class="content__hero ">
    <section class="section hero">
      <div class="container">
        <h1>DESIGN</h1>
        <span class="subtitle">Lets make some cool shit!</span>
      </div>
      <p class="caption">We are a digital agency that specializes in User Experience Design</p>

      <div class="bgLight">
        <div class="bgLight__pos bgLight__one"></div>
        <div class="bgLight__pos bgLight__two"></div>
        <div class="bgLight__pos bgLight__three"></div>
      </div>
    </section>

    <Gallery />
    <Services />
    <Design />
    <Development />
    <Projects />
    <Livemasq />
    <Autopixelation />
    <Videochat />

    <div class="button__wrap">
    <nuxt-link to="/projects"  class="more fadeonscroll mouse-attract button button-undefined active">
      <span class="button-inner mouse-target">
        <span class="button-fill"></span>
      <span class="button-caption">View More</span>
    </span>
    </nuxt-link>
    </div>
    <ToolSkill />

<!--    <ul>-->
<!--      <li v-for="content in contents" :key="content.id">-->
<!--        <nuxt-link :to="`/${content.id}`">-->
<!--          {{ content.title }}-->
<!--        </nuxt-link>-->
<!--      </li>-->
<!--    </ul>-->
  </div>

</template>
<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://portfolio07.microcms.io/api/v1/blog',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-MICROCMS-API-KEY': '30183846baae4f1b83f172788a157b38e70a' }
      }
    )
    return data
  }

}
</script>
<style lang="scss" scoped>

.button__wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 11.25rem;
}


.button {
  position: relative;
  outline: none;
  cursor: pointer;
  border: 0;
  background: none;
  border-radius: 30px
}

.button,.button-inner {
  display: inline-block;
  transition: all .5s;
  position: relative;
}

.button-inner {
  line-height: 30px;
  font-size: 1rem;
  padding: 20px 120px;
  color: $white;
  font-weight: 500;
  box-sizing: border-box;
  text-align: center;
  background: transparent;
  border: 1px solid $white;
  overflow: hidden;
  border-radius: 55px;
  vertical-align: top
}

.button-inner:before {
  position: absolute;
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
  border-radius: 30px;
  opacity: 0;
  content: "";
  transition: all .5s
}

@media(max-width: 767px) {
  .button-inner {
    font-size:1.143rem
  }
}

.button:focus,.button:hover {
  -webkit-animation: scale .5s linear 1;
  animation: scale .5s linear 1;
  -webkit-animation-delay: .1s;
  animation-delay: .1s
}

.button:focus .button-fill:before,.button:hover .button-fill:before {
  transform: scale(2.2)
}

.button:disabled {
  opacity: .4;
  pointer-events: none
}

.button:focus,.button:hover .button-inner {
  border-color: transparent;
  color: $white;
  transition-duration: .2s
}

.button:focus:before,.button:hover .button-inner:before {
  opacity: 1
}

.button.selected .button-inner {
  border-color: $primary;
  color: $black;
}

.button.selected .button-inner .button-caption {
  color: $black;
}

.button-caption {
  position: relative;
  z-index: 1
}

.button-block {
  width: 100%;
  display: block
}

.button-block .button-inner {
  display: block
}

.button-filled .button-inner {
  color: $white;
  border: 0
}

.button-filled .button-inner:before {
  background: $black;
  opacity: 1
}

.button-filled:hover .button-inner:before {
  background: $black;
}

.button-small {
  font-size: .875rem;
  padding: 5px 20px;
  color: $primary;
  border-radius: 12px
}

.button-fill {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  padding-top: 100%;
  transform: translate(-50%,-50%)
}

.button-fill:before {
  position: absolute;
  top: 0;
  content: "";
  background: linear-gradient(190.05deg,#98e8fc -16.32%,#1fa9ff 56.32%,#8980f6 115.25%);
  border-radius: 50%;
  transform: scale(0)
}

.button-fill:before,.cookies-notification {
  left: 0;
  right: 0;
  bottom: 0;
  transition: all .5s
}



.caption {
  position: absolute;
  bottom: 35%;
  left: 35%;
}

h1 {
  font-size: 20vh;
  opacity: 0.5!important;
  text-align: center;
  margin: auto;
}

.subtitle {
  position: absolute;
  font-size: 62px;
  top: 48%;
  left: 24.5%;
}
.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.hero-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 9;
}
.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all .5s;
  object-fit: cover;
  z-index: -1;
}
.hero-background-design {
  background: linear-gradient(204.37deg,#8980f6 -6.62%,#1fa9ff 112.89%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  transition: all .5s;
  z-index: -1;
}
.hero h1 .underlined {
  display: inline-block;
  line-height: 1;
  font-size: 200px;
  color: #333;
}


.bgLight {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 50;
  opacity: 0;
  position: fixed;
}

.bgLight__pos {
  width: 100%;
  height: 115vh;
  background-size: contain!important;
  background-repeat: no-repeat!important;
  position: absolute;
  top: -4.86111vw
}

.bgLight__one {
  background-position: 0 0!important;
  margin-left: -20.13889vw;
  background: url("~assets/img/img_17.png");
  -webkit-animation: blinkLight 10s linear 20;
  animation: blinkLight 10s linear 20;
  animation-iteration-count: infinite;
}

.bgLight__two {
  background-position: 100% 0!important;
  margin-left: 23.61111vw;
  background: url("~assets/img/img_17.png");
  -webkit-animation: blinkLight 15s linear 15;
  animation: blinkLight 15s linear 15;
  animation-iteration-count: infinite;
}

.bgLight__three {
  background-position: top!important;
  margin-left: 1.73611vw;
  background: url("~assets/img/img_17.png");
  -webkit-animation:blinkLight 20s linear 20;
  animation:blinkLight  20s linear 20;
  animation-iteration-count: infinite;
}

.bgLight {
  opacity: 1;
}


@-webkit-keyframes blinkLight {
  0% {
    opacity: .4
  }

  5% {
    opacity: .5
  }

  10% {
    opacity: .6
  }

  15% {
    opacity: .85
  }

  25% {
    opacity: .5
  }

  30% {
    opacity: 1
  }

  35% {
    opacity: .1
  }

  40% {
    opacity: .25
  }

  45% {
    opacity: .5
  }

  60% {
    opacity: 1
  }

  70% {
    opacity: .85
  }

  80% {
    opacity: .4
  }

  90% {
    opacity: .5
  }

  to {
    opacity: 1
  }
}

@keyframes blinkLight {
  0% {
    opacity: .4
  }

  5% {
    opacity: .5
  }

  10% {
    opacity: .6
  }

  15% {
    opacity: .85
  }

  25% {
    opacity: .5
  }

  30% {
    opacity: 1
  }

  35% {
    opacity: .1
  }

  40% {
    opacity: .25
  }

  45% {
    opacity: .5
  }

  60% {
    opacity: 1
  }

  70% {
    opacity: .85
  }

  80% {
    opacity: .4
  }

  90% {
    opacity: .5
  }

  to {
    opacity: 1
  }
}


</style>
