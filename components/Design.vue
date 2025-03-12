<template>
  <div>
    <div class="outer" id="design">
      <div class="device">
        <div class="phone">Design</div>
      </div>
      <div class="text">
        <h1>
          記憶に残るデザインと有効なユーザー体験をデザインすることで、ユーザーとの最適なアプローチを確立します。
        </h1>
        <div class="home-services-details">
          <div class="home-service">
            <h3>ウェブサイトとプラットフォーム</h3>
            <p>
              様々な規模のプロジェクトをデザインしています。シンプルなシングルページのウェブサイトであっても、多数のダッシュボードを備えた複雑な管理パネルなど、視覚的に美しく、一貫性があり、ユーザーフレンドリーなWebサイトを作成します。
            </p>
          </div>
          <div class="home-service">
            <h3>モバイルアプリケーション</h3>
            <p>
              単に美しいインターフェースをデザインするのではなく、各プラットフォームのガイドラインに沿って、ユーザーが直感的にアプリを利用できるように工夫しています。
            </p>
          </div>
          <div class="home-service">
            <h3>サービス全体のブランディング</h3>
            <p>
              ロゴ、コーポレートサイト、ランディングページ、各種モックアップ、スタイルガイドなどを開発し、サービス全体を通してブランディングしていきます。
            </p>
          </div>
          <div class="home-service text__last">
            <h3>デザインシステム</h3>
            <p>
              サイトやモバイルアプリのデザインシステムを作って、デザインの保守性や一貫性がある、デザインをさらに素晴らしいものにしていきます。
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
          trigger: ".phone",
          start: "top 15%",
          end: "bottom 30%",
          endTrigger: ".text__last",
          pin: true,
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
            toggleClass: {
              targets: ".phone",
              className: `phone${i - 1}`,
            },
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
    margin-top: -40px;
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
  margin-left: -5%;
}

.phone {
  margin: 1rem auto;
  height: 80%;
  width: 80%;
  background-size: contain;
  font-size: 4rem;
  font-weight: 500;
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
