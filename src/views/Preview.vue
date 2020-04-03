<template>
  <v-container class="order">
    <v-container class="py-0 mb-2">
      <v-row>
        <h1 class="headline font-weight-bold">Предварительный просмотр</h1>
      </v-row>
    </v-container>
    <v-divider class="mb-2"/>
    <v-container ref="order">
      <v-card max-width="960px" class="mx-auto">
        <v-container class="pb-0">
          <v-row justify="center" class="pb-5">
            <span class="title font-weight-bold">Заказ</span>
          </v-row>
        </v-container>
        <v-container>
          <div class="mb-1">
            <span class="subtitle-1 font-weight-bold mr-3">Данные заказкика</span>
          </div>
          <v-divider/>
          <v-list>
            <v-list-item style="min-height: 24px">
              <div>
                <span class="subtitle-1 font-weight-bold mr-3">Дата:</span>
                <span class="subtitle-1" style="color: rgba(0, 0, 0, 0.6)">{{ this.getDataClient.currentDate }}</span>
              </div>
            </v-list-item>
            <v-list-item style="min-height: 24px">
              <div>
                <span class="subtitle-1 font-weight-bold mr-3">Заказчик:</span>
                <span class="subtitle-1" style="color: rgba(0, 0, 0, 0.6)">{{ this.makeFullName }}</span>
              </div>
            </v-list-item>
            <v-list-item style="min-height: 24px">
              <div>
                <span class="subtitle-1 font-weight-bold mr-3">тел:</span>
                <span class="subtitle-1" style="color: rgba(0, 0, 0, 0.6)">{{ this.getDataClient.phone }}</span>
              </div>
            </v-list-item>
            <v-list-item style="min-height: 24px">
              <div>
                <span class="subtitle-1 font-weight-bold mr-3">E-mail:</span>
                <span class="subtitle-1" style="color: rgba(0, 0, 0, 0.6)">{{ this.getDataClient.email }}</span>
              </div>
            </v-list-item>
          </v-list>
        </v-container>
        <v-container>
          <div class="mb-1">
            <span class="subtitle-1 font-weight-bold mr-3">Спецификация</span>
          </div>
          <v-divider/>
          <v-list>
            <template v-for="(item, index) in this.getListProductsInCart">
              <v-divider
                v-if="index > 0"
                :key="item.id"
              >
              </v-divider>
              <v-list-item
                :key="index"
                style="min-height: 24px"
              >
                <v-list-item-content class="py-2">
                  <v-list-item-title>
                    <v-row>
                      <v-col cols="11" class="py-0">
                        <Description :itemInOrder="item"></Description>
                      </v-col>
                      <v-col cols="1" class="py-0">
                        <v-list-item-subtitle>{{ item.quantity }}</v-list-item-subtitle>
                      </v-col>
                    </v-row>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-container>
      </v-card>
    </v-container>
    <v-divider class="mb-4"/>
    <v-row justify="space-between" class="mb-4">
      <v-btn text tile color="primary" to="/">
        Назад
      </v-btn>
      <v-btn text tile color="primary" @click="onSend">
        Отправить
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Description from '../components/Description'
export default {
  name: 'Preview',
  components: {
    Description
  },
  methods: {
    onSend () {
      const order = {
        id: this.getDataClient.idCurrentDate + '/' + this.getDataClient.firstName + '_' + this.getDataClient.lastName,
        dataClient: this.getDataClient,
        productsInOrder: this.getListProductsInCart
      }
      this.$store.dispatch('SEND_ORDER', order)
      this.$router.push('/order-send')
    }
  },
  computed: {
    ...mapGetters([
      'getDataClient',
      'getListProductsInCart'
    ]),
    makeFullName () {
      return this.getDataClient.firstName + ' ' + this.getDataClient.lastName
    }
  }
}
</script>

<style scoped>

</style>
