<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  }
}
</script>

<style scoped>
.new-post-form {
  padding: 15px;
  width: 68%;
  margin: 20px auto;
}

@media (min-width: 800px) {
  .new-post-form {
    width: 550px;
  }
}
</style>
