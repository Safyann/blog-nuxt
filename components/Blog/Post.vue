<template>
  <section class="post">
    <div class="container">
      <!-- header -->
      <div class="post-header">
        <img :src="post.img" :alt="post.title" />
        <h1 class="title">{{ post.title }}</h1>
        <p>{{ post.descr }}</p>
      </div>

      <!-- body -->
      <div class="post-body">
        <div v-if="post.type === 'Markdown'" v v-html="compiledMarkdown"></div>
        <div v-else v-html="post.content"></div>
      </div>
    </div>
  </section>
</template>

<script>
import marked from "marked";

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.post.content, { sanitize: true });
    }
  }
};
</script>
