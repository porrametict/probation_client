export default {
    path: 'systemDesign',
    component: () => import("../views/System Design/SysTemplate"),
    children: [
        {
            path: 'textinput',
            name: 'TextInput',
            component: () => import("../views/System Design/TextInput"),
        },
    ]
}