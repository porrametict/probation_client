export default {
    path: "account",
    component: () => import('../views/Account/AccountTemplate'),
    children: [
        {
            path: '',
            name: 'Account',
            component: () => import("../views/Officer/OfficerUser/index")
        },
        {
            path: 'user-profile',
            name: 'editUserProfile',
            component: () => import('../views/Account/editUserProfile.vue'),
        },
    ]
}