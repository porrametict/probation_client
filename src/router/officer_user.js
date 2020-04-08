export default {
    path: "officer",
    component: () => import('../views/Officer/OfficerUser/OfficerUserTemplate'),
    children: [
        {
            path: '',
            name: 'OfficerUser',
            component: () => import("../views/Officer/OfficerUser/index")
        },{
            path: ':id/officer-edit',
            name: 'editOfficerProfile',
            component: () => import("../views/Officer/OfficerUser/edit")
        },
    ]
}