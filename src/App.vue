<template>
  <div id="app">
    <!--Simple navigation buttons-->
    <nav>
        <router-link to='/'>Default</router-link>
        <div/>
        <router-link to='/home'>Home</router-link>
        <div/>
        <router-link to='/About'>About</router-link>
        <div/>
    </nav>

    <!--The placeholder for the  routes-->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
