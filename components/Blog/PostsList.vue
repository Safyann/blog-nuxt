<template>
  <section class="post-list">
    <div class="container">
      <div class="posts__wrapper">
        <postPreview v-for="post in posts" :key="post.id" :admin="admin" :post="post" />
      </div>
    </div>
  </section>
</template>

<script>
import postPreview from "./PostPreview";
export default {
  components: {
    postPreview
  },
  props: {
    posts: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.posts__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: wrap;
}
</style>
