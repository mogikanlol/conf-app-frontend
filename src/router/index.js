import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ConferencePage from "../views/Conference.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/conference/:id",
    name: "conferencePage",
    component: ConferencePage
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

export default router;
