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
          ©Tomohisa Osawa All rights reserved.
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


      >.logo {
        width: 50%;

        img {
          width: 93px;
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

      &.lp {
        margin-top: 64px;
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
