<template>
  <section class="post-list">
    <PostPreview 
      id="0"
      :is-admin="isAdmin"
      thumbnail="https://cdn.pixabay.com/photo/2015/11/04/20/59/milky-way-1023340_1280.jpg"
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      preview-text="Mauris interdum, ante sit amet dapibus efficitur, enim nunc pulvinar nisi, eu suscipit justo justo quis risus."/>
    <PostPreview 
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://cdn.pixabay.com/photo/2011/12/15/11/37/solar-system-11188_1280.jpg"
      title="Donec at dapibus velit."
      preview-text=""/>
    <PostPreview 
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://cdn.pixabay.com/photo/2016/10/20/18/35/sunrise-1756274_1280.jpg"
      title="Pellentesque vel molestie nisi."
      preview-text="Phasellus lacinia lobortis ligula, non bibendum ligula tempus et. Sed eget lacus urna. Phasellus lacinia lobortis ligula, non bibendum ligula tempus et. Sed eget lacus urna."/>
    <PostPreview 
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://cdn.pixabay.com/photo/2016/03/18/15/02/ufo-1265186_1280.jpg"
      title="Aliquam a molestie velit."
      preview-text="Phasellus faucibus, velit eget efficitur commodo, metus enim condimentum ex, vel interdum lorem purus vitae erat."/>
    <PostPreview 
      id="4"
      :is-admin="isAdmin"
      thumbnail="https://cdn.pixabay.com/photo/2011/12/14/12/11/astronaut-11080_1280.jpg"
      title="Aliquam a molestie velit."
      preview-text="Quisque non semper enim. Fusce rutrum ipsum at metus pulvinar lobortis. Curabitur sodales auctor tortor, in fringilla lacus suscipit ac. Phasellus ultricies lectus in purus ornare, a laoreet erat cursus. Donec nec nibh finibus erat consectetur pellentesque vitae nec sapien."/>
    <PostPreview 
      id="5"
      :is-admin="isAdmin"
      thumbnail="https://cdn.pixabay.com/photo/2012/08/25/22/22/space-54999_1280.jpg"
      title="Phasellus lobortis"
      preview-text="Nam mattis luctus sem."/>
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  overflow-wrap: normal;
  align-items: center;
  justify-content: center;
}
</style>
