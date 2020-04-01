import assigment from "./assigment";
import probation_case from "./probation_case";
import rehabilitation_case from "./rehabilitation_case";

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


    ]

}