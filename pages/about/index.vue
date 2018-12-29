<template>
  <div class="about-page">
    <h2>'About Me' Page</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu metus congue metus feugiat faucibus id vitae magna. Phasellus lacinia lobortis ligula, non bibendum ligula tempus et. Sed eget lacus urna. Mauris interdum, ante sit amet dapibus efficitur, enim nunc pulvinar nisi, eu suscipit justo justo quis risus. Donec at dapibus velit. Aliquam condimentum magna nec suscipit volutpat. Cras diam sapien, viverra sit amet massa vitae, tincidunt porttitor lacus. Vestibulum eget enim vel ex vehicula porta vel quis nunc. Nunc maximus nunc sed ex tempor tincidunt.</p>
    <p>
      <a href="https://www.udemy.com/nuxtjs-vuejs-on-steroids/learn/v4/overview">Nuxt.js - Vue.js on Steroids</a>
    </p>
  </div>
</template>

<style scoped lang="scss">
.about-page {
  text-align: center;
  padding: 50px 110px 30px 110px;
}
@media (min-width: 750px) {
  .about-page {
    padding: 50px 150px 30px 150px;
  }
}
.about-page a {
  color: $dark-main;
  text-decoration: none;
  font-weight: 800;
}
</style>
