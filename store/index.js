import axios from "axios";

export const state = () => ({
  postsLoaded: [],
  token: null
});

export const mutations = {
  setPosts(state, posts) {
    state.postsLoaded = posts;
  },
  addPost(state, post) {
    state.postsLoaded.push(post);
  },
  editPost(state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(
      post => post.id === postEdit.id
    );
    state.postsLoaded[postIndex] = postEdit;
  },
  setToken(state, token) {
    state.token = token;
  },
  destroyToken(state) {
    state.token = null;
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
  authUser({ commit }, authData) {
    const key = "AIzaSyBnKG5qG0p_et8kMwS7-rym--CjjdV97qs";

    return axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      )
      .then(res => {
        commit("setToken", res.data.idToken);
      })
      .catch(e => console.log(e));
  },
  logoutUser({ commit }) {
    commit("destroyToken");
  },
  addPost({ commit }, post) {
    return axios
      .post("https://blog-nuxt-c4d58.firebaseio.com/posts.json", post)
      .then(res => {
        commit("addPost", { ...post, id: res.data.name });
      })
      .catch(e => console.error(e));
  },
  editPost({ commit, state }, post) {
    return axios
      .put(
        `https://blog-nuxt-c4d58.firebaseio.com/posts/${post.id}.json?auth=${state.token}`,
        post
      )
      .then(res => {
        commit("editPost", post);
      })
      .catch(e => console.error(e));
  },
  addComment({ commit }, comment) {
    return axios
      .post("https://blog-nuxt-c4d58.firebaseio.com/comments.json", comment)
      .catch(e => console.error(e));
  }
};

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded;
  },
  checkAuthUser(state) {
    return state.token != null;
  }
};
