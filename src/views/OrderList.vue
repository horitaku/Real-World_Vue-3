<template>
  <div class="orders">
    <WorkOrder v-for="order in orders" :key="order.id" :order="order"/>
  </div>
</template>

<script>
// @ is an alias to /src
import WorkOrder from '@/components/WorkOrder.vue'
import axios from 'axios'

export default {
  name: 'OrderList',
  components: {
    WorkOrder
  },
  data() {
    return {
      orders: null
    }
  },
  created() {
    axios.get('https://my-json-server.typicode.com/horitaku/Real-World_Vue-3/orders')
      // , {
      // proxy: {
      //   host: 'http://vipview1.khi.co.jp',
      //   port: '8080',
      //   protocol: 'http',
      //   auth: {
      //     username: 'horikawa_takuya',
      //     password: 'u93ppm2km9'
      //   }
      // }
      .then(response => {
        console.log('orders:', response.data)
        //this.orders = response.data
      })
      .catch(error => {
         console.log(error)
      })
  }
}
</script>

<style scoped>
.orders {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
