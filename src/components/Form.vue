<template>
  <v-container>
    <form style="max-width: 400px">
      <v-text-field
        v-model="firstName"
        :error-messages="firstNameErrors"
        label="Имя"
        required
        @input="$v.firstName.$touch()"
        @blur="$v.firstName.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        label="Фамилия"
      ></v-text-field>
      <v-text-field
        v-model="phone"
        :error-messages="phoneErrors"
        label="Телефон"
        required
        @input="$v.phone.$touch()"
        @blur="$v.phone.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
    </form>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, minLength, numeric, email } from 'vuelidate/lib/validators'

export default {
  name: 'Form',
  mixins: [validationMixin],

  data () {
    return {
      currentDate: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    }
  },

  mounted () {
    this.currentDate = this.getDataClient.currentDate
    this.firstName = this.getDataClient.firstName
    this.lastName = this.getDataClient.lastName
    this.phone = this.getDataClient.phone
    this.email = this.getDataClient.email
  },

  validations: {
    firstName: { required, minLength: minLength(3) },
    phone: { required, numeric },
    email: { required, email }
  },

  methods: {
    // submit () {
    //   this.$v.$touch()
    // },
    // clear () {
    //   this.$v.$reset()
    //   this.name = ''
    //   this.email = ''
    // },
    getCurrentDate () {
      const d = new Date()
      return ('0' + d.getDate()).slice(-2) + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + d.getFullYear()
    },
    getIdCurrentDate () {
      const d = new Date()
      return ('0' + d.getDate()).slice(-2) + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + d.getFullYear() + '-' + d.getHours() + ':' + ('0' + d.getMinutes()).slice(-2)
    },
    saveDataClient () {
      const currentDate = this.getCurrentDate()
      const idCurrentDate = this.getIdCurrentDate()
      const firstName = this.firstName
      const lastName = this.lastName
      const phone = this.phone
      const email = this.email
      this.$store.dispatch('SAVE_DATA_CLIENT', { currentDate, idCurrentDate, firstName, lastName, phone, email })
    }
  },

  computed: {
    ...mapGetters([
      'getDataClient'
    ]),
    firstNameErrors () {
      const errors = []
      if (!this.$v.firstName.$dirty) return errors
      !this.$v.firstName.required && errors.push('Поле не может быть пустым')
      !this.$v.firstName.minLength && errors.push('Имя должно содержать минимум 3 символа')
      return errors
    },
    phoneErrors () {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.required && errors.push('Поле не может быть пустым')
      !this.$v.phone.numeric && errors.push('Здесь могут быть только из цифры')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.required && errors.push('Поле не может быть пустым')
      !this.$v.email.email && errors.push('Введите корректный E-mail')
      return errors
    },
    formCompleted () {
      return !this.$v.$invalid
    }
  },
  watch: {
    formCompleted: {
      handler (val) {
        if (val) {
          this.$emit('updateCompleted', val)
        } else {
          this.$emit('updateCompleted', val)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
