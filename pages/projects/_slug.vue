<template>
  <div v-if="project && project.show">
    <div class="bgLight">
      <div class="bgLight__pos bgLight__one"></div>
      <div class="bgLight__pos bgLight__two"></div>
      <div class="bgLight__pos bgLight__three"></div>
    </div>
    <div class="c-page__container">
      <div class="c-page__title">
        <span class="c-page__headline">Latest projects</span>
        <h1 class="c-page__content">これまでに携わったProjectsで作成したWebサイトやアプリのデザインです。</h1>
      </div>
    </div>
    <div class="c-page__main-img">
      <img :src="`/img/${project.main_img}`" alt="Project Image">
    </div>
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
      <img :src="`/img/${project.img_01}`" alt="Project Image">
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


  </div>
  <div v-else>
    <p>プロジェクトが見つかりません。</p>
  </div>
</template>

<script>
export default {
  async asyncData({params}) {
    const projects = await fetch('/content/projects.json')
      .then(res => res.json())
      .catch(() => []);
    const project = projects.find(proj => proj.slug === params.slug);
    return {project};
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/foundation/_bglight.scss';

.content {
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 6.5rem;
  box-sizing: border-box;
  width: 100%;

  @include sp {
    font-size: 20px;
  }
}

.c-page__title {
  padding: 20vh 0 3.2rem;
}

.c-page__main-img {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 6.5rem;
  box-sizing: border-box;
  width: 100%;

  @include sp {
    padding: 0 16px;

    img {
      width: 100%;
    }
  }
}

.c-page__container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 6.5rem;
  box-sizing: border-box;
  width: 100%;

  @include sp {
    padding: 0 16px;
  }
}

.c-container {
  max-width: 1138px;
  padding: 0 6.5rem;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 40px auto;
  border-bottom: 1px solid #ccc;
  padding-bottom: 82px;
}

.c-page__block {
  display: flex;
  flex-direction: column;
  font-size: 24px;
}

.c-page__data {
  font-size: 24px;
}

.c-page__title {
  font-size: 28px;
}

.c-page__project-title {
  font-size: 28px;
  margin-top: 8px;
}

.c-page__project-text {
  font-size: 16px;
  color: #aaa;
}

.c-page__img {
  margin: 40px auto;
  max-width: 810px;
  box-sizing: border-box;
}
.c-page__project-text-list {
  font-size: 16px;
  color: #aaa;
  margin-bottom: 0;
}
.content ul {
  font-size: 16px;
  list-style: disc;
  padding-left: 16px;
  line-height: 1.85;
  color: #aaa;
}
</style>
