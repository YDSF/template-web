<template>
  <div id="app">
    <form @submit.prevent="checkForm">
      <h1>Seja bem-vindo</h1>
      <div class="fullbox">
        <label for="name">NOME COMPLETO </label>
        <input id="name" v-model="name" type="text" name="name" placeholder="Nome completo">
        <p v-if="errornameEmpty" class="textError">Nome não pode ser vazio</p>
        <p v-if="errornameLength" class="textError">Nome deve ter pelo menos 2 caracteres </p>
      </div>

      <div class="halfbox space">
        <label for="email">E-MAIL </label>
        <input id="email" v-model="email" type="email" placeholder="E-mail">
        <p v-if="erroremail" class="textError">E-mail inválido</p>
      </div>

      <div class="halfbox space">
        <label for="ConfirmEmail">CONFIRMAR E-MAIL </label>
        <input id="ConfirmEmail" v-model="ConfirmEmail" type="email" placeholder="Confirmar E-mail">
        <p v-if="errorConfirmEmail" class="textError">E-mail deve ser igual</p>
      </div>

      <div class="halfbox space">
        <label for="cpf">CPF </label>
        <input id="cpf" v-model="Cpf" type="text" name="cpf" placeholder="CPF" v-mask="'###.###.###-##'">
        <p v-if="errorCpfEmpty" class="textError">CPF não pode ser vazio</p>
        <p v-if="errorCpfLength" class="textError">CPF deve ter 11 caracteres</p>
        <p v-if="errorCpfInvalido" class="textError">CPF inválido</p>
      </div>

      <div class="halfbox space">
        <label for="celular">CELULAR </label>
        <input id="celular" v-model="Celular" type="tel" name="celular" placeholder="Celular"
          v-mask="'+55 (##) #####-####'">
        <p v-if="errorCelularEmpty" class="textError">Celular não pode ser vazio</p>
        <p v-if="errorCelularLength" class="textError">Celular deve ter 11 caracteres </p>

      </div>

      <div class="halfbox space">
        <label for="data">DATA DE NASCIMENTO </label>
        <input id="data" v-model="data" type="date" name="data">
        <p v-if="errordata" class="textError">Data de nascimento inválido</p>
      </div>

      <div class="halfbox space">
        <label for="vazio"> </label>
      </div>

      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Mattis semper odio pretium vestibulum nulla</p><br>
        
      </div>

      <div class="fullbox">
        <input type="checkbox" id="smsemail" name="smsemail" value="EmailSMS">
        <label for="smsemail" id="smsemail-label"> E-mail e SMS </label>

      </div>

      <div class="fullbox">
        <input type="checkbox" id="whats" name="whats" value="Whatsapp">
        <label for="whats" id="whats-label"> Whatsapp </label>
      </div>

      <div>
        <input type="submit" id="btn-submit" value="Enviar">
      </div>

    </form>
  </div>
</template>


<script>
import axios from 'axios';

function TestaCPF(Cpf) {
  var Soma;
  var Resto;
  var i;
  Soma = 0;
  if (Cpf == "00000000000") return false;
  if (Cpf == "11111111111") return false;
  if (Cpf == "22222222222") return false;
  if (Cpf == "33333333333") return false;
  if (Cpf == "44444444444") return false;
  if (Cpf == "55555555555") return false;
  if (Cpf == "66666666666") return false;
  if (Cpf == "77777777777") return false;
  if (Cpf == "88888888888") return false;
  if (Cpf == "99999999999") return false;

  for (i = 1; i <= 9; i++) Soma = Soma + parseInt(Cpf.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(Cpf.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(Cpf.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(Cpf.substring(10, 11))) return false;
  return true;
}
var Cpf = "12345678909";
alert(TestaCPF(Cpf));


export default {
  name: 'Texts',
  props: {
    dados: {
      type: String,
      required: true
    }
  },

  components: {
  },
  data() {
    return {
      errornameEmpty: false,
      errornameLength: false,
      errordata: false,
      errorCpfEmpty: false,
      errorCpfLength: false,
      errorCpfInvalido: false,
      errorCelularEmpty: false,
      errorCelularLength: false,
      erroremail: false,
      errorConfirmEmail: false,
      name: null,
      data: null,
      Cpf: null,
      Celular: null,
      email: null,
      ConfirmEmail: null,

    }
  },

  methods: {
    checkForm() {
      //Parte de validar nome//
      if (!this.name) {
        this.errornameLength = false
        this.errornameEmpty = true
      } else if (this.name.length < 2) {
        this.errornameEmpty = false
        this.errornameLength = true
      } else {
        this.errornameEmpty = false
        this.errornameLength = false
      }

      //Parte validar data//

      if (!this.data) {
        this.errordata = true
      } else {
        this.errordata = false
      }

      //Parte validar email//

      const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
      if (!emailRegex.test(this.email)) {
        this.erroremail = true
      } else {
        this.erroremail = false
      }

      //Parte confirmar email//

      if (this.email !== this.ConfirmEmail) {
        this.errorConfirmEmail = true
      } else {
        this.errorConfirmEmail = false
      }

      //Parte validar CPF//

      if (!this.Cpf) {
        this.errorCpfLength = false
        this.errorCpfEmpty = true
        this.errorCpfInvalido = false
      } else if (this.Cpf.length < 14) {
        this.errorCpfEmpty = false
        this.errorCpfLength = true
        this.errorCpfInvalido = false
      } else if (!TestaCPF(this.Cpf.replace(/[^0-9]/g, ''))) {
        this.errorCpfEmpty = false
        this.errorCpfLength = false
        this.errorCpfInvalido = true
      } else {
        this.errorCpfEmpty = false
        this.errorCpfLength = false
        this.errorCpfInvalido = false
      }

      //Parte validar Celular//            

      if (!this.Celular) {
        this.errorCelularLength = false
        this.errorCelularEmpty = true
      } else if (this.Celular.length === 11) {
        this.errorCelularEmpty = false
        this.errorCelularLength = true
      } else {
        this.errorCelularEmpty = false
        this.errorCelularLength = false
      }

      console.log('FORMULARIO FUNCIONANDO', this.$data)

      axios.get('https://app.fakejson.com/q/sIra2Obl?token=tkDFCkZPsnUeU_Bc76Af8w')
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log('ERRO', error);
        })

    }
  },

}


</script>

<style>
@import url('https://fonts.googleapis.com/css2? family= Noto+Serif & family= Open+Sans:wght@500;800 & display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  color: #323232;
  border: none;
}

/*estilo das páginas*/
body {
  padding-top: 5vh;
  padding-bottom: 5vh;
  background-image: url('../img/imagem.png');
  background-color: #df053fcd;
  background-size: cover;
}

input,
label {
  display: block;
  width: 100%;
}

input:focus,
label:focus {
  outline: none;
}

a {
  color: #df053fcd;
}

#app {
  width: 580px;
  margin-right: auto;
  background-color: #FFF;
  border-radius: 10px;
  padding: 25px;
  
}

form {
  display: flex;
  flex-wrap: wrap;
  padding: 5%;
  justify-content: space-between;

}

.fullbox {
  flex: 1 1 100%;
  position: relative;
}

.halfbox {
  flex: 1 1 45%;
  position: relative;
}

.space {
  margin-right: 2.5%;
}

label {
  font-weight: bold;
  font-size: .8rem;
}

input {
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;
  font-size: .9rem;
  margin-bottom: 20px;
}

input:focus {
  border-color: #ee2259cd;
}

input[type="submit"] {
  background-color: hwb(344 13% 7% / 0.804);
  color: #FFF;
  border: none;
  border-radius: 20px;
  height: 50px;
  cursor: pointer;
}

#smsemail {
  margin-right: 5px;
}

#smsemail,
#smsemail-label {
  display: inline-block;
  width: auto;
}

#whats {
  margin-right: 5px;
}

#whats,
#whats-label {
  display: inline-block;
  width: auto;
}

.textError {
  color: red;
  size: 10px;
  margin-top: -4%;
  padding: 5px;
}

#app h1 {
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.6rem;
}
</style>