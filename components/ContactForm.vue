<template>
  <section>
    <div class="c-page__container">
      <div class="c-page__contact-wrap">
        <div class="c-page__contact-title">
          <span class="c-page__headline">お問い合わせ</span>
          <h2 class="c-page__content">CONTACT</h2>
          <p>サービスに関するご相談・ご質問を受け付けております。<br>
            下記フォームに必要事項を入力し、お気軽にお問合せください。
          </p>
        </div>
        <form class="c-page__contact-form" @submit.prevent="submitForm">
          <div class="c-page__contact-name-wrap">
            <div>
              <label for="lastName">姓<span class="required-text">必須</span></label>
              <input id="lastName" name="lastName" v-model="form.lastName" placeholder="姓" required />
            </div>
            <div>
              <label for="firstName">名<span class="required-text">必須</span></label>
              <input id="firstName" name="firstName" v-model="form.firstName" placeholder="名" required />
            </div>
          </div>
          <div class="c-page__contact-form-full">
            <label for="email">メールアドレス<span class="required-text">必須</span></label>
            <input id="email" v-model="form.email" type="email" placeholder="メールアドレス" required />
          </div>
          <div class="c-page__contact-form-full">
            <label for="company">会社名<span class="required-text">必須</span></label>
            <input id="company" v-model="form.company" type="company" placeholder="会社名" required />
          </div>
          <div class="c-page__contact-form-full">
            <label for="inquiryType">お問い合わせ種別<span class="required-text">必須</span></label>
            <div class="pd-select">
              <select id="inquiryType" class="select" name="inquiryType" v-model="form.inquiryType" required>
                <option value="" selected>選択してください</option>
                <option value="web">Webデザインのご相談</option>
                <option value="uxui">UXUIデザイン支援のご相談</option>
                <option value="newBusiness">開発のご相談</option>
                <option value="collaboration">協業のご提案</option>
                <option value="other">そのほか</option>
              </select>
            </div>
          </div>
          <div class="c-page__contact-form-full">
            <label for="message">お問い合わせ詳細 (課題感、理想、期待、など)<span class="required-text">必須</span></label>
            <textarea id="message" v-model="form.message" placeholder="お問い合わせ内容" required></textarea>
          </div>
          <button type="submit">送信</button>
          <p v-if="successMessage">{{ successMessage }}</p>
        </form>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  data() {
    return {
      form: {
        lastName: '',
        firstName: '',
        email: '',
        message: '',
        company: '',
        inquiryType: ''
      },
      successMessage: ''
    }
  },
  methods: {
    async submitForm() {
      try {
        const res = await this.$axios.post('/api/contact', this.form)
        if (res.data.success) {
          this.$router.push('/contact/thanks')
        }
      } catch (error) {
        alert('送信に失敗しました。再度お試しください。')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-page {

  &__container {
    max-width: 1100px;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;

    @include sp {
      padding: 0 16px;
    }
  }

  &__contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 660px;
    margin: 0 auto;
    gap: 24px;
  }

  &__contact-form input,
  &__contact-form textarea {
    width: 100%;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f5f5f5;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid transparent;
    font-weight: 300;
  }

  &__contact-form button {
    width: 100%;
    max-width: 350px;
    padding: 16px;
    background-color: #26A0F8;
    color: $white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    margin-top: 40px;
  }

  &__contact-name-wrap {
    gap: 16px;
  }

  &__contact-form button:hover {
    background-color: #1e8ed8;
  }

  &__contact-form input:focus,
  &__contact-form textarea:focus {
    border-color: #26A0F8;
    outline: none;
  }

  &__contact-form label {
    width: 100%;
    font-weight: 500;
    color: var(--text);
    display: flex;
    align-items: center;
  }

  &__contact-form div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
  }

  &__contact-form div>div {
    display: flex;
    flex-direction: column;
  }

  &__contact-form-full {
    display: flex;
    flex-direction: column;
  }

  &__contact-form textarea {
    padding: 16px 16px 90px;
  }

  &__contact-form input::placeholder,
  &__contact-form textarea::placeholder,
  &__contact-form select::placeholder {
    color: #b9b9b9;
    opacity: 1;
    font-weight: 300;
  }

  &__contact-form select {
    width: 100%;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f5f5f5;
    font-size: 16px;
    border: 1px solid transparent;
    appearance: none;
  }

  &__contact-form select:focus {
    border-color: #26A0F8;
    outline: none;
  }

  &__contact-title p {
    margin-bottom: 40px;
  }
}

.pd-select {
  width: 100%;
  position: relative;

  &::after {
    content: "";
    margin: auto;
    display: block;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 14px;
    right: 20px;
    bottom: auto;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15L6 8.99999L18 8.99999L12 15Z" fill="rgb(28,28,28)"/></svg>');
  }

}

.required-text {
  display: inline-table;
  margin-left: 8px;
  width: 40px;
  height: 4px;
  font-style: bold;
  font-size: 10px;
  line-height: 20px;
  text-align: center;
  font-feature-settings: "pkna" on;
  color: $white;
  background: #ea3800;
  border-radius: 50px;
}
</style>
