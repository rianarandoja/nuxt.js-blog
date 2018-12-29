<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: 'Riana Randoja',
        title: 'My awesome Post',
        content:
          'Donec nec nibh finibus erat consectetur pellentesque vitae nec sapien.',
        thumbnailLink:
          'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
      }
    }
  }
}
</script>

<style scoped>
.update-form {
  padding: 15px;
  width: 68%;
  margin: 20px auto;
}

@media (min-width: 800px) {
  .update-form {
    width: 550px;
  }
}
</style>
