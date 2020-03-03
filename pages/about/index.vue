<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About my blog:</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, porro nulla necessitatibus nesciunt ratione inventore consequatur aut vel quia commodi dolor, nobis iste, doloribus quo veritatis voluptatibus fugit! Veniam, nobis.</p>
        <intro title="Lorem ipsum, dolor sit" />
        <img src="@/assets/img/about.jpg" alt />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, porro nulla necessitatibus nesciunt ratione inventore consequatur aut vel quia commodi dolor, nobis iste, doloribus quo veritatis voluptatibus fugit! Veniam, nobis.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, porro nulla necessitatibus nesciunt ratione inventore consequatur aut vel quia commodi dolor, nobis iste, doloribus quo veritatis voluptatibus fugit! Veniam, nobis.</p>
      </div>
    </section>
  </div>
</template>

<script>
import intro from "../../components/UI/Intro";
export default {
  components: {
    intro
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
