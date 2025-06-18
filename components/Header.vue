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
        <li class="header-item"> <a href="https://github.com/osawa1177/nuxt-portfolio-site" target="_blank"
            rel="noopener noreferrer">
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_416_1723)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M16 0.985352C7.16 0.985352 0 8.14535 0 16.9854C0 24.0654 4.58 30.0454 10.94 32.1654C11.74 32.3054 12.04 31.8254 12.04 31.4054C12.04 31.0254 12.02 29.7654 12.02 28.4254C8 29.1654 6.96 27.4454 6.64 26.5454C6.46 26.0854 5.68 24.6654 5 24.2854C4.44 23.9854 3.64 23.2454 4.98 23.2254C6.24 23.2054 7.14 24.3854 7.44 24.8654C8.88 27.2854 11.18 26.6054 12.1 26.1854C12.24 25.1454 12.66 24.4454 13.12 24.0454C9.56 23.6454 5.84 22.2654 5.84 16.1454C5.84 14.4054 6.46 12.9654 7.48 11.8454C7.32 11.4454 6.76 9.80535 7.64 7.60535C7.64 7.60535 8.98 7.18535 12.04 9.24535C13.32 8.88535 14.68 8.70535 16.04 8.70535C17.4 8.70535 18.76 8.88535 20.04 9.24535C23.1 7.16535 24.44 7.60535 24.44 7.60535C25.32 9.80535 24.76 11.4454 24.6 11.8454C25.62 12.9654 26.24 14.3854 26.24 16.1454C26.24 22.2854 22.5 23.6454 18.94 24.0454C19.52 24.5454 20.02 25.5054 20.02 27.0054C20.02 29.1454 20 30.8654 20 31.4054C20 31.8254 20.3 32.3254 21.1 32.1654C27.42 30.0454 32 24.0454 32 16.9854C32 8.14535 24.84 0.985352 16 0.985352Z"
                  fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_416_1723">
                  <rect width="32" height="32" fill="white" transform="translate(0 0.985352)" />
                </clipPath>
              </defs>
            </svg>
          </a></li>

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
