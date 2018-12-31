<template>
  <div class="header-container">
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <nuxt-link to="/admin">SuchAwesomeTech Blog</nuxt-link>
      </div>
      <div class="spacer"/>
      <div class="navigation-items">
        <ul class="nav-list">
          <li 
            v-if="loggedIn" 
            class="nav-item"><nuxt-link to="/admin/new-post">New Post</nuxt-link></li>
          <li 
            id="white-link" 
            class="nav-item"><nuxt-link to="/">Client</nuxt-link></li>
          <li 
            v-if="loggedIn" 
            class="nav-item"><AppButton 
              btn-style="small" 
              @click="onLogout">Logout</AppButton></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from '@/components/Navigation/TheSideNavToggle'

export default {
  name: 'TheHeader',
  components: {
    TheSideNavToggle
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


<style lang="scss" scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: $dark-admin;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
  font-size: 1.2rem;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: $orange;
}

#white-link a {
  color: white;
}

#white-link a:hover {
  color: $orange;
}
</style>
