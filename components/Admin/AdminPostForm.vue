<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name:</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title:</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link:</AppControlInput>
    <AppControlInput
      v-model="editedPost.content"
      control-type="textarea">Content:</AppControlInput>
    <AppControlInput
      v-model="editedPost.previewText"
      control-type="textarea">Preview Text:</AppControlInput>
    <AppButton 
      type="submit" 
      style="float: right;">Save</AppButton>
    <AppButton
      type="button"
      style="margin-right: 10px; float: right;"
      btn-style="cancel"
      @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            thumbnail: '',
            content: '',
            previewText: ''
          }
    }
  },
  methods: {
    onSave() {
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      this.$router.push('/admin')
    }
  }
}
</script>
