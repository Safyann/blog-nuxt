<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>
      <!-- message -->
      <Message v-if="message" :message="message" />

      <form class="contact-form" @submit.prevent="onSubmit">
        <!-- name -->
        <AppInput v-model="user.name">Name:</AppInput>
        <!-- email -->
        <AppInput v-model="user.email" type="email">Email:</AppInput>
        <!-- text -->
        <AppTextarea v-model="user.text">Text:</AppTextarea>
        <!-- buttons -->
        <div class="controls">
          <AppButton btnClass="btnWhite">Submit!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: null,
      user: {
        name: "",
        email: "",
        text: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.message = "Submited!";
      console.log(this.user);

      // Reset
      this.user.name = "";
      this.user.email = "";
      this.user.text = "";
    }
  }
};
</script>

<style lang="scss">
.contact {
  text-align: center;
  background-color: #4b40e3;
  color: #ffffff;
  .title {
    color: #ffffff;
  }

  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }

  .controls {
    margin: 30px;
  }
}
</style>
