<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <Intro title="My lasts post:" />

    <!-- posts -->
    <PostsList :posts="postsLoaded" />
    <contacts />
  </div>
</template>

<script>
import promo from "../components/Promo";
import contacts from "../components/Contacts";

export default {
  components: {
    promo,
    contacts
  },
  // asyncData(contex) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         posts: [
  //           {
  //             id: 1,
  //             title: "1 post",
  //             descr:
  //               "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia esse dolorem doloribus dolores, voluptatum recusandae ipsa aliquid vel voluptatem saepe, dolore repellat? Praesentium consectetur illum, natus voluptatum nesciunt necessitatibus veniam?",
  //             img:
  //               "https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg"
  //           }
  //         ]
  //       });
  //     }, 1500);
  //   })
  //     .then(data => {
  //       return data;
  //     })
  //     .catch(e => {
  //       contex.error(e);
  //     });
  // }
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded;
    }
  }
};
</script>
