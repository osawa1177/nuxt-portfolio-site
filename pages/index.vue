<template>


  <div class="content__hero">
    <div class="menu-toggle">
      <div class="one"></div>
      <div class="two"></div>
      <div class="three"></div>
    </div>

    <nav class="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <script>
      var toggle = document.querySelector('.menu-toggle');
      var menu = document.querySelector('.menu');

      toggle.addEventListener('click', function () {
        menu.classList.toggle('open');
      });
    </script>
    <section class="section hero">
      <video id="video" class="video" webkit-playsinline="" preload="auto" muted="" autoplay="" loop="" src="~/assets/img/toolskill/9835.mp4"></video>
      <div class="container">
        <a class="underlined underlined_angular"><span>Design.</span></a>
        <a class="underlined underlined_dashed"><span>Development.</span></a>
        <a class="underlined underlined_waved"><span>Maintenance.</span></a>
      </div>

      <div class="bgLight">
        <div class="bgLight__pos bgLight__one"></div>
        <div class="bgLight__pos bgLight__two"></div>
        <div class="bgLight__pos bgLight__three"></div>
      </div>

    </section>

    <Gallery/>
    <Services/>
    <Design/>
    <Development/>
    <Projects/>
    <Livemasq/>
    <Autopixelation/>
    <Videochat/>

    <div class="button__wrap">
      <nuxt-link to="/projects" class="more fadeonscroll mouse-attract button button-undefined active">
      <span class="button-inner mouse-target">
        <span class="button-fill"></span>
      <span class="button-caption">View More</span>
    </span>
      </nuxt-link>
    </div>
    <ToolSkill/>

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
    const {data} = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://portfolio07.microcms.io/api/v1/blog',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: {'X-MICROCMS-API-KEY': '30183846baae4f1b83f172788a157b38e70a'}
      }
    )
    return data
  }

}
</script>
<style lang="scss" scoped>

  .menu-toggle {
    width: 40px;
    height: 40px;
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 999;
    cursor: pointer;
  }

  .menu-toggle div {
    width: 100%;
    height: 3px;
    background: #333;
    margin: 6px 0;
  }

  nav.menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    height: 100%;
    background: #fff;
    transition: all 0.3s;
    z-index: 998;
  }

  nav.menu.open {
    right: 0;
  }

  nav.menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  nav.menu ul li {
    margin: 50px 0;
  }

  nav.menu ul li a {
    text-decoration: none;
    color: #333;
    font-size: 24px;
  }

  nav.menu ul li a:hover {
    color: #fff;
    background: #333;
  }


.underlined {
  position: relative;
  font-size: 40px;
  font-weight: 500;
  line-height: 3.5rem;
  margin: 0 0 7rem;
  letter-spacing: -.02em;

  @include sp {
    margin: 0 0 0.5rem;
  }
}

.underlined:after, .underlined:before {
  position: absolute;
  width: 100%;
  height: 11px;
  bottom: -10px;
  left: 0;
  background: var(--text);
  content: ""
}

.underlined:after {
  transition: all .6s;
  background: linear-gradient(190.05deg, #98e8fc -16.32%, #1fa9ff 56.32%, #8980f6 115.25%)
}

.underlined:before {
  opacity: .2
}

.underlined:hover {
  color: var(--text)
}

.underlined:hover:after, .underlined:hover:before {
  animation: movemask 2s linear infinite;
}

.underlined:hover:after {
  width: 100%;
  transition-timing-function: cubic-bezier(.2, 0, 0, 1);
  background: linear-gradient(190.05deg, #98e8fc -16.32%, #1fa9ff 56.32%, #8980f6 115.25%)
}

.underlined_angular:after, .underlined_angular:before {
  -webkit-mask: url("~assets/img/toolskill/angular.svg");
  mask: url("~assets/img/toolskill/angular.svg");
}

.underlined_dashed:after, .underlined_dashed:before {
  -webkit-mask: url("~assets/img/toolskill/dashed.svg");
  mask: url("~assets/img/toolskill/dashed.svg");
}

.underlined_waved:after, .underlined_waved:before {
  -webkit-mask: url("~assets/img/toolskill/waved.svg");
  mask: url("~assets/img/toolskill/waved.svg");
}

@keyframes movemask {
  0% {
    -webkit-mask-position: 0 0;
    mask-position: 0 0
  }

  to {
    -webkit-mask-position: 114px 0;
    mask-position: 114px 0
  }
}

.button__wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 11.25rem;

  @include sp {
    margin-top: 50px;
    margin-bottom: 0;
  }
}


.button {
  position: relative;
  outline: none;
  cursor: pointer;
  border: 0;
  background: none;
  border-radius: 30px
}

.button, .button-inner {
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
    font-size: 1.143rem
  }
}

.button:focus, .button:hover {
  -webkit-animation: scale .5s linear 1;
  animation: scale .5s linear 1;
  -webkit-animation-delay: .1s;
  animation-delay: .1s
}

.button:focus .button-fill:before, .button:hover .button-fill:before {
  transform: scale(2.2)
}

.button:disabled {
  opacity: .4;
  pointer-events: none
}

.button:focus, .button:hover .button-inner {
  border-color: transparent;
  color: $white;
  transition-duration: .2s
}

.button:focus:before, .button:hover .button-inner:before {
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
  transform: translate(-50%, -50%)
}

.button-fill:before {
  position: absolute;
  top: 0;
  content: "";
  background: linear-gradient(190.05deg, #98e8fc -16.32%, #1fa9ff 56.32%, #8980f6 115.25%);
  border-radius: 50%;
  transform: scale(0)
}

.button-fill:before, .cookies-notification {
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
  opacity: 0.5 !important;
  text-align: center;
  margin: auto;
}

.video {
  display: block;
  width: 100%;
  height: 600px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.content__hero {
  overflow: hidden;
}

.subtitle {
  margin: auto;
  font-size: 52px;
}

.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.65);
  position: relative;
  gap: 16px;

  @include sp {
    flex-direction: column;
  }
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
  background: linear-gradient(204.37deg, #8980f6 -6.62%, #1fa9ff 112.89%);
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
  background-size: contain !important;
  background-repeat: no-repeat !important;
  position: absolute;
  top: -4.86111vw
}

.bgLight__one {
  background-position: 0 0 !important;
  margin-left: -20.13889vw;
  background: url("~assets/img/img_17.png");
  -webkit-animation: blinkLight 10s linear 20;
  animation: blinkLight 10s linear 20;
  animation-iteration-count: infinite;
}

.bgLight__two {
  background-position: 100% 0 !important;
  margin-left: 23.61111vw;
  background: url("~assets/img/img_17.png");
  -webkit-animation: blinkLight 15s linear 15;
  animation: blinkLight 15s linear 15;
  animation-iteration-count: infinite;
}

.bgLight__three {
  background-position: top !important;
  margin-left: 1.73611vw;
  background: url("~assets/img/img_17.png");
  -webkit-animation: blinkLight 20s linear 20;
  animation: blinkLight 20s linear 20;
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
