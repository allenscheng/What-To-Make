/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};
var Search = {
  template: "#search",
  data: function() {
    return {
      message: "Hello"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};
var router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/search", component: Search }
  ]

  // scrollBehavior: function(to, from, savedPosition) {
  //   return { x: 0, y: 0 };
  // }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
