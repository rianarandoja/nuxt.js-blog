<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput 
          v-model="email" 
          type="email">E-Mail Address:</AppControlInput>
        <AppControlInput 
          v-model="password" 
          type="password">Password:</AppControlInput>
        <AppButton
          type="button"
          btn-style="inverted"
          style="float: right"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
        <AppButton 
          style="margin-right: 19px; float: right" 
          type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      let authData = {
        email: this.email,
        password: this.password,
        isLogin: this.isLogin
      }
      this.$store.dispatch('authenticateUser', authData).then(() => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>

<style scoped>
.admin-auth-page {
  padding: 40px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 80%;
  height: 260px;
  margin: auto;
  padding: 22px 30px;
  box-sizing: border-box;
}

@media (min-width: 620px) {
  .auth-container {
    width: 460px;
  }
}
</style>
