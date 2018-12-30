<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: {
    PostList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: '2',
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              thumbnail:
                'https://cdn.pixabay.com/photo/2015/11/04/20/59/milky-way-1023340_1280.jpg',
              previewText:
                'Mauris interdum, ante sit amet dapibus efficitur, enim nunc pulvinar nisi, eu suscipit justo justo quis risus.'
            },
            {
              id: '3',
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              thumbnail:
                'https://cdn.pixabay.com/photo/2015/11/04/20/59/milky-way-1023340_1280.jpg',
              previewText:
                'Mauris interdum, ante sit amet dapibus efficitur, enim nunc pulvinar nisi, eu suscipit justo justo quis risus.'
            }
          ]
        })
        // reject(new Error())
      }, 1000)
    })
      .then(data => {
        return data
      })
      .catch(err => {
        context.error(err)
      })
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
