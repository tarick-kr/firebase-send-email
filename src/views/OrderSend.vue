<template>
  <v-container>
    <template v-if="loading">
      <Loader />
    </template>
    <template v-else>
      <v-container>
        <v-row justify="center" class="mb-4">
          <h2>Заказ отправлен</h2>
        </v-row>
        <v-row justify="center" class="mb-4">
          <v-btn text tile color="primary" to="/">
            Заполнить форму ещё раз
          </v-btn>
        </v-row>
      </v-container>
    </template>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Loader from '../components/Loader'
export default {
  name: 'OrderSend',
  components: {
    Loader
  },
  computed: {
    ...mapGetters([
      'error',
      'loading'
    ])
  }
}
</script>

<style scoped>

</style>
