export default {
    path: "account",
    component: () => import('../views/Account/AccountTemplate'),
    children: [
        {
            path: 'user-profile',
            name: 'editUserProfile',
            component: () => import('../views/Account/editUserProfile.vue'),
        },
    ]
}