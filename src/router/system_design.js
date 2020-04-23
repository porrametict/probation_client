export default {
    path: 'systemDesign',
    component: () => import("../views/System Design/SysTemplate"),
    children: [
        {
            path: 'input',
            name: 'TextInput',
            component: () => import("../views/System Design/TextInput"),
        },
        {
            path: 'button',
            name: 'Button',
            component: () => import("../views/System Design/Button"),
        },
    ]
}