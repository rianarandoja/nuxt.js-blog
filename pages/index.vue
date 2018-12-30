<template>
  <div class="home-page">
    <section class="intro">
      <h2>Such awesome tech blog!</h2>
    </section>
    <PostList :posts="loadedPosts" />
  </div>  
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: {
    PostList
  },
  asyncData(context, callback) {
    // renders in server side
    // sends whole page through once loaded
    // runs only on first load
    // just navigating around doesn't call the server
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: '0',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            thumbnail:
              'https://cdn.pixabay.com/photo/2015/11/04/20/59/milky-way-1023340_1280.jpg',
            previewText:
              'Mauris interdum, ante sit amet dapibus efficitur, enim nunc pulvinar nisi, eu suscipit justo justo quis risus.'
          },
          {
            id: '1',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            thumbnail:
              'https://cdn.pixabay.com/photo/2015/11/04/20/59/milky-way-1023340_1280.jpg',
            previewText:
              'Mauris interdum, ante sit amet dapibus efficitur, enim nunc pulvinar nisi, eu suscipit justo justo quis risus.'
          }
        ]
      })
    }, 1000)
  }
}
</script>

<style scoped  lang="scss">
.intro {
  height: 350px;
  position: relative;
  box-sizing: border-box;
  background-image: url('~assets/images/cup-of-coffee.jpg');
  background-position: center;
  background-size: cover;
}

.intro h2 {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 70%;
  font-size: 1.5rem;
  color: $dark-main;
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px $dark-main;
  box-sizing: border-box;
  border: 1px solid $dark-main;
}

@media (min-width: 768px) {
  .intro h2 {
    font-size: 2rem;
  }
}
</style>
