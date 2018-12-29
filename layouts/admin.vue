<template>
  <div>
    <TheAdminHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheAdminSidenav
      :show="displaySidenav"
      @close="displaySidenav = false" />
    <nuxt/>
  </div>
</template>

<script>
import TheAdminHeader from '@/components/Navigation/admin/TheAdminHeader'
import TheAdminSidenav from '@/components/Navigation/admin/TheAdminSidenav'

export default {
  components: {
    TheAdminHeader,
    TheAdminSidenav
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>


<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>
