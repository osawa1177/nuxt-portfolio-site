<template>
  <div v-if="project && project.show">
    <div class="bgLight">
      <div class="bgLight__pos bgLight__one"></div>
      <div class="bgLight__pos bgLight__two"></div>
      <div class="bgLight__pos bgLight__three"></div>
    </div>
    <Breadcrumb :custom="breadcrumbs" />
    <div class="title-wrap">
      <h1> {{ project.project_title }}</h1>
      <p> {{ project.client }}</p>
    </div>
    <div class="c-page__main-img">
      <img :src="require(`~/assets/img/projects/${project.main_img}`)" alt="Project Image">
    </div>

    <div class="summary-section" v-if="project.summary_section">
      <div v-for="(item, i) in project.summary_section" :key="i" class="summary-block">
        <div class="summary-label">{{ item.label }}</div>
        <div class="summary-text" v-html="item.text.replace(/\\n/g, '<br>')"></div>
      </div>
    </div>

    <section v-for="(section, i) in project.sections" :key="i"
      :class="['project-section', section.img && section.imgPosition === 'right' ? 'reverse' : '']">
      <div v-if="section.img" class="section-img">
        <img :src="require(`~/assets/img/projects/${section.img}`)" :alt="section.title" />
      </div>
      <div class="section-text">
        <div class="section-no">{{ section.no }}</div>
        <h2>{{ section.title }}</h2>
        <div v-html="section.text.replace(/\\n/g, '<br>')"></div>
      </div>
    </section>

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
  margin: -100px auto 0;
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
            color: #d8d8d8;
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
              color: #ccc;
              font-size: 18px;
              font-weight: 500;
              line-height: 180%;
              letter-spacing: 1.04px;
            }
          }
        
          &.reverse {
            flex-direction: row-reverse;
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
          color: #d8d8d8;
          font-size: 16px;
          line-height: 1.8;
          margin-left: 0;
  }

.summary-block {
  border-bottom: 1px solid #303030;
  padding-bottom: 16px;
}
</style>
