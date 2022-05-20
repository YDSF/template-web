<template>
    <div id="app">
        <h1>{{ dados }}</h1>
        <form id="app" @submit.prevent="checkForm">
            <div class="nome">
                <label for="name">NOME COMPLETO </label>
                <input id="name" v-model="name" type="text" name="name" placeholder="Nome completo">
                <p v-if="errornameEmpty" class="textError">Nome não pode ser vazio</p>
                <p v-if="errornameLength" class="textError">Nome deve ter pelo menos 2 caracteres </p>
            </div>

            <div class="email">
                <label for="email">E-MAIL </label>
                <input id="email" v-model="email" type="email" placeholder="E-mail">
                <p v-if="erroremail" class="textError">E-mail inválido</p>
            </div>

            <div class="confEmail">
                <label for="ConfirmEmail">CONFIRMAR E-MAIL </label>
                <input id="ConfirmEmail" v-model="ConfirmEmail" type="email" placeholder="Confirmar E-mail">
                <p v-if="errorConfirmEmail" class="textError">E-mail deve ser igual</p>
            </div>

            <div class="cpf">
                <label for="cpf">CPF </label>
                <input id="cpf" v-model="Cpf" type="text" name="cpf" placeholder="CPF" v-mask="'###.###.###-##'">
                <p v-if="errorCpfEmpty" class="textError">CPF não pode ser vazio</p>
                <p v-if="errorCpfLength" class="textError">CPF deve ter 11 caracteres</p>
                <p v-if="errorCpfInvalido" class="textError">CPF inválido</p>


            </div>

            <div class="celular">
                <label for="celular">CELULAR </label>
                <input id="celular" v-model="Celular" type="tel" name="celular" placeholder="Celular"
                    v-mask="'+55 (##) #####-####'">
                <p v-if="errorCelularEmpty" class="textError">Celular não pode ser vazio</p>
                <p v-if="errorCelularLength" class="textError">Celular deve ter 11 caracteres </p>

            </div>

            <div class="data">
                <label for="data">DATA DE NASCIMENTO </label>
                <input id="data" v-model="data" type="date" name="data">
                <p v-if="errordata" class="textError">Data de nascimento inválido</p>
            </div>

            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Mattis semper odio pretium vestibulum nulla</p>
            </div>
            <div>
                <form>
                    <input type="checkbox" id="smsemail" name="smsemail" value="EmailSMS">
                    <label for="smsemail">E-mail e SMS</label>

                    <input type="checkbox" id="whats" name="whats" value="Whatsapp">
                    <label for="whats">Whatsapp</label>
                </form>
            </div>


            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
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

            
        }
    }

}
</script>

<style scoped>
</style>
 




