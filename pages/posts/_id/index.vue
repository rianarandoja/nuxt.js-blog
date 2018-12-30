<template>
  <div class="single-post-page">
    <section class="post">
      <h2 class="post-title">{{ loadedPost.title }}, id: {{ loadedPost.params_id }}</h2>
      <div class="post-details">
        <div class="post-detail">Last updated on {{ loadedPost.updatedDate }}</div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>Email me at <a href="mailto:techblog@gmail.com">techblog@gmail.com</a></p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: '0',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          author: 'Riana',
          updatedDate: new Date(),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          thumbnail:
            'https://cdn.pixabay.com/photo/2015/11/04/20/59/milky-way-1023340_1280.jpg',
          previewText:
            'Mauris interdum, ante sit amet dapibus efficitur, enim nunc pulvinar nisi, eu suscipit justo justo quis risus.',
          params_id: context.route.params.id
        }
      })
    }, 1000)
  }
}
</script>

<style scoped lang="scss">
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 80%;
  margin: auto;
}

@media (min-width: 850px) {
  .post {
    width: 750px;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 750px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: $dark-main;
  text-decoration: none;
  font-weight: 700;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: $orange;
}
</style>
