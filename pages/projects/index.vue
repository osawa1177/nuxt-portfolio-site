<template>
  <main>
    <div class="c-container">
      <div class="c-page__title">
        <span class="c-page__headline">Latest projects</span>
        <h1 class="c-page__content">これまでに携わったProjectsで作成した、Webサイトやアプリのデザインの一部をご覧ください。</h1>
      </div>
      <div class="p-projects__list-grid">
        <div class="p-projects__project p-projects__project-active" v-for="project in projects">
          <a :href="project.link" target="_blank" class="p-projects__project-link"></a>
          <div class="p-projects__project-image">
            <div class="p-projects__project-wrap">
              <img :src="project.image">
            </div>
          </div>
          <div class="p-projects__project-details">
            <div class="p-projects__project-description">{{ project.description }}</div>
            <div class="p-projects__project-tags">
              <span class="project__tag">{{ project.tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  data() {
    return {
      projects: [
        {
          link: "https://dribbble.com/shots/15091099-LiveMasq-app",
          description: "LiveMasqはリアルタイムにモザイクをかけることができるアプリです。",
          image: require("@/assets/img/livemasq-app.png"),
          tag: "IOSアプリ"
        },
        {
          link: "https://dribbble.com/shots/14141834-Neumorphism-notification",
          description: "AutoPixelationは自動で人物の顔を検出し、モザイクを編集ができるWebアプリです。",
          image: require("@/assets/img/auto-pixelation-app.png"),
          tag: "Webアプリ"
        },
        {
          link: "https://dribbble.com/shots/14042005-Emotion-vide-chat-app",
          description: "表示されている顔の表情から、各個人の楽しい表情や悲しい表情など様々な感情をグラフで確認できるビデオチャットWebアプリです\n。",
          image: require("@/assets/img/videochat-web-app.png"),
          tag: "Webアプリ",
        },
        {
          link: "https://dribbble.com/shots/14044798-Construction-management-app",
          description: "職人さん達が現場で進行状況などを管理するWebアプリです。fixしませんでしたが、初めに作成したLogin周りのデザインを載せています。",
          image: require("@/assets/img/login-view.png"),
          tag: "Webアプリ",
        }
      ],
    }
  },

  mounted() {
    this.projectsItem
  },

  methods: {
    projectsItem() {
      gsap.to(".p-projects__project-active", {
        opacity: 1,
        scrollTrigger: {
          trigger: ".p-projects__project-active",
          start: "top 70",
          end: "bottom 10",
          scrub: "true",
        }
      });
    },

  }
}

</script>

