<template>
  <client-only>
    <commentTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
      <tbody slot="tbody">
        <tr v-for="comment in comments" :key="comment.id">
          <td>{{comment.name}}</td>
          <td>{{comment.text}}</td>
          <td>
            <span v-if="comment.publish" class="status true">Publish</span>
            <span v-else class="status false">Hidden</span>
          </td>
          <td @click="changeComment(comment)" class="link">Change Status</td>
          <td @click="deleteComment(comment.id)" class="link">Delete</td>
        </tr>
      </tbody>
    </commentTable>
  </client-only>
</template>

<script>
import commentTable from "@/components/Admin/CommentTable";
import axios from "axios";

export default {
  components: {
    commentTable
  },
  layout: "admin",
  data() {
    return {
      comments: []
    };
  },
  mounted() {
    this.loadComments();
  },
  methods: {
    loadComments() {
      axios
        .get("https://blog-nuxt-c4d58.firebaseio.com/comments.json")
        .then(res => {
          if (!res.data) {
            res.data = {};
          }

          let commentsArray = [];

          Object.keys(res.data).forEach(key => {
            const comment = res.data[key];
            commentsArray.push({ ...comment, id: key });
          });

          this.comments = commentsArray;
        });
    },
    changeComment(comment) {
      comment.publish = !comment.publish;
      return axios.put(
        `https://blog-nuxt-c4d58.firebaseio.com/comments/${comment.id}.json`,
        comment
      );
    },
    deleteComment(id) {
      return axios
        .delete(`https://blog-nuxt-c4d58.firebaseio.com/comments/${id}.json`)
        .then(res => {
          this.loadComments();
        });
    }
  }
};
</script>
