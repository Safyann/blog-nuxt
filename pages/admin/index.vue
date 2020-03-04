<template>
  <!-- posts -->
  <PostsList :admin="true" :posts="posts" />
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "1 post",
          descr:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia esse dolorem doloribus dolores, voluptatum recusandae ipsa aliquid vel voluptatem saepe, dolore repellat? Praesentium consectetur illum, natus voluptatum nesciunt necessitatibus veniam?",
          img: "https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg"
        },
        {
          id: 2,
          title: "2 post",
          descr:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia esse dolorem doloribus dolores, voluptatum recusandae ipsa aliquid vel voluptatem saepe, dolore repellat? Praesentium consectetur illum, natus voluptatum nesciunt necessitatibus veniam?",
          img:
            "https://iheartdogs.com/wp-content/uploads/2017/09/Brite-Bite-0021-2.jpg"
        },
        {
          id: 3,
          title: "3 post",
          descr:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia esse dolorem doloribus dolores, voluptatum recusandae ipsa aliquid vel voluptatem saepe, dolore repellat? Praesentium consectetur illum, natus voluptatum nesciunt necessitatibus veniam?",
          img:
            "https://avatars.mds.yandex.net/get-pdb/467185/d38de7dc-3690-42ad-a268-1f8cee04a8c6/s1200"
        }
      ]
    };
  }
};
</script>
