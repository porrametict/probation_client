import assigment from "./assigment";
import probation_case from "./probation_case";
import rehabilitation_case from "./rehabilitation_case";
import account from "./account";

export default {

    path: '/admin',
    name: 'Admin',
    component: () => import("../views/template"),
    children: [
        {
            path: 'home',
            name: 'Home',
            component: () => import("../views/Home"),
        },
        assigment,
        probation_case,
        rehabilitation_case,
        account,
        {
            path: 'register',
            name: 'Register',
            component: () => import("../views/Account/register")
        },


    ]

}