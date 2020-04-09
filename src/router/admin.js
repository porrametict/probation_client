import assigment from "./assigment";
import probation_case from "./probation_case";
import rehabilitation_case from "./rehabilitation_case";
import account from "./account";
import officer_user from "./officer_user";
import volunteer_user from "./volunteer_user";
import offender from "./offender";

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
        officer_user,
        volunteer_user,
        offender,


    ]

}