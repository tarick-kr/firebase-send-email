<template>
  <div>
    <v-list-item-title>{{ this.itemInOrder.titleProduct }}</v-list-item-title>
    <v-list-item-subtitle>{{ this.descriptionProductParam }}</v-list-item-subtitle>
    <v-list-item-subtitle>{{ this.descriptionProductSelectParam }}</v-list-item-subtitle>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: {
    itemInOrder: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      productParams: [],
      productSelectParams: [],
      descriptionParam: [],
      descriptionSelectParams: []
    }
  },
  mounted () {
    this.makeDescription(this.itemInOrder)
  },
  methods: {
    makeDescription (itemInOrder) {
      for (let i = 0; i < itemInOrder.productParams.length; i++) {
        this.productParams.push({
          name: itemInOrder.productParams[i].name,
          sym: itemInOrder.productParams[i].sym,
          unit: itemInOrder.productParams[i].unit,
          value: itemInOrder.productParams[i].value
        })
      }
      for (let i = 0; i < this.productParams.length; i++) {
        this.descriptionParam.push(this.productParams[i].name + ' ' + this.productParams[i].sym + ' - ' + this.productParams[i].value + this.productParams[i].unit)
      }

      for (let i = 0; i < itemInOrder.productSelectParams.length; i++) {
        this.productSelectParams.push({
          name: itemInOrder.productSelectParams[i].name,
          sym: itemInOrder.productSelectParams[i].sym,
          unit: itemInOrder.productSelectParams[i].unit,
          value: itemInOrder.productSelectParams[i].value
        })
      }
      for (let i = 0; i < this.productSelectParams.length; i++) {
        if (itemInOrder.productSelectParams[i].sym) {
          this.descriptionSelectParams.push(this.productSelectParams[i].name + ' ' + this.productSelectParams[i].sym + ' - ' + this.productSelectParams[i].value + this.productSelectParams[i].unit)
        } else {
          this.descriptionSelectParams.push(this.productSelectParams[i].name + ' - ' + this.productSelectParams[i].value)
        }
      }
    }
  },
  computed: {
    descriptionProductParam () {
      return this.descriptionParam.join(' / ')
    },
    descriptionProductSelectParam () {
      return this.descriptionSelectParams.join(' / ')
    }
  }
}
</script>

<style scoped>

</style>
