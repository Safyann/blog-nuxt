<template>
  <newPostForm :postEdit="post" @submit="onSubmit" />
</template>

<script>
import newPostForm from "@/components/Admin/NewPostForm";
export default {
  components: {
    newPostForm
  },
  layout: "admin",
  data() {
    return {
      post: {
        id: 1,
        title: "1 post",
        descr:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia esse dolorem doloribus dolores, voluptatum recusandae ipsa aliquid vel voluptatem saepe, dolore repellat? Praesentium consectetur illum, natus voluptatum nesciunt necessitatibus veniam?",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia esse dolorem doloribus dolores, voluptatum recusandae ipsa aliquid vel voluptatem saepe, dolore repellat? Praesentium consectetur illum, natus voluptatum nesciunt necessitatibus veniam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia esse dolorem doloribus dolores, voluptatum recusandae ipsa aliquid vel voluptatem saepe, dolore repellat? Praesentium consectetur illum, natus voluptatum nesciunt necessitatibus veniam?",
        img: "https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg"
      }
    };
  },
  methods: {
    onSubmit(post) {
      console.log("Post editing!");
      console.log(post);
    }
  }
};
</script>
