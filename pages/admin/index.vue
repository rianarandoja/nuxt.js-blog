<template>
  <div class="admin-page">
    <section class="existing-posts">
      <h2>Existing Posts</h2>
      <PostList 
        :posts="loadedPosts" 
        is-admin/>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
.admin-page {
  padding: 10px;
}

.existing-posts h2 {
  text-align: center;
}
</style>
