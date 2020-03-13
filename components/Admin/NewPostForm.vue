<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <AppInput v-model="post.title">Title:</AppInput>
        <AppInput v-model="post.descr">Descr:</AppInput>
        <AppInput v-model="post.img">img Link:</AppInput>

        <div class="new-post__types">
          <label>
            <input type="radio" value="HTML" v-model="post.type" />
            <span>HTML</span>
          </label>

          <label>
            <input type="radio" value="Markdown" v-model="post.type" />
            <span>Markdown</span>
          </label>
        </div>

        <div class="new-post__row">
          <AppTextarea v-model="post.content" @input="update"
            >Content:</AppTextarea
          >
          <div
            class="views"
            v-if="post.type === 'Markdown'"
            v-html="compiledMarkdown"
          ></div>
          <div class="views" v-else v-html="post.content"></div>
        </div>
        <!-- buttons -->
        <div class="controls">
          <div class="btn btnDanger" @click="cancel">Cancel</div>
          <AppButton>Save</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
var _ = require("lodash");
import marked from "marked";

export default {
  props: {
    postEdit: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      post: this.postEdit
        ? { ...this.postEdit }
        : {
            title: "",
            descr: "",
            img: "",
            content: "",
            type: "HTML"
          }
    };
  },
  computed: {
    compiledMarkdown() {
      return marked(this.post.content, { sanitize: true });
    }
  },
  methods: {
    cancel() {
      this.$router.push("/admin/");
    },
    onSubmit() {
      this.$emit("submit", this.post);
    },
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 300)
  }
};
</script>

<style lang="scss" scoped>
.controls {
  text-align: center;
  margin: 20px 0;
}

.new-post__row {
  display: flex;
  justify-content: space-between;

  .control {
    width: 48%;
  }
}

.views {
  border: 1px solid #dcdfe6;
  padding: 30px 27px;
  border-radius: 14px;
  background: #fff;
  width: 48%;
  max-height: 50vh;
  overflow: auto;
}

.new-post__types {
  display: flex;
  justify-content: center;

  label {
    display: flex;
    cursor: pointer;

    span {
      color: #494ce8;
      border: 1px solid #ffffff;
      background-color: #ffffff;
      padding: 0.8em 2em;
      line-height: 1;
      text-transform: uppercase;
      border-radius: 30px;
    }
  }
}

input:checked ~ span {
  color: #ffffff;
  border: 1px solid #494ce8;
  background-color: #494ce8;
}
</style>
