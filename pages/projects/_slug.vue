<template>
  <div v-if="project && project.show">
    <div class="bgLight">
      <!-- ... -->
    </div>
    <Breadcrumb :custom="breadcrumbs" />
    <div class="title-wrap">
      <h1>{{ project.project_title }}</h1>
      <p>{{ project.client }}</p>
    </div>
    <div class="c-page__main-img">
      <img :src="require(`~/assets/img/projects/${project.main_img}`)" alt="Project Image">
    </div>

    <!-- money-seminarとpay専用 -->
    <template v-if="project.slug === 'rakuten-money-seminar' || project.slug === 'pay'">
      <!-- money-seminarとpay専用の全セクション（summary-section, sectionsなど）をここに -->
      <div class="summary-section" v-if="project.summary_section">
        <div v-for="(item, i) in project.summary_section" :key="i" class="summary-block">
          <div class="summary-label">{{ item.label }}</div>
          <div class="summary-text" v-html="item.text.replace(/\\n/g, '<br>')"></div>
        </div>
      </div>
      <section v-for="(section, i) in project.sections" :key="i" :class="[
        'project-section',
        section.img && section.imgPosition === 'right' ? 'reverse' : '',
        section.img && section.imgPosition === 'center' ? 'center' : ''
      ]">
        <div v-if="section.img" class="section-img">
          <img :src="require(`~/assets/img/projects/${section.img}`)" :alt="section.title" />
        </div>
        <div class="section-text">
          <div class="section-no">{{ section.no }}</div>
          <h2>{{ section.title }}</h2>
          <div v-html="section.text.replace(/\\n/g, '<br>')"></div>
        </div>
      </section>
    </template>

    <!-- その他のプロジェクト用（共通） -->
    <template v-else>
      <div class="c-container">
        <div class="c-page__block">
          <span class="c-page__headline">Client</span>
          {{ project.client }}
        </div>
        <div class="c-page__block">
          <span class="c-page__headline">Service</span>
          {{ project.service }}
        </div>
        <div class="c-page__block">
          <span class="c-page__headline">Deliverable</span>
          {{ project.deliverable }}
        </div>
      </div>
      <div class="content">
        <p class="c-page__data">{{ project.data }}</p>
        <span class="c-page__headline">project</span>
        <h2 class="c-page__project-title">{{ project.title }}</h2>
        <p class="c-page__project-text"><span>- 役割:</span><br>{{ project.project_role }}</p>
        <p class="c-page__project-text"><span>- 目的:</span><br>{{ project.purpose }}</p>
        <p class="c-page__project-text"><span>- 内容:</span><br>{{ project.content }}</p>
        <p class="c-page__project-text"><span>- プロジェクトの期間:</span><br>{{ project.term }}</p>
        <p class="c-page__project-text"><span>- プロジェクトの場所:</span><br>{{ project.location }}</p>
      </div>
      <div class="c-page__img">
        <img :src="require(`~/assets/img/projects/${project.img_01}`)" alt="Project Image">
      </div>
      <div class="content">
        <span class="c-page__headline">initiative</span>
        <h2 class="c-page__project-title">取り組み</h2>
        <p class="c-page__project-text-list"><span>- 具体的な取り組み:</span></p>
        <ul class="c-page__project-text-ul">
          <li v-for="point in project.key_points" :key="point">{{ point }}</li>
        </ul>
        <p class="c-page__project-text-list"><span>- 成果:</span></p>
        <ul class="c-page__project-text-ul">
          <li v-for="results in project.result" :key="results">{{ results }}</li>
        </ul>
        <p class="c-page__project-text-list"><span>- 今後の展望:</span></p>
        <ul class="c-page__project-text-ul">
          <li v-for="views in project.view" :key="views">{{ views }}</li>
        </ul>
      </div>
    </template>
    <div class="contact-wrap">
      <ContactForm />
    </div>
    <OtherProjects :projects="otherProjects" />
  </div>
  <div v-else>
    <p>プロジェクトが見つかりません。</p>
  </div>
</template>

<script>
import OtherProjects from "~/components/Projects/OtherProjects.vue";
import projects from "~/data/projects.json";
import Breadcrumb from "~/components/Breadcrumb.vue";

export default {
  components: {
    OtherProjects,
    Breadcrumb,
  },
  async asyncData({ params }) {
    const project = projects.find((proj) => proj.slug === params.slug);
    const otherProjects = projects.filter((proj) => proj.slug !== params.slug);
    const breadcrumbs = [
      { text: "TOP", path: "/" },
      { text: "プロジェクト一覧", path: "/projects" },
      { text: project?.title || "", path: `/projects/${params.slug}` },
    ];
    return { project, otherProjects, breadcrumbs };
  },
  head() {
    return {
      title: this.project?.title
        ? `${this.project.title} | ポートフォリオ`
        : 'プロジェクト | ポートフォリオ'
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/foundation/_bglight.scss";

h1 {
  line-height: 1.3;
  font-size: 44px;
  margin-bottom: 24px;
}

.title-wrap {
  max-width: 1100px;
  margin: 56px auto;
}

.c-page__main-img {
  padding: 0;
  width: 100%;
    max-width: 1100px;
    text-align: center;
    background: none;

    img {
      display: block;
      margin: 0;
      padding: 0;
      width: 100%;
      max-width: 100%;
      height: auto;
    }
  }

  .project-section {
    display: flex;
    align-items: flex-start;
    gap: 56px;
    max-width: 1100px;
    margin: 56px auto;

    .section-img {
      flex: 1.2;

      img {
        width: 100%;
        display: block;
        margin: 0 auto;
      }
    }

    .section-text {
      flex: 0.97;
      color: var(--text);
      font-size: 16px;
      font-weight: 500;
      line-height: 180%;
      letter-spacing: 1.04px;

      .section-no {
        color: #26a0f8;
        font-weight: bold;
        font-size: 1.2em;
        margin-bottom: 8px;
      }

      h2 {
        font-size: 1.4em;
        margin-bottom: 16px;
        font-weight: 700;
      }

      p {
        color: var(--text);
        font-size: 18px;
        font-weight: 500;
        line-height: 180%;
        letter-spacing: 1.04px;
      }
    }

    &.reverse {
      flex-direction: row-reverse;
    }
&.center {
  flex-direction: column;
  align-items: center;
  gap: 32px;
}
}

@media (max-width: 768px) {

  .project-section,
  .project-section.reverse {
    flex-direction: column !important;
    gap: 16px;

    .section-img,
    .section-text {
      width: 100%;
      max-width: none;
    }
  }
}

.summary-section {
  margin: 0px auto 72px;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.summary-label {
  color: #26a0f8;
  font-weight: bold;
  font-size: 1.1em;
  margin-bottom: 8px;
}

.summary-text {
  color: var(--text);
  font-size: 16px;
  line-height: 1.8;
  margin-left: 0;

  .summary-block {
    border-bottom: 1px solid #303030;
    padding-bottom: 16px;
  }
}

.content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 6.5rem;
  box-sizing: border-box;
  width: 100%;
  text-align: left;

  @include sp {
    flex-direction: column;
    padding: 0 16px;
    font-size: 16px;
  }
}

.c-page__main-img {
  margin: 0 auto 40px;
    text-align: center;
    box-sizing: border-box;
    width: 100%;

    img {
      max-width: 1100px;
      width: 100%;
    }

    @include sp {
      padding: 0 16px;

      img {
        width: 100%;
      }
    }
  }

  .c-page__container {
    max-width: 1100px;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;

    @include sp {
      padding: 0 16px;
    }
  }

  .c-container {
    max-width: 1100px;
    padding: 0 6.5rem;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 40px auto;
    padding-bottom: 24px;

    @include sp {
      flex-direction: column;
      padding: 0 16px;
      gap: 8px;
      margin: 16px auto;
    }
  }

  .c-page__content {
    @include sp {
      font-size: 24px;
    }
  }

  .c-page__block {
    display: flex;
    flex-direction: column;
    font-size: 24px;

    @include sp {
      font-size: 16px;
    }
  }

  .c-page__data {
    font-size: 24px;

    @include sp {
      font-size: 20px;
    }
  }

  .c-page__title {
    font-size: 28px;
  }

  .c-page__project-title {
    font-size: 28px;
    margin-top: 8px;

    @include sp {
      font-size: 20px;
      margin: 8px 0;
    }
  }

  .c-page__project-text {
    font-size: 16px;
    color: var(--text);
  }

  .c-page__img {
    margin: 40px auto;
    max-width: 918px;
    box-sizing: border-box;

    img {
      max-width: 918px;
      width: 100%;
      padding: 0 16px;
    }
  }

  .c-page__project-text-list {
    font-size: 16px;
    color: var(--text);
    margin-bottom: 0;
  }

  .content ul {
    font-size: 16px;
    list-style: disc;
    padding-left: 16px;
    line-height: 1.85;
    color: var(--text);
  }

  .c-page {
    &__contact-title {
      padding: 40px 0 24px;
      max-width: 1100px;
      margin: 0 auto;
      box-sizing: border-box;
      width: 100%;

      @include sp {
        padding: 0 16px;
      }
    }

    &__headline {
      @include sp {
        margin: 0;
        font-size: 12px;
        line-height: 1;
      }
    }
}
.contact-wrap {
  margin: 72px auto;
}
</style>
