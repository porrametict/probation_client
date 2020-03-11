import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Template from '../views/template.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Template,
        children: [
            {
                path: '/home',
                name: 'Home',
                component: Home
            },
        ]
    },
    {
      path: '/volunteer',
      component: () => import('../views/Volunteer/VolunteerTemplate.vue'),
      children : [
        {
          path : '',
          name : 'Volunteer',
          component: () => import('../views/Volunteer/index')
        }

      ]
    },
];

const router = new VueRouter({
    routes
});

export default router
