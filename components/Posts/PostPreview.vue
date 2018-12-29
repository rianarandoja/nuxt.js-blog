<template>
  <nuxt-link 
    :to="'/posts/' + id" 
    class="post-preview">
    <article>
      <div 
        :style="{backgroundImage: 'url(' + thumbnail + ')'}"
        class="post-thumbnail"/>
      <div class="post-content">
        <h2>{{ title }}</h2>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped  lang="scss">
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 85%;
  margin: 10px;
}

a {
  text-decoration: none;
  color: $dark-main;
}

@media (min-width: 850px) {
  .post-preview {
    width: 340px;
    margin: 13px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
