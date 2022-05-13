<template>
  <div id="app">
    <h1>Seja bem-vindo</h1>
    <Texts :dados="''"/>
  </div>


</template>


<script>
import Texts from './component/Texts.vue'

export default {
  name: 'App',
  components: {
    Texts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
p.small {
  line-height: 0.8;
}

</style>
