// import Vue from "vue";
import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import Board from "../views/Board.vue";
import Thread from "../views/Thread.vue";

// Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/boards/:id",
    name: "board",
    component: Board,
    props: true
  },
  {
    path: "/threads/:id",
    name: "thread",
    component: Thread
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes, 
});

export default router;
