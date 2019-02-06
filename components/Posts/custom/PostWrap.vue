<template>
  <section 
    class="row2">
    <PostPreviewNew
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :preview-text="post.previewText"
      class="row2-item"/>
  </section>
</template>

<script>
import PostPreviewNew from '@/components/Posts/custom/PostPreviewNew'
export default {
  components: {
    PostPreviewNew
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.row2 {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  overflow-wrap: normal;
  align-items: center;
  justify-content: center;
}
.row2-item {
  width: 200px;
}
</style>
