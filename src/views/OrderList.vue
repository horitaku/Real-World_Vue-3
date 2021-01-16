<template>
  <div class="orders">
    <WorkOrder v-for="order in orders" :key="order.id" :order="order"/>
  </div>
</template>

<script>
// @ is an alias to /src
import WorkOrder from '@/components/WorkOrder.vue'
import OrderService from "@/services/OrderService";

export default {
  name: 'OrderList',
  props: ['page'],
  components: {
    WorkOrder
  },
  data() {
    return {
      orders: null
    }
  },
  created() {
    OrderService.getEvents(2, this.page)
      .then(response => {
        this.events = response.data
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
