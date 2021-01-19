<template>
  <div v-if="order">
    <h1>{{ order.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'OrderDetails' }"
      >Details</router-link
      >
      |
      <router-link :to="{ name: 'OrderRegister' }"
      >Register</router-link
      >
      |
      <router-link :to="{ name: 'OrderEdit' }"
      >Edit</router-link
      >
    </div>
    <router-view :order="order" />
  </div>
</template>

<script>
import OrderService from '@/services/OrderService.js'
export default {
  props: ['id'],
  data() {
    return {
      order: null
    }
  },
  created() {
    OrderService.getOrder(this.id)
      .then(response => {
        this.order = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>