<template>
  <div class="sidenav-container">
    <div
      v-if="show"
      class="sidenav-backdrop"
      @click="$emit('close')"/>
    <transition name="slide-side">
      <div
        v-if="show"
        class="sidenav">
        <ul
          class="nav-list"
          @click="$emit('close')">
          <li 
            v-if="loggedIn" 
            class="nav-item"><nuxt-link to="/admin/new-post">New Post</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/">Client</nuxt-link></li>
          <li 
            v-if="loggedIn" 
            class="nav-item"><AppButton 
              btn-style="small" 
              @click="onLogout">Logout</AppButton></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TheSidenav',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    loggedIn() {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
    }
  }
}
</script>


<style scoped  lang="scss">
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: $dark-main;
  font-size: 1.4rem;
}

.nav-item a:hover,
.nav-item a:active {
  color: $orange;
}
</style>
