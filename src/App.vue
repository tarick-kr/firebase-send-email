<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
    <template v-if="error">
      <v-snackbar
        :multi-line="true"
        :timeout="5000"
        color="error"
        @input="closeError"
        value="true"
      >
        {{ error }}
        <v-btn
          dark
          text
          @click.native="closeError"
        >
          Close
        </v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  methods: {
    closeError () {
      this.$store.dispatch('CLEAR_ERROR')
    }
  },
  computed: {
    ...mapGetters([
      'error',
      'loading'
    ])
  }
}
</script>
