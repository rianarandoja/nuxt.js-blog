<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm 
        :post="loadedPost" 
        @submit="onSubmitted" />
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
  asyncData(context) {
    return context.app.$axios
      .$get(`/posts/${context.params.postid}.json`)
      .then(data => {
        return {
          loadedPost: { ...data, id: context.params.postid }
        }
      })
      .catch(err => context.error(err))
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost).then(() => {
        this.$router.push('/admin')
      })
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
