export default {
    path: 'systemDesign',
    component: () => import("../views/System Design/SysTemplate"),
    children: [
        {
            path: '',
            name: 'TextInput',
            component: () => import("../views/System Design/TextInput"),
        },
    ]
}