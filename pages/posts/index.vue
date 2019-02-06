<template>
  <div class="posts-page">
    <!-- <PostList :posts="loadedPosts"/> -->
    <PostListNew :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostListNew from '@/components/Posts/custom/PostListNew'

export default {
  components: {
    PostListNew
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
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
