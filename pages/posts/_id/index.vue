<template>
  <div class="single-post-page">
    <section class="post">
      <h2 class="post-title">Pellentesque vel molestie nisi.</h2>
      <div class="post-details">
        <div class="post-detail">Last updated on 29.12.2019</div>
        <div class="post-detail">Written by Riana Randoja</div>
      </div>
      <p class="post-content">Phasellus lacinia lobortis ligula, non bibendum ligula tempus et. Sed eget lacus urna. Phasellus lacinia lobortis ligula, non bibendum ligula tempus et. Sed eget lacus urna. Quisque non semper enim. Fusce rutrum ipsum at metus pulvinar lobortis. Curabitur sodales auctor tortor, in fringilla lacus suscipit ac. Phasellus ultricies lectus in purus ornare, a laoreet erat cursus.</p>
      <p class="post-content"> Donec nec nibh finibus erat consectetur pellentesque vitae nec sapien.</p>
    </section>
    <section class="post-feedback">
      <p>Email me at <a href="mailto:techblog@gmail.com">techblog@gmail.com</a></p>
    </section>
  </div>
</template>

<script>
export default {}
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
