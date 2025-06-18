<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__inner__top">
        <div class="logo">
          <nuxt-link to="/" class="link">
            <img src="~/assets/img/logo.svg" />
          </nuxt-link>
        </div>
        <div class="nav">
          <ul class="list">
            <li><nuxt-link to="/#services" class="link">SERVICE</nuxt-link></li>
            <li><nuxt-link to="/#design" class="link">DESIGN</nuxt-link></li>
            <li><nuxt-link to="/#development" class="link">DEVELOPMENT</nuxt-link></li>
            <li><nuxt-link to="/projects" class="link">PROJECTS</nuxt-link></li>
            <li><nuxt-link to="/#tool-skill" class="link">TOOL & SKILL</nuxt-link></li>
          </ul>
          <div class="banners-box">
            <ul class="list">
              <li>
                <nuxt-link to="/contact" class="link --contact">相談・お問い合わせ</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__inner__bottom">
        <div class="footer__inner__copyright-box">
          <p>©Tomohisa Osawa All rights reserved.</p>
          <div>
            <a href="https://github.com/osawa1177/nuxt-portfolio-site" target="_blank" rel="noopener noreferrer">
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
            </a>
            <a href="https://osawa1177.github.io/nuxt-portfolio-site/?path=/story/article-articlelist--default"
              target="_blank">
              <svg width="130px" height="40px" viewBox="0 0 200 40" class="css-173of3" role="img">
                <title>Storybook</title>
                <defs>
                  <path
                    d="M1.2 36.9L0 3.9c0-1.1.8-2 1.9-2.1l28-1.8a2 2 0 0 1 2.2 1.9 2 2 0 0 1 0 .1v36a2 2 0 0 1-2 2 2 2 0 0 1-.1 0L3.2 38.8a2 2 0 0 1-2-2z"
                    id="a"></path>
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M53.3 31.7c-1.7 0-3.4-.3-5-.7-1.5-.5-2.8-1.1-3.9-2l1.6-3.5c2.2 1.5 4.6 2.3 7.3 2.3 1.5 0 2.5-.2 3.3-.7.7-.5 1.1-1 1.1-1.9 0-.7-.3-1.3-1-1.7s-2-.8-3.7-1.2c-2-.4-3.6-.9-4.8-1.5-1.1-.5-2-1.2-2.6-2-.5-1-.8-2-.8-3.2 0-1.4.4-2.6 1.2-3.6.7-1.1 1.8-2 3.2-2.6 1.3-.6 2.9-.9 4.7-.9 1.6 0 3.1.3 4.6.7 1.5.5 2.7 1.1 3.5 2l-1.6 3.5c-2-1.5-4.2-2.3-6.5-2.3-1.3 0-2.3.2-3 .8-.8.5-1.2 1.1-1.2 2 0 .5.2 1 .5 1.3.2.3.7.6 1.4.9l2.9.8c2.9.6 5 1.4 6.2 2.4a5 5 0 0 1 2 4.2 6 6 0 0 1-2.5 5c-1.7 1.2-4 1.9-7 1.9zm21-3.6l1.4-.1-.2 3.5-1.9.1c-2.4 0-4.1-.5-5.2-1.5-1.1-1-1.6-2.7-1.6-4.8v-6h-3v-3.6h3V11h4.8v4.6h4v3.6h-4v6c0 1.8.9 2.8 2.6 2.8zm11.1 3.5c-1.6 0-3-.3-4.3-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.3-1 1.7 0 3.2.3 4.4 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.4 1zm0-3.6c2.4 0 3.6-1.6 3.6-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.6-1c-2.3 0-3.5 1.4-3.5 4.4 0 3 1.2 4.6 3.5 4.6zm21.7-8.8l-2.7.3c-1.3.2-2.3.5-2.8 1.2-.6.6-.9 1.4-.9 2.5v8.2H96V15.7h4.6v2.6c.8-1.8 2.5-2.8 5-3h1.3l.3 4zm14-3.5h4.8L116.4 37h-4.9l3-6.6-6.4-14.8h5l4 10 4-10zm16-.4c1.4 0 2.6.3 3.6 1 1 .6 1.9 1.6 2.5 2.8.6 1.2.9 2.7.9 4.3 0 1.6-.3 3-1 4.3a6.9 6.9 0 0 1-2.4 2.9c-1 .7-2.2 1-3.6 1-1 0-2-.2-3-.7-.8-.4-1.5-1-2-1.9v2.4h-4.7V8.8h4.8v9c.5-.8 1.2-1.4 2-1.9.9-.4 1.8-.6 3-.6zM135.7 28c1.1 0 2-.4 2.6-1.2.6-.8 1-2 1-3.4 0-1.5-.4-2.5-1-3.3s-1.5-1.1-2.6-1.1-2 .3-2.6 1.1c-.6.8-1 2-1 3.3 0 1.5.4 2.6 1 3.4.6.8 1.5 1.2 2.6 1.2zm18.9 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.3 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm18 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.4 1a7 7 0 0 1 2.9 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm27.4 3.4h-6l-6-7v7h-4.8V8.8h4.9v13.6l5.8-6.7h5.7l-6.6 7.5 7 8.2z"
                    fill="currentColor"></path>
                  <mask id="b" fill="#fff">
                    <use xlink:href="#a"></use>
                  </mask>
                  <use fill="#FF4785" fill-rule="nonzero" xlink:href="#a"></use>
                  <path
                    d="M23.7 5L24 .2l3.9-.3.1 4.8a.3.3 0 0 1-.5.2L26 3.8l-1.7 1.4a.3.3 0 0 1-.5-.3zm-5 10c0 .9 5.3.5 6 0 0-5.4-2.8-8.2-8-8.2-5.3 0-8.2 2.8-8.2 7.1 0 7.4 10 7.6 10 11.6 0 1.2-.5 1.9-1.8 1.9-1.6 0-2.2-.9-2.1-3.6 0-.6-6.1-.8-6.3 0-.5 6.7 3.7 8.6 8.5 8.6 4.6 0 8.3-2.5 8.3-7 0-7.9-10.2-7.7-10.2-11.6 0-1.6 1.2-1.8 2-1.8.6 0 2 0 1.9 3z"
                    fill="#FFF" fill-rule="nonzero" mask="url(#b)"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
.footer__post {
  margin: 100px 0 0 0;
  width: 100%;

  &__inner {
    margin: auto;
    width: 100%;
    max-width: 1100px;

    >.posts-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 40px;

      >.post-box {
        margin: 0;
        padding: 60px 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #121212;
        position: relative;
        transition: all 0.25s ease-in-out;

        >.title {
          font-size: 40px;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #121212;
          transition: all 0.25s ease-in-out;
        }

        >.desc {
          margin: 8px 0 0 0;
          font-size: 16px;
          line-height: 1.7;
          letter-spacing: 0.02em;
          font-feature-settings: "pkna" on;
          color: #121212;
          transition: all 0.25s ease-in-out;
        }

        &::before {
          margin: auto;
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 80px;
          height: 80px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-image: url('data: image/svg+xml;utf8,<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="rgb(234, 56, 0)" /><circle cx="40" cy="40" r="2.5" fill="white" stroke="white" stroke-width="2" /></svg>');
          transition: all 0.25s ease-in-out;
        }

        &:hover {
          border-bottom: 1px solid #26A0F8;

          >.title {
            color: #26A0F8;
          }

          >.desc {
            color: #26A0F8;
          }

          &::before {
            background-image: url('data: image/svg+xml;utf8,<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="rgb(234, 56, 0)" /><path fill-rule="evenodd" clip-rule="evenodd" d="M44.1667 33.3333C44.1667 36.553 46.7802 39.1666 50 39.1666V40.8333C46.7802 40.8333 44.1667 43.4468 44.1667 46.6666H42.5C42.5 44.3113 43.5873 42.2085 45.2871 40.8333H30V39.1666H45.2871C43.5873 37.7913 42.5 35.6886 42.5 33.3333H44.1667Z" fill="white" /></svg>');
          }
        }
      }
    }
  }
}

.footer__contact {
  margin: 40px 0;
  width: 100%;

  &__inner {
    margin: auto;
    width: 100%;
    max-width: 1100px;

    >.contacts-box {
      margin: auto;
      width: 100%;
      display: flex;
      justify-content: space-between;

      &.--wide {
        width: 100%;
      }

      >.title {
        font-size: 36px;
        line-height: 160%;
        letter-spacing: 0.02em;
        font-feature-settings: "pkna" on;
        color: #121212;
        transition: all 0.25s ease-in-out;
      }

      >.desc {
        margin: 16px 0 0 0;
        font-size: 16px;
        line-height: 160%;
        letter-spacing: 0.02em;
        font-feature-settings: "pkna" on;
        color: #121212;
        transition: all 0.25s ease-in-out;
      }

      &::before {
        margin: auto;
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 80px;
        height: 80px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('data: image/svg+xml;utf8,<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="rgb(234, 56, 0)" /><circle cx="40" cy="40" r="2.5" fill="white" stroke="white" stroke-width="2" /></svg>');
        transition: all 0.25s ease-in-out;
      }

      &:hover {
        border-bottom: 1px solid #26A0F8;

        >.title {
          color: #26A0F8;
        }

        >.desc {
          color: #26A0F8;
        }

        &::before {
          background-image: url('data: image/svg+xml;utf8,<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="rgb(234, 56, 0)" /><path fill-rule="evenodd" clip-rule="evenodd" d="M44.1667 33.3333C44.1667 36.553 46.7802 39.1666 50 39.1666V40.8333C46.7802 40.8333 44.1667 43.4468 44.1667 46.6666H42.5C42.5 44.3113 43.5873 42.2085 45.2871 40.8333H30V39.1666H45.2871C43.5873 37.7913 42.5 35.6886 42.5 33.3333H44.1667Z" fill="white" /></svg>');
        }
      }
    }
  }
}


.footer {
  margin-top: 72px;
  padding-top: 72px;
  width: 100%;
  position: relative;
  z-index: 2;
  background: #121212;

  @include sp {
    margin-top: 32px;
    padding-top: 32px;
  }

  &.lp {
    margin: 0;
    padding: 64px 0 40px 0;
  }

  &__inner {
    margin: auto;
    width: 100%;
    max-width: 1100px;

    &__top {
      width: 100%;
      display: flex;
      justify-content: space-between;

      @include sp {
        flex-direction: column;
        margin: 0 16px;
      }

      >.logo {
        width: 50%;

        img {
          width: 93px;

          @include sp {
            width: 62px;
            padding-bottom: 16px;
          }
        }

        &.lp {
          width: 100%;
          text-align: center;
        }

        >.link {
          display: block;

          >.image {
            width: 240px;
            height: 39px;
          }
        }
      }

      >.nav {
        width: 43%;
        display: flex;
        justify-content: space-between;

        @include sp {
          flex-direction: column;
        }

        >.list {
          width: auto;
          list-style: none;

          >li {
            margin-bottom: 8px;

            >.link {
              display: flex;
              font-size: 14px;
              line-height: 1.7;
              color: #ffffff;
              transition: all 0.25s ease-in-out;

              &:hover {
                color: #26A0F8;
              }
            }

            &:last-of-type {
              margin-bottom: 0;
            }
          }
        }

        >.banners-box {
          width: 200px;

          >.list {
            >li {
              margin-bottom: 16px;

              >.link {
                width: 100%;
                padding: 8px;
                display: flex;
                font-size: 16px;
                line-height: 160%;
                color: #ffffff;
                background: #26A0F8;
                border-radius: 100px;
                position: relative;
                background: #26A0F8;
                border: 1px solid #26A0F8;
                transition: all 0.25s ease-in-out;
                justify-content: center;

                &:hover {
                  background: #fff;
                  color: #26A0F8;

                  &::after {
                    width: 20px;
                    height: 20px;
                    border: 0;
                  }
                }
              }

              &:last-of-type {
                margin-bottom: 0;
              }
            }
          }
        }
      }
    }

    &__copyright-box {
      margin-top: 100px;
      padding-top: 40px;
      width: 100%;
      font-size: 12px;
      line-height: 14px;
      color: #fff;
      letter-spacing: -0.02em;
      text-align: left;
      border-top: 1px solid #666666;
      padding-bottom: 40px;
      display: flex;
        justify-content: space-between;
        align-items: center;

        @include sp {
          margin: 0 16px;
        }

        &.lp {
          margin-top: 64px;
        }

        p {
          margin-bottom: 0;
        }

        div {
          display: flex;
          gap: 24px;
          align-items: center;
        }
    }

    &__bottom {
      position: relative;
    }

    &__sublist-box {
      position: absolute;
      display: flex;
      right: 0;
      bottom: 0;
      gap: 30px;

      li {
        a {
          color: #fff;
          font-size: 12px;
          margin-bottom: 1em;
        }
      }
    }
  }
}

ul {
  list-style: none;
}
</style>
