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
      var toggle = document.querySelector(".menu-toggle");
      var menu = document.querySelector(".menu");

      toggle.addEventListener("click", function () {
        menu.classList.toggle("open");
      });
    </script>
    <section class="section hero">
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

    <Gallery />
    <Services />
    <Design />
    <Development />
    <Projects :projects="projects" :displayCount="4" />

    <div class="button__wrap">
      <nuxt-link to="/projects" class="more fadeonscroll mouse-attract button button-undefined active">
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
@import '~/assets/scss/foundation/_button.scss';

.menu-toggle {
  width: 40px;
  height: 40px;
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 999;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
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
  font-size: 48px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 7rem;

  @include sp {
    margin: 0 0 0.5rem;
  }
}

.underlined:after,
.underlined:before {
  position: absolute;
  width: 100%;
  height: 11px;
  bottom: -10px;
  left: 0;
  background: var(--text);
  content: "";
  animation: underlined-link_movemask__GvadX 5s linear infinite;
}

.underlined:after {
  transition: all 0.6s;
  background: linear-gradient(190.05deg,
      #98e8fc -16.32%,
      #1fa9ff 56.32%,
      #8980f6 115.25%);
}

@keyframes underlined-link_movemask__GvadX {
  0% {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }

  to {
    -webkit-mask-position: 114px 0;
    mask-position: 114px 0;
  }
}

.underlined:before {
  opacity: 0.2;
}

.underlined:hover {
  color: var(--text);
}

.underlined:hover:after,
.underlined:hover:before {
  animation: movemask 2s linear infinite;
}

.underlined:hover:after {
  width: 100%;
  transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
  background: linear-gradient(190.05deg,
      #98e8fc -16.32%,
      #1fa9ff 56.32%,
      #8980f6 115.25%);
}

.underlined_angular:after,
.underlined_angular:before {
  -webkit-mask: url("~assets/img/toolskill/angular.svg");
  mask: url("~assets/img/toolskill/angular.svg");
}

.underlined_dashed:after,
.underlined_dashed:before {
  -webkit-mask: url("~assets/img/toolskill/dashed.svg");
  mask: url("~assets/img/toolskill/dashed.svg");
}

.underlined_waved:after,
.underlined_waved:before {
  -webkit-mask: url("~assets/img/toolskill/waved.svg");
  mask: url("~assets/img/toolskill/waved.svg");
}

@keyframes movemask {
  0% {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }

  to {
    -webkit-mask-position: 114px 0;
    mask-position: 114px 0;
  }
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
  height: 90vh;
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
  transition: all 0.5s;
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
  transition: all 0.5s;
  z-index: -1;
}

.hero h1 .underlined {
  display: inline-block;
  line-height: 1;
  font-size: 200px;
  color: #333;
}
</style>
