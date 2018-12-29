<template>
  <div class="error-page">
    <h2>Oops! Something went terribly wrong!</h2>
    <p>Back to <a href="/">the safe side</a>!</p>
  </div>
</template>

<style scoped lang="scss">
.error-page {
  text-align: center;
  font-weight: bold;
}

.error-page a {
  text-decoration: none;
  color: $orange;
}

.error-page a:hover,
.error-page a:active {
  color: #e7725a;
}
</style>
