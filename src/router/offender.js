export default {
    path: "offender",
    component: () => import('../views/Officer/Offender/OffenderTemplate'),
    children: [
        {
            path: '',
            name: 'Offender',
            component: () => import("../views/Officer/Offender/index")
        },{
            path: ':id/offender-edit',
            name: 'editOffender',
            component: () => import("../views/Officer/Offender/edit")
        },
        {
            path: ':id/offender-view',
            name: 'viewOffender',
            component: () => import("../views/Officer/Offender/view")
        },
    ]
}