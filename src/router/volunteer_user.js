export default {
    path: "volunteer",
    component: () => import('../views/Officer/VolunteerUser/VolunteerUserTemplate'),
    children: [
        {
            path: '',
            name: 'VolunteerUser',
            component: () => import("../views/Officer/VolunteerUser/index")
        }, {
            path: 'register',
            name: 'registerVolunteerUser',
            component: () => import("../views/Officer/VolunteerUser/register")
        }, {
            path: ':id/volunteer-edit',
            name: 'editVolunteerUser',
            component: () => import("../views/Officer/VolunteerUser/edit")
        },
    ]
}