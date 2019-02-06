<template>
  <div class="scrollpage">
    <section class="scroll-page">

      <div style="height: 15vh; background-color: #fff;">
        <h2>Scrollpage 1</h2>
      </div>
      <div style="position: relative; background-color: #fff; width: 99vw;">
        <img 
          style="width: 98vw;"
          src="@/assets/images/pexels-photo-241307.jpeg">
      </div>

      <!-- <div style="position: relative; z-index: 9999; background-color: #fff;">
        <h2 style="margin:0;">Parallax Effect</h2>
        <parallax>
          <img src="@/assets/images/pexels-photo-241307.jpeg">
        </parallax>
      </div> -->

      <div style="height: 15vh; background-color: #fff;">
        <h2>Scrollpage 2</h2>
      </div>
      <div style="position: relative; background-color: #fff;">
        <img
          id="small-img"
          src="@/assets/images/pexels-photo-196416.jpeg">
      </div>

      <div style="height: 15vh; background-color: #fff;">
        <h2>Scrollpage 3</h2>
      </div>
      <div style="position: relative; background-color: #fff;">
        <img
          id="small-img"
          src="@/assets/images/pexels-photo-241307.jpeg">
      </div>

      <div style="height: 15vh; background-color: #fff;">
        <h2>Scrollpage 4</h2>
      </div>
      <div style="position: relative; background-color: #fff;">
        <img 
          style="width: 98vw;"
          src="@/assets/images/pexels-photo-196416.jpeg">
      </div>

    </section>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  components: {
    Parallax
  }
}
</script>

<style>
body {
  margin: 0;
}
.scrollpage {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
h2 {
  margin: 7vh;
}
#small-img {
  width: 98vw;
  height: calc(100vh - 80px);
}
</style>
