<template>
  <div class="admin-page">
    <section class="existing-posts">
      <h2>Existing Posts</h2>
      <PostList is-admin/>
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  layout: 'admin',
  components: {
    PostList
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
