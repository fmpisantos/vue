<template>
  <div id="app">
    <!--Simple navigation buttons-->
    <nav>
        <router-link to='/'>Default</router-link>
        <div/>
        <router-link to='/home'>Home</router-link>
        <div/>
        <router-link to='/About'>About</router-link>
        <div class="spacing20"/>
        <button v-on:click="increment">Increment</button>
        <h1>{{`Int value: ${this.val}`}}</h1>
        <div/>
        <button v-on:click="setTime" >What time is it?</button>
        <h2>{{this.strVal}}</h2>
    </nav>

    <!--The placeholder for the  routes-->
    <router-view />
  </div>
</template>

<script>
  function increment(){
    this.$store.commit("increment")
  }

  function setTime(){
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    this.strVal = time
}

export default {
  name: "App",
  methods:{
    increment,
    setTime
  },
  computed:{
    val:{
      get(){
        return this.$store.state.val
      }
    },
    strVal:{
      get(){
        return this.$store.state.strVal
      },
      set(v){
        this.$store.commit("updateVal", v)
      }
    }
  }
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
.spacing20{
  min-height: 20px;
}
</style>
