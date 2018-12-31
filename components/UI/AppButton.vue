<template>
  <button
    :class="btnStyle"
    v-bind="$attrs"
    class="button"
    v-on="$listeners"><slot /></button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped lang="scss">
.button {
  font: inherit;
  background-color: $dark-main;
  color: white;
  padding: 4px;
  cursor: pointer;
  border: 1px solid $dark-main;
}

.button:hover,
.button:active {
  background-color: $dark-admin;
  border: 1px solid $dark-admin;
}

.inverted {
  background-color: white;
  color: black;
  border: 1px solid transparent;
}

.inverted:hover,
.inverted:active {
  color: #c5c5c5;
  background-color: white;
  border: 1px solid transparent;
}

.cancel {
  background-color: #c5c5c5;
  color: black;
  border: 1px solid transparent;
}

.cancel:hover,
.cancel:active {
  background-color: #d9d9d9;
  border: 1px solid transparent;
  color: black;
}

.small {
  background-color: white;
  color: $dark-admin;
  padding: 0px 5px 0px 5px;
  border: 1px solid transparent;
}

.small:hover,
.small:active {
  color: #c5c5c5;
  background-color: white;
  border: 1px solid transparent;
}
</style>
