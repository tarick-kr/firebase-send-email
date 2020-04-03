<template>
  <v-container>
    <v-row>
      <v-card width="100%">
        <v-list>
          <template v-for="(item, index) in this.getListProductsInCart">
            <v-divider
              v-if="index > 0"
              :key="item.id"
            >
            </v-divider>
            <v-list-item
              :key="index"
            >
              <v-list-item-avatar>
                <v-img :src="item.urlImage"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>
                  <v-row>
                    <v-col cols="11">
                      <Description :itemInOrder="item"></Description>
                    </v-col>
                    <v-col cols="1">
                      <v-list-item-subtitle>{{ item.quantity }}</v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Description from '../components/Description'

export default {
  name: 'ListOrderedProducts',
  components: {
    Description
  },
  computed: {
    ...mapGetters([
      'getListProductsInCart'
    ])
  }
}
</script>

<style scoped>

</style>
