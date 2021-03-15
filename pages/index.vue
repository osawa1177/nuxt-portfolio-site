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
    <ProjectsLivemasq />
    <ProjectsAutopixelation />
    <ToolSkill />
  </div>


</template>

<style scoped>

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
