export default {
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

}