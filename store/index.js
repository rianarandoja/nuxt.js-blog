import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
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
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get('/posts.json')
          .then(data => {
            const postsArray = []
            for (const key in data) {
              postsArray.push({ ...data[key], id: key })
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
        return this.$axios
          .$post(`/posts.json?auth=${vuexContext.state.token}`, createdPost)
          .then(data => {
            vuexContext.commit('addPost', {
              ...createdPost,
              id: data.name
            })
          })
          .catch(err => console.log(err))
      },
      editPost(vuexContext, post) {
        const editedPost = {
          ...post,
          updatedDate: new Date()
        }
        return this.$axios
          .$put(
            `/posts/${editedPost.id}.json?auth=${vuexContext.state.token}`,
            editedPost
          )
          .then(result => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(err => console.log(context.err))
      },
      authenticateUser(vuexContext, authData) {
        const credentials = {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
        let url =
          'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key='
        if (authData.isLogin) {
          url =
            'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key='
        }
        return this.$axios
          .$post(`${url}${process.env.firebase_API_KEY}`, credentials)
          .then(result => {
            const expirationDate =
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            const token = result.idToken
            vuexContext.commit('setToken', token)
            Cookie.set('token', token)
            Cookie.set('expirationDate', expirationDate)
            localStorage.setItem('token', token)
            localStorage.setItem('expirationDate', expirationDate)

            this.$axios
              .$post('http://127.0.0.1:5000/api/track-data', {
                data: 'Authenticated'
              })
              .then(result => console.log(result))
              .catch(error => console.log(error))

            this.$axios
              .$get('http://127.0.0.1:5000/api/data')
              .then(result => console.log(result))
              .catch(error => console.log(error))
          })
          .catch(err => {
            console.log(err)
          })
      },
      initAuth(vuexContext, req) {
        let token
        let expirationDate
        if (req) {
          // isServer -> get token from Cookie
          if (!req.headers.cookie) {
            return
          }
          const jwtCookie = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('token='))
          if (!jwtCookie) {
            return
          }
          token = jwtCookie.split('=')[1]

          expirationDate = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('expirationDate='))
            .split('=')[1]
        } else {
          // isClient -> get token from localStorage
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('expirationDate')
        }

        if (new Date().getTime() > Number.parseInt(expirationDate) || !token) {
          // No or invalid token
          vuexContext.dispatch('logout')
          return
        }
        vuexContext.commit('setToken', token)
      },
      logout(vuexContext) {
        vuexContext.commit('clearToken')
        Cookie.remove('token')
        Cookie.remove('expirationDate')
        if (process.client) {
          localStorage.removeItem('token')
          localStorage.removeItem('expirationDate')
        }

        this.$axios
          .$get('http://127.0.0.1:5000/api/users')
          .then(result => console.log(result))
          .catch(error => console.log(error))
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  })
}

export default createStore
