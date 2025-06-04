<template>
  <ContactForm />

</template>

<script>
import ContactForm from '~/components/ContactForm.vue';

export default {
  components: {
    ContactForm
  }
}
</script>

<style lang="scss">
.c-page {

  &__contact-wrap {
    display: flex;
    flex-direction: row;
    padding: 20vh 0 3.2rem;
  }

  &__contact-form {
    max-width: 550px;
  }
}
</style>