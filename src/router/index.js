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
                path: 'home',
                name: 'Home',
                component: Home
            },
            {
                path: 'profile',
                name: 'Profile',
                component: () => import("../views/UserAdmin/Profile"),
            },
            {
                path: 'probation-case',
                component: () => import("../views/Officer/ProbationCase/ProbationCaseTemplate"),
                children: [
                    {
                        path: '',
                        name: "ProbationCase",
                        component: () => import("../views/Officer/ProbationCase/index"),
                    },
                    {
                        path: 'upload-excel',
                        name: "ProbationCaseExcelUpload",
                        component: () => import("../views/Officer/ProbationCase/ExcelProbationCase"),
                    },
                    {
                        path: ':id/view',
                        name: "ProbationCaseView",
                        component: () => import("../views/Officer/ProbationCase/view"),
                    },
                ]
            },
            {
                path: 'rehabilitation-case',
                component: () => import("../views/Officer/RehabilitationCase/RehabilitationTemplate"),
                children: [
                    {
                        path: '',
                        name: "RehabilitationCase",
                        component: () => import("../views/Officer/RehabilitationCase/index"),
                    },
                    {
                        path: 'upload-excel',
                        name: "RehabilitationCaseExcelUpload",
                        component: () => import("../views/Officer/RehabilitationCase/ExcelRehabilitationCase"),
                    },
                    {
                        path: ':id/view',
                        name: "RehabilitationCaseView",
                        component: () => import("../views/Officer/RehabilitationCase/view"),
                    },
                ]
            },
            {
                path: 'assignment',
                component: () => import("../views/Officer/Assignment/AssignmentTemplate"),
                children: [
                    {
                        path: '',
                        name: 'Assignment',
                        component: () => import("../views/Officer/Assignment/index"),
                    },
                    {
                        path: ':id/view',
                        name: "AssignmentView",
                        component: () => import("../views/Officer/Assignment/view"),
                    },
                    {
                        path: 'create',
                        name: "AssignmentCreate",
                        component: () => import("../views/Officer/Assignment/create"),
                    },
                ]

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
            {
                path: 'user-profile',
                name: 'editUserProfile',
                component: () => import('../views/Account/editUserProfile.vue'),
            },

        ]
    },
];

const router = new VueRouter({
    routes
});

export default router
