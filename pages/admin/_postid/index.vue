<template>
  <newPostForm :postEdit="post" @submit="onSubmit" />
</template>

<script>
import newPostForm from "@/components/Admin/NewPostForm";
import axios from "axios";

export default {
  components: {
    newPostForm
  },
  layout: "admin",
  asyncData(contex) {
    console.log(contex);
    return axios
      .get(
        `https://blog-nuxt-c4d58.firebaseio.com/posts/${contex.params.postId}.json`
      )
      .then(res => {
        return {
          post: {
            ...res.data,
            id: contex.params.postId
          }
        };
      })
      .catch(e => contex.error(e));
  },
  methods: {
    onSubmit(post) {
      this.$store.dispatch("editPost", post).then(() => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>
