<template>
  <commentTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
    <tbody slot="tbody">
      <tr v-for="comment in comments" :key="comment.id">
        <td>{{comment.name}}</td>
        <td>{{comment.text}}</td>
        <td>
          <span v-if="comment.status" class="status true">Publish</span>
          <span v-else class="status false">Hidden</span>
        </td>
        <td @click="changeComment(comment.id)" class="link">Change Status</td>
        <td @click="deleteComment(comment.id)" class="link">Delete</td>
      </tr>
    </tbody>
  </commentTable>
</template>

<script>
import commentTable from "@/components/Admin/CommentTable";
export default {
  components: {
    commentTable
  },
  layout: "admin",
  data() {
    return {
      comments: [
        {
          id: 1,
          name: "Alex",
          text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia esse dolorem doloribus dolores, voluptatum recusandae ipsa aliquid vel voluptatem saepe, dolore repellat? Praesentium consectetur illum, natus voluptatum nesciunt necessitatibus veniam?",
          status: true
        },
        {
          id: 2,
          name: "Alena",
          text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia esse dolorem doloribus dolores, voluptatum recusandae ipsa aliquid vel voluptatem saepe, dolore repellat? Praesentium consectetur illum, natus voluptatum nesciunt necessitatibus veniam?",
          status: false
        }
      ]
    };
  },
  methods: {
    changeComment(id) {
      console.log(`Change comment id - ${id}`);
    },
    deleteComment(id) {
      console.log(`Delete comment id - ${id}`);
    }
  }
};
</script>
