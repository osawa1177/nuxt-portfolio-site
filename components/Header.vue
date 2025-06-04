<template>
  <header class="header">
    <nuxt-link to="/" class="header-logo">
      <span class="header-logo-img site-title">
        <img src="~/assets/img/logo.svg" />
      </span>
    </nuxt-link>
    <div class="container">
      <ul class="header-menu">
        <li class="header-item"><nuxt-link to="/#services" class="header-link">SERVICE</nuxt-link></li>
        <li class="header-item"><nuxt-link to="/#design" class="header-link">DESIGN</nuxt-link></li>
        <li class="header-item"><nuxt-link to="/#development" class="header-link">DEVELOPMENT</nuxt-link></li>
        <li class="header-item"><nuxt-link to="/projects" class="header-link">PROJECTS</nuxt-link></li>
        <li class="header-item"><nuxt-link to="/#tool-skill" class="header-link">TOOL & SKILL</nuxt-link></li>
        <li class="header-item"><nuxt-link to="/contact" class="header-btn">
            <span class="button-caption">相談・お問い合わせ</span>
          </nuxt-link></li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.site-title {
  transition: width 0.25s ease-in-out 0.05s;

  img {
    width: 63px;
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

.header-btn {
  padding: 10px 23px;
  background-color: #26A0F8;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 14px;
  transition: .3s;

  &:hover {
    transform: scale(1.1);
  }
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
  height: 74px;

  @include sp {
    flex-direction: column;
  }
}

.header-logo {
  position: absolute;
  left: 80px;
  top: 13px;

  @include sp {
    left: 8px;
  }
}

.header-logo-img,
.header-logo-text {
  position: absolute;
  top: 0;
  left: 0;
  transition: all .5s
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
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all .5s;
  opacity: 1;
  transform: none;
  position: relative;
  gap: 32px;
  margin: 0 32px 0px 0px;

  @include sp {
    display: none;
  }
}

.button-inner {
  padding: 8px 32px;
}
</style>
