<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
    <comments :comments="comments" />
    <newComment :postId="$route.params.id" />
  </div>
</template>

<script>
import post from "@/components/Blog/Post";
import newComment from "@/components/Comments/NewComment";
import comments from "@/components/Comments/Comments";

import axios from "axios";

export default {
  components: {
    post,
    comments,
    newComment
  },
  async asyncData(context) {
    let [post, comments] = await Promise.all([
      axios.get(
        `https://blog-nuxt-c4d58.firebaseio.com/posts/${context.params.id}.json`
      ),
      axios.get(`https://blog-nuxt-c4d58.firebaseio.com/comments.json`)
    ]);

    // let commentsArray = [],
    //   commentsArrayRes = [];

    // Object.keys(comments.data).forEach(key => {
    //   commentsArray.push(comments.data[key]);
    // });

    // for (let i = 0; i < commentsArray.length; i++) {
    //   if (
    //     commentsArray[i].postId === context.params.id &&
    //     commentsArray[i].publish
    //   ) {
    //     commentsArrayRes.push(commentsArray[i]);
    //   }
    // }

    if (!comments.data) {
      comments.data = {};
    }

    let commentsArrayRes = Object.values(comments.data).filter(
      comment => comment.postId === context.params.id && comment.publish
    );

    return {
      post: post.data,
      comments: commentsArrayRes
    };
  }
};
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
}

.post-header {
  text-align: center;
  margin-bottom: 30px;

  img {
    max-width: 400px;
    margin-bottom: 16px;
  }

  p {
    color: #999;
  }
}

.post-body {
  text-align: left;
}
</style>
