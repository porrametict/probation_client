import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import admin from "./admin";
import volunteer from "./volunteer";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    admin,
    volunteer,
];

const router = new VueRouter({
    routes
});

export default router
