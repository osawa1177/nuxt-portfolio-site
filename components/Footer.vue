<template>
  <footer class="section footer section-active">
    <div class="container">
      <div class="footer-contacts">
        <div class="row row-smallpadding">
          <div class="col col-25 col-mobile-50">Services
            <div><a href="#design" class="lined">Design</a></div>
            <div><a href="#development" class="lined">Development</a></div>
            <div><a href="#projects" class="lined">Projects</a></div>
            <div><a href="#tool-skill" class="lined">Tool & Skill</a></div>
          </div>
          <div class="col col-25 col-mobile-50">Email
            <div><a href="mailto:osawa.tomohisa07@gmail.com" target="_blank" class="lined">osawa.tomohisa07@gmail.com</a>
            </div>
          </div>
          <div class="col col-25 col-mobile-50">Location
            <div class="lined">東京都</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-smallpadding footer-bottom">
        <div class="footer-copy">© 2021 © Tomohisa Osawa All rights reserved.</div>
        </div>
  </footer>
</template>


<style scoped>


.section.footer-smaller .container, .section.footer-smaller {
  min-height: 0
}

.footer {
  line-height: normal;
  margin-top: 11.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.footer .container {
  display: flex;
  align-items: stretch;
  flex-direction: column
}

.footer .container .row {
  flex: 0 0 auto;
  display: flex;
  align-items: stretch;
  justify-content: space-evenly;
}


.footer-getintouch a {
  font-weight: 600;
  font-size: 4.5rem;
  display: inline-block;
  line-height: normal
}

.footer-contacts {
  flex: 0 0 auto;
  line-height: 1.5;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.footer-contacts strong {
  font-size: 1rem;
  margin-bottom: .7rem;
  display: block
}

.lined {
  display: inline-block;
  margin-bottom: .5rem;
  color: rgba(255, 255, 255, 0.5);

}


.footer-bottom {
  font-size: .875rem;
  justify-content: space-between;
  margin-top: 2rem;
  color: rgba(255,255,255,0.5);
  padding-bottom: 2rem;
  text-align: center;
}


.footer-policies a {
  margin-left: 2rem;
  color: rgba(255,255,255,0.5);

}

.footer-policies a:first-of-type {
  margin: 0
}

.footer-copy {
  padding-left: 10px
}

.col {
  display: flex;
  flex-flow: column;
}
</style>
