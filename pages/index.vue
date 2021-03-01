<template>

  <div class="content__hero">
    <section class="section hero">
      <div class="container">
        <h1>
          <a href="/services/#design" class="underlined underlined-angular hero-design">Design.</a>
          <a href="/services/#development" class="underlined underlined-dashed hero-development">Development.</a>
          <div class="hero-overlay">
            <video src="~/assets/video/design.mp4" muted="muted" autoplay="autoplay" playsinline="" loop="loop" class="hero-video hero-video-design"></video>
            <span class="hero-background hero-background-design"></span> <span class="hero-background hero-background-development"></span> <span class="hero-background hero-background-maintenance"></span></div>
        </h1>
      </div>
    </section>

    <ios/>
    <ios-sample/>
  </div>


</template>
<script>

</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 2rem;
  line-height: 130%;
  font-size: 3.5rem;
}

</style>
