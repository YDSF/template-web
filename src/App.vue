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
@import url('https://fonts.googleapis.com/css2? family= Noto+Serif & family= Open+Sans:wght@500;800 & display=swap');

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  color: #323232;
}
/*estilo das páginas*/
body {
 padding-top: 5vh;
 background-image: url('../img/Imagemdamarcia.jpg');
 background-size: cover;
}
input, label {
    display: block;
    width: 50%;
}
a{
    color: #e60084;
}
#main-conteiner {
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  background-color: #FFF;
  border-radius: 10%;
  padding: 25%;
}
#main-conteiner h1{
  text-align: left;
  margin-bottom: 25px;
  font-size: 1.6rem;
}
</style>
