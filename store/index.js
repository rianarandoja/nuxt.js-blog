import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        )
        state.loadedPosts[postIndex] = editedPost
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get('https://nuxt-blog-2914e.firebaseio.com/posts.json')
          .then(result => {
            const postsArray = []
            for (const key in result.data) {
              postsArray.push({ ...result.data[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(err => context.error(err))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        }
        return axios
          .post(
            'https://nuxt-blog-2914e.firebaseio.com/posts.json',
            createdPost
          )
          .then(result => {
            vuexContext.commit('addPost', {
              ...createdPost,
              id: result.data.name
            })
          })
          .catch(err => console.log(err))
      },
      editPost(vuexContext, post) {
        const editedPost = {
          ...post,
          updatedDate: new Date()
        }
        return axios
          .put(
            `https://nuxt-blog-2914e.firebaseio.com/posts/${
              editedPost.id
            }.json`,
            editedPost
          )
          .then(result => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(err => console.log(context.err))
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
