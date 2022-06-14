import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      
      component: () =>
        import("./views/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      
      component: () =>
        import("./views/Contact.vue")
    },
    {
      path: "/portfolio",
      name: "portfolio",
      
      component: () =>
        import("./views/Portfolio.vue")
    },

  ]
});
