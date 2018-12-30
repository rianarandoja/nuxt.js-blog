import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '2',
                title:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                thumbnail:
                  'https://cdn.pixabay.com/photo/2015/11/04/20/59/milky-way-1023340_1280.jpg',
                previewText:
                  'Mauris interdum, ante sit amet dapibus efficitur, enim nunc pulvinar nisi, eu suscipit justo justo quis risus.'
              },
              {
                id: '3',
                title:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                thumbnail:
                  'https://cdn.pixabay.com/photo/2015/11/04/20/59/milky-way-1023340_1280.jpg',
                previewText:
                  'Mauris interdum, ante sit amet dapibus efficitur, enim nunc pulvinar nisi, eu suscipit justo justo quis risus.'
              }
            ])
            resolve()
          }, 1000)
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
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
