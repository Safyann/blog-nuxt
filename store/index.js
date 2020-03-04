import axios from "axios";

export const state = () => ({
  postsLoaded: []
});

export const mutations = {
  setPosts(state, posts) {
    state.postsLoaded = posts;
  },
  addPost(state, post) {
    state.postsLoaded.push(post);
  }
};

export const actions = {
  nuxtServerInit({ commit }, contex) {
    return axios
      .get("https://blog-nuxt-c4d58.firebaseio.com/posts.json")
      .then(res => {
        const postArray = [];

        for (const key in res.data) {
          if (res.data.hasOwnProperty(key)) {
            postArray.push({ ...res.data[key], id: key });
          }
        }

        commit("setPosts", postArray);
      })
      .catch(e => console.error(e));
  },
  addPost({ commit }, post) {
    return axios
      .post("https://blog-nuxt-c4d58.firebaseio.com/posts.json", post)
      .then(res => {
        commit("addPost", { ...post, id: res.data.name });
      })
      .catch(e => console.error(e));
  }
};

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded;
  }
};
