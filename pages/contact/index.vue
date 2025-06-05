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

<style lang="scss" scoped>
::v-deep .c-page__contact-wrap {
  display: flex;
  flex-direction: row;
  padding: 20vh 0 3.2rem;

  @include sp {
    flex-direction: column;
  }
}

::v-deep .c-page__contact-form {
  max-width: 550px;
}
</style>
