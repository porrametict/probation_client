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
        children: [
            {
                path: '',
                name: 'Volunteer',
                component: () => import('../views/Volunteer/Assignment/index')
            },
            {
                path: 'view/:id',
                name: 'ViewAssignmentDetail',
                component: () => import('../views/Volunteer/Assignment/view')
            },
            {
                path: 'dp-form/:id',
                name: 'DuringProbationForm',
                component: () => import('../views/Volunteer/Assignment/Form/DuringProbationForm')
            },
            {
                path: 'ap-form/:id',
                name: 'AfterProbationForm',
                component: () => import('../views/Volunteer/Assignment/Form/AfterProbationForm')
            },

        ]
    },
];

const router = new VueRouter({
    routes
});

export default router
