<template>
  <v-app>
    <div id="nav">
      <v-toolbar>
        <router-link to="/login">
          <v-btn flat fab  id="myButton1">Login</v-btn>
        </router-link> |   
        <router-link to="/" >
          <v-btn flat fab  id="myButton3">Home</v-btn>
        </router-link> |
        <router-link to="/inspire" >
          <v-btn flat fab  id="myButton3">Inspire</v-btn>
        </router-link> |
        
        <v-btn flat outline color="orange" v-on:click="logOut">Logout</v-btn>
      </v-toolbar>
    </div>
    <nuxt/>
  </v-app>
</template>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  font-size: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'logged'
    ])
  },
  methods: {
    ...mapMutations([
      'logout'
    ]),
    logOut: function () {
      this.logout()
      this.$router.push('/login')
    }
  }
}
</script>