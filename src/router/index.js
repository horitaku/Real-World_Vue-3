import { createRouter, createWebHistory } from "vue-router";
import OrderList from "../views/OrderList.vue";
import About from  "../views/About.vue";

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
    path: "/about",
    name: "About",
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
