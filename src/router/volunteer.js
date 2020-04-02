export default {
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
            component: () => import('../components/Form/DuringProbationForm')
        },
        {
            path: 'ap-form/:id',
            name: 'AfterProbationForm',
            component: () => import('../components/Form/AfterProbationForm')
        },
        {
            path: 'user-profile',
            name: 'editUserProfile',
            component: () => import('../views/Account/editUserProfile.vue'),
        },

    ]

}