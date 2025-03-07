<template>
  <section class="skills relative wrap" id="tool-skill">
    <div class="title">Tool & Skills</div>
    <div class="wrap mt-6 mb-6 skill-wrap">
      <div class="tool-skill-block d-flex flex-wrap justify-content-between">

        <div class="tool-skill-item ">
          <div class="tool-skill-img">
            <img src="~/assets/img/toolskill/html.png"/>
          </div>
          <div class="chart-block">
            <div class="chart-item chart-90">
            </div>
          </div>
          <div class="tool-skill-name">HTML5</div>
        </div>
        <div class="tool-skill-item ">
          <div class="tool-skill-img">
            <img src="~/assets/img/toolskill/css.png"/>
          </div>
          <div class="chart-block">
            <div class="chart-item chart-80">
            </div>
          </div>
          <div class="tool-skill-name">CSS</div>
        </div>
        <div class="tool-skill-item ">
          <div class="tool-skill-img">
            <img src="~/assets/img/toolskill/photoshop.png"/>
          </div>
          <div class="chart-block">
            <div class="chart-item chart-70">
            </div>
          </div>
          <div class="tool-skill-name">Photoshop</div>
        </div>
        <div class="tool-skill-item ">
          <div class="tool-skill-img">
            <img src="~/assets/img/toolskill/illustrator.png"/>
          </div>
          <div class="chart-block">
            <div class="chart-item chart-60">
            </div>
          </div>
          <div class="tool-skill-name">Illustrator</div>
        </div>
        <div class="tool-skill-item ">
          <div class="tool-skill-img">
            <img src="~/assets/img/toolskill/xd.png"/>
          </div>
          <div class="chart-block">
            <div class="chart-item chart-80">
            </div>
          </div>
          <div class="tool-skill-name">Adobe XD</div>
        </div>
        <div class="tool-skill-item ">
          <div class="tool-skill-img">
            <img src="~/assets/img/toolskill/javascript.png"/>
          </div>
          <div class="chart-block">
            <div class="chart-item chart-60">
            </div>
          </div>
          <div class="tool-skill-name">javascript</div>
        </div>
        <div class="tool-skill-item ">
          <div class="tool-skill-img">
            <img src="~/assets/img/toolskill/jquery.png"/>
          </div>
          <div class="chart-block">
            <div class="chart-item chart-70">
            </div>
          </div>
          <div class="tool-skill-name">jqery</div>
        </div>
        <div class="tool-skill-item ">
          <div class="tool-skill-img">
            <img src="~/assets/img/toolskill/vue.png"/>
          </div>
          <div class="chart-block">
            <div class="chart-item chart-50">
            </div>
          </div>
          <div class="tool-skill-name">Vue.js</div>
        </div>
        <div class="tool-skill-item ">
          <div class="tool-skill-img">
            <img src="~/assets/img/toolskill/wordpress.png"/>
          </div>
          <div class="chart-block">
            <div class="chart-item chart-60">
            </div>
          </div>
          <div class="tool-skill-name">Wordpress</div>
        </div>
        <div class="tool-skill-item ">
          <div class="tool-skill-img">
            <img src="~/assets/img/toolskill/git.png"/>
          </div>
          <div class="chart-block">
            <div class="chart-item chart-70">
            </div>
          </div>
          <div class="tool-skill-name">Git</div>
        </div>
        <div class="tool-skill-item ">
          <div class="tool-skill-img">
            <img src="~/assets/img/toolskill/bootstrap.png"/>
          </div>
          <div class="chart-block">
            <div class="chart-item chart-80">
            </div>
          </div>
          <div class="tool-skill-name">Bootstrap 3 / 4</div>
        </div>
        <div class="tool-skill-item ">
          <div class="tool-skill-img">
            <img src="~/assets/img/toolskill/sass.png"/>
          </div>
          <div class="chart-block">
            <div class="chart-item chart-80">
            </div>
          </div>
          <div class="tool-skill-name">Scss</div>
        </div>
        <div class="tool-skill-item ">
          <div class="tool-skill-img">
            <img src="~/assets/img/toolskill/vscode.png"/>
          </div>
          <div class="chart-block">
            <div class="chart-item chart-80">
            </div>
          </div>
          <div class="tool-skill-name">vscode</div>
        </div>
        <div class="tool-skill-item ">
          <div class="tool-skill-img">
            <img src="~/assets/img/toolskill/intelij.png"/>
          </div>
          <div class="chart-block">
            <div class="chart-item chart-70">
            </div>
          </div>
          <div class="tool-skill-name">Intelij</div>
        </div>
        <div class="tool-skill-item ">
          <div class="tool-skill-img">
            <img src="~/assets/img/toolskill/googleanalytics.png"/>
          </div>
          <div class="chart-block">
            <div class="chart-item chart-70">
            </div>
          </div>
          <div class="tool-skill-name">Googleanalytics</div>
        </div>
        <div class="tool-skill-item ">
          <div class="tool-skill-img">
            <img src="~/assets/img/toolskill/seo.png"/>
          </div>
          <div class="chart-block">
            <div class="chart-item chart-70">
            </div>
          </div>
          <div class="tool-skill-name">SEO</div>
        </div>
        <div class="tool-skill-item ">
          <div class="tool-skill-img">
            <img src="~/assets/img/toolskill/design.png"/>
          </div>
          <div class="chart-block">
            <div class="chart-item chart-80">
            </div>
          </div>
          <div class="tool-skill-name">UI/UXデザイン</div>
        </div>
        <div class="tool-skill-item">
          <div class="tool-skill-img">
            <img src="~/assets/img/toolskill/backlog.png"/>
          </div>
          <div class="chart-block">
            <div class="chart-item chart-80">
            </div>
          </div>
          <div class="tool-skill-name">Backlog</div>
        </div>

      </div>
    </div>
  </section>

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
      gsap.from('.fade-down2', {
        scrollTrigger: {
          trigger: ".fade-down2",
          scrub: true,
          start: "top 100%",
          end: "bottom 30%",
        },
        scale: 2,
        x: -10,
        opacity: 0,
        stagger: 0.13
      })
    },
  }
}
</script>

<style lang="scss" scoped>

.title {
  font-size: 4rem;
  margin-left: 5rem;
}

.tool-skill-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

  .chart-block {
    width: 80%;
    height: 1em;
    position: relative;
    margin: 0 auto;
    background-color: $white60;
    border-radius: 4px;
  }

  .chart-item {
    background-color: #26A0F8;
    left: 0;
    position: absolute;
    height: 1rem;
    border-radius: 4px;
  }

  .chart-100 {
    width: 100%;
  }

  .chart-90 {
    width: 90%;
  }

  .chart-80 {
    width: 80%;
  }

  .chart-70 {
    width: 70%;
  }

  .chart-60 {
    width: 60%;
  }

  .chart-50 {
    width: 50%;
  }

  .chart-40 {
    width: 40%;
  }

  .chart-30 {
    width: 30%;
  }

  .chart-20 {
    width: 20%;
  }

  .chart-10 {
    width: 10%;
  }

  .skill-wrap {
    max-width: 900px;
    margin: 4rem auto;
  }

  .tool-skill-block {

    &:before {
      content: "";
      display: block;
      width: 21.5%;
      order: 1;
    }

    &:after {
      content: "";
      display: block;
      width: 21.5%;
      order: 1;
    }
  }

  .tool-skill-item {
    width: 21.5%;
    margin-bottom: 1.5em;
    padding: 1.6em 0.8em 1.3em;
    text-align: center;
    font-weight: bold;
    border: solid 1px $white26;
    border-radius: 4px;
    box-shadow: 0 2px 4px -1px $black12;
    background: $black;
    text-decoration: none;
    transition: 0.2s;
    color: $white;

    &:hover {
      box-shadow: 0 10px 15px -5px $black12;
    }

    img {
      width: 100%;
    }

  }

  .tool-skill-img {
    width: 54px;
    height: 54px;
    overflow: hidden;
    margin: 0 auto 1em;
  }

  .tool-skill-name {
    line-height: 1.4;
    font-size: 0.95em;
    margin-top: .5rem;
  }

  .skills {
    padding-top: 11.25rem;
    height: 100%;
    position: relative;
    max-width: 1320px;
    margin: 0 auto;
    width: 100%;

    @include sp {
      padding-top: 58px;
    }
  }


</style>
