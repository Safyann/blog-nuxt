<template>
  <section class="new-comment">
    <div class="container">
      <!-- message -->
      <Message v-if="message" :message="message" />

      <form class="contact-form" @submit.prevent="onSubmit">
        <!-- name -->
        <AppInput v-model="comment.name">Name:</AppInput>
        <!-- text -->
        <AppTextarea v-model="comment.text">Text:</AppTextarea>

        <!-- buttons -->
        <div class="controls">
          <AppButton>Submit!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import AppButton from "@/components/UI/Controls/Button";
import AppInput from "@/components/UI/Controls/Input";
import AppTextarea from "@/components/UI/Controls/Textarea";
import Message from "@/components/UI/Message";

export default {
  components: {
    AppButton,
    AppInput,
    AppTextarea,
    Message
  },
  data() {
    return {
      comment: {
        name: "",
        text: ""
      },
      message: null
    };
  },
  methods: {
    onSubmit() {
      this.message = "Submited!";
      console.log(this.comment);

      // Reset
      this.comment.name = "";
      this.comment.text = "";
    }
  }
};
</script>

<style lang="scss">
.new-comment {
  text-align: center;

  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }

  .controls {
    margin: 30px;
  }
}
</style>
