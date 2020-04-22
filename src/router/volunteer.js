import account from "./account";

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
            path: 'assignment/:id/view',
            name: 'ViewAssignmentDetail',
            component: () => import('../views/Volunteer/Assignment/view')
        },
        {
            path: 'assignment/:id/form',
            name: 'AssignmentForm',
            component: () => import('../views/Volunteer/Assignment/form')
        },
        {
            path: "volunteer-account",
            component: () => import('../views/Account/AccountTemplate'),
            children: [
                {
                    path: 'user-profile',
                    name: 'VEditUserProfile',
                    component: () => import('../views/Account/editUserProfile.vue'),
                },
            ]
        }
    ]

}