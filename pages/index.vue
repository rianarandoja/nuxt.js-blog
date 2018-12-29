<template>
  <div class="home-page">
    <section class="intro">
      <h2>Such awesome tech blog!</h2>
    </section>
    <PostList/>
  </div>  
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: {
    PostList
  }
}
</script>

<style scoped  lang="scss">
.intro {
  height: 350px;
  position: relative;
  box-sizing: border-box;
  background-image: url('~assets/images/cup-of-coffee.jpg');
  background-position: center;
  background-size: cover;
}

.intro h2 {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 70%;
  font-size: 1.5rem;
  color: $dark-main;
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px $dark-main;
  box-sizing: border-box;
  border: 1px solid $dark-main;
}

@media (min-width: 768px) {
  .intro h2 {
    font-size: 2rem;
  }
}
</style>
