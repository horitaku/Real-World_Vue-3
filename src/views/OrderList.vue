<template>
  <h1>Orders for Good</h1>
  <div class="orders">
    <WorkOrder v-for="order in orders" :key="order.id" :order="order"/>
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'OrderList', query: { page: page - 1} }"
        rel="prev"
        v-if="page != 1"
      >
        &#60; Previous
      </router-link>

      <router-link
        id="page-next"
        :to="{ name: 'OrderList', query: { page: page + 1} }"
        rel="next"
        v-if="hasNextPage"
      >
        Next &#62;
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WorkOrder from '@/components/WorkOrder.vue'
import OrderService from "@/services/OrderService"
import { watchEffect } from 'vue'

export default {
  name: 'OrderList',
  props: ['page'],
  components: {
    WorkOrder
  },
  data() {
    return {
      orders: null,
      totalOrders: 0
    }
  },
  created() {
    watchEffect(() => {
      this.orders = null
      OrderService.getOrders(2, this.page)
        .then(response => {
          this.orders = response.data
          this.totalOrders = response.headers['x-total-count']
        })
        .catch(error => {
          console.log(error)
        })
    })
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalOrders / 2)
      return this.page < totalPages
    }
  }
}
</script>

<style scoped>
.orders {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}

</style>
