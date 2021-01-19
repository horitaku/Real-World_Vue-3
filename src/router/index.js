import { createRouter, createWebHistory } from "vue-router"
import OrderList from "../views/OrderList.vue"
import OrderLayout from "../views/orders/Layout.vue"
import OrderDetails from "../views/orders/Details.vue"
import OrderRegister from "../views/orders/Register.vue"
import OrderEdit from "../views/orders/Edit.vue"
import About from  "../views/About.vue"

const routes = [
  {
    path: "/",
    name: "OrderList",
    component: OrderList,
    props: route => ({
      page: parseInt(route.query.page) || 1
    })
  },
  {
    path: "/orders/:id",
    name: "OrderLayout",
    props: true,
    component: OrderLayout,
    children: [
      {
        path: '',
        name: 'OrderDetails',
        component: OrderDetails
      },
      {
        path: "register",
        name: "OrderRegister",
        component: OrderRegister
      },
      {
        path: "edit",
        name: "OrderEdit",
        component: OrderEdit
      },
    ]
  },
  {
    path: '/order/:afterOrder(.*)',
    redirect: to => {
      return { path: '/orders/' + to.params.afterOrder }
    }
  },
  {
    path: "/about-us",
    name: "About",
    component: About,
  },
  {
    path: "/about",
    redirect: { name: 'About' }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
