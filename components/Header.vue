<template>
  <header class="header">
    <a href="#" class="header-logo">
      <span class="header-logo-img site-title"><img src="~/assets/img/logo.svg"/></span>
    </a>
    <div class="container">
      <ul class="header-menu">
        <li class="header-item"><a href="/#services" class="header-link">Services</a></li>
        <li class="header-item"><a href="/#design" class="header-link">Design</a></li>
        <li class="header-item"><a href="/#development" class="header-link">Development</a></li>
        <li class="header-item"><nuxt-link to="/projects" class="header-link">Projects</nuxt-link></li>
        <li class="header-item"><a href="/#tool-skill" class="header-link">Tool & Skill</a></li>
      </ul>
    </div>
  </header>
</template>

<script></script>

<style lang="scss" scoped>

.site-title {
  transition: width 0.25s ease-in-out 0.05s;


  img {
    width: 100px;
    height: 70px;
  }

}

.header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 100vw;
  transition: all .5s;
  z-index: 10
}

.header:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px)
}

.header .container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100px
}


.header-logo {
  position: absolute;
  left: 80px;
  top: 13px;
  width: 40px;
  height: 40px;
  z-index: 10
}

.header-logo-img, .header-logo-text {
  position: absolute;
  top: 0;
  left: 0;
  transition: all .5s
}


.header-item {
  margin-left: 3rem
}

.header-link {
  font-weight: 500;
  padding: .5rem;
  position: relative;
  color: #fff;
}

.header-link:hover {
  color: rgba(255, 255, 255, 0.5);
  width: calc(100% - 1rem)

}

.header-link:before {
  position: absolute;
  left: .5rem;
  width: 0;
  bottom: 3px;
  height: 2px;
  content: "";
  transition: all .5s
}

.header-link:hover:before {
  background: #fff
}

.header-theme label {
  padding: 6px;
  width: 24px;
  height: 14px;
  display: block;
  position: relative
}

.header-theme label:before {
  position: absolute;
  left: 6px;
  top: 6px;
  content: "";
  width: 24px;
  height: 14px;
  border-radius: 7px;
  transition: background .5s
}

.header-menu {
  list-style-type: none;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all .5s;
  opacity: 1;
  transform: none;
  margin: 0 80px 0 0;
  position: relative;
}


</style>
