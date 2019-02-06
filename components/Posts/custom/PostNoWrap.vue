<template>
  <section 
    class="row1">
    <PostPreviewNew
      :key="posts[3].id"
      :id="posts[3].id"
      :thumbnail="posts[3].thumbnail"
      :title="posts[3].title"
      :preview-text="posts[3].previewText"
      class="post3"/>
    <PostPreviewNew
      :key="posts[4].id"
      :id="posts[4].id"
      :thumbnail="posts[4].thumbnail"
      :title="posts[4].title"
      :preview-text="posts[4].previewText"
      class="post4"/>
    <PostPreviewNew
      :key="posts[2].id"
      :id="posts[2].id"
      :thumbnail="posts[2].thumbnail"
      :title="posts[2].title"
      :preview-text="posts[2].previewText"
      class="fill-row"/>
  </section>
</template>

<script>
import PostPreviewNew from '@/components/Posts/custom/PostPreviewNew'
export default {
  components: {
    PostPreviewNew
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
/* TODO check me out */
.row1 {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  /* flex-direction: row-reverse; */
  flex-wrap: nowrap;
  overflow-wrap: normal;
  align-items: center;
  /* align-items: stretch; cross axis*/
  /* justify-content: center; main axis */
  justify-content: center;
}
.post3 {
  width: 20vw;
  /* width: 200px; */
}
.post4 {
  width: 20vw;
  /* width: 200px; */
}
.fill-row {
  /* width: 30vw; */
  width: 45vw;
  flex-grow: 1;
  flex-basis: auto;
  /* flex: 0 1 auto; */
}

.div1 {
  /* order: 0; beginning */
}
.div2 {
  order: 3;
  width: 200px;
  align-self: flex-start;
  /* align-self: flex-start; üks läheb vastavalt cross axisele nt üles */
}
.div3 {
  /* flex: 0 1 auto; */
  /* flex-grow: 1; fillib free spacei vastaval rowl */
  flex-shrink: 1;
  flex-basis: auto;
}
.div4 {
  flex-shrink: 3;
  /* kasvab 3x kiiremin */
}
</style>
