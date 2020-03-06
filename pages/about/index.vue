<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About my blog:</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, porro nulla necessitatibus nesciunt ratione inventore consequatur aut vel quia commodi dolor, nobis iste, doloribus quo veritatis voluptatibus fugit! Veniam, nobis.</p>
        <Intro title="Lorem ipsum, dolor sit" />
        <img src="@/assets/img/about.jpg" alt />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, porro nulla necessitatibus nesciunt ratione inventore consequatur aut vel quia commodi dolor, nobis iste, doloribus quo veritatis voluptatibus fugit! Veniam, nobis.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, porro nulla necessitatibus nesciunt ratione inventore consequatur aut vel quia commodi dolor, nobis iste, doloribus quo veritatis voluptatibus fugit! Veniam, nobis.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    let title = "About My SSR Blog!";
    let descr = "About My SSR Blog! With nuxt.js!";
    let type = "site";
    return {
      title: title,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: title
        },
        {
          hid: "description",
          name: "description",
          content: descr
        },
        {
          hid: "og:description",
          name: "og:description",
          content: descr
        },
        {
          hid: "og:type",
          name: "og:type",
          content: type
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.about {
  text-align: center;

  p {
    margin-bottom: 10px;
  }
}
</style>
