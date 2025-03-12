<template>
  <div>
    <div class="outer" id="development">
      <div class="device">
        <div class="phone3">Development</div>
      </div>
      <div class="text">
        <h1>
          目を引く印象的な動きとユーザーエクスペリエンスを作成することにより、ユーザーとの最適な視覚的体験を構築します。
        </h1>
        <div class="home-services-details">
          <div class="home-service">
            <h3>ウェブサイトとプラットフォーム</h3>
            <p>
              クライアントのビジネスに合わせたWebサイトを構築します。お問い合わせに繋がるランディングページや複雑な管理画面などあらゆるパターンに対応します。
            </p>
          </div>
          <div class="home-service">
            <h3>レスポンシブデザイン</h3>
            <p>
              様々なデバイスに応じた最適なデザインの開発を行います。またデザイン性のみならず、運営側の視点から、サイトのメンテナンス性、更新性、またデバイス間を越えた効率的な分析を実現するためにも、それぞれのデバイスに最適なサイト構築を行います。
            </p>
          </div>
          <div class="home-service">
            <h3>ブランド戦略</h3>
            <p>
              クライアントの目的を達成するために、キャンペーンサイトや、アフェリエイト、バナーなど含めたグラフィックに至るまで各施策の方向性を統一し、一貫したコンセプト設計およびブランド戦略をサポートいたします。
            </p>
          </div>
          <div class="home-service text__last3">
            <h3>モダンな開発</h3>
            <p>
              インパクトを与えるアニメーションや、ユーザーが操作をわかりやすくするためのインタラクションの実装など様々な構築をご提案します。
            </p>
          </div>
        </div>
      </div>
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
      gsap.timeline({
        scrollTrigger: {
          trigger: ".phone3",
          start: "top 15%",
          end: "bottom 30%",
          endTrigger: ".text__last3",
          pin: ".phone3",
        },
      });
      const textTitles = [...document.querySelectorAll("h1")];

      textTitles.forEach((title, i) => {
        gsap.to(title, {
          opacity: 1,
          scrollTrigger: {
            trigger: title,
            start: "top 70%",
            end: "bottom 10%",
            scrub: true,
          },
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home-services-details {
  display: flex;
  flex-flow: row wrap;
  width: 90%;
  justify-content: space-between;

  @include sp {
    flex-direction: column;
    width: 45%;
  }
}

.home-service {
  flex: 0 0 45%;
  position: relative;
  min-height: 250px;
  box-sizing: border-box;
  line-height: 1.5;

  @include sp {
    min-height: 125px;
  }
}

.outer {
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  min-width: 861px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @include sp {
    flex-direction: column;
  }
}

.device {
  width: 100%;
  height: 100vh;
  display: flex;
  margin-bottom: 20rem;
  margin-left: -5%;
}

.phone3 {
  margin: 10rem auto;
  height: 80%;
  width: 80%;
  background-size: contain;
  font-size: 4rem;
  font-weight: 500;

  @include sp {
    font-size: 3.5rem;
    padding: 0 !important;
  }
}

.text {
  width: 100%;
  height: 100vh;
  line-height: 1.1;

  @include sp {
    padding: 16px;
  }
}

.text h1 {
  opacity: 0;
  width: 90%;
  font-size: 24px;
  line-height: 1.5;
  font-weight: 600;
  margin-bottom: 56px;

  @include sp {
    width: 45%;
    margin: 0;
  }
}

.home-service h3 {
  font-size: 20px;
  font-weight: 500;
  color: $blue400;
  margin: 0 0 16px;
  height: 56px;
}

.home-service p {
  line-height: 1.6;
  font-size: 16px;
  line-height: 1.6;
}
</style>
