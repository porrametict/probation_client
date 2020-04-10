export default {
    path: 'rehabilitation-case',
    component: () => import("../views/Officer/RehabilitationCase/RehabilitationTemplate"),
    children: [
        {
            path: '',
            name: "RehabilitationCase",
            component: () => import("../views/Officer/RehabilitationCase/index"),
        },
        {
            path: 'upload-excel',
            name: "RehabilitationCaseExcelUpload",
            component: () => import("../views/Officer/RehabilitationCase/ExcelRehabilitationCase"),
        },
        {
            path: ':id/edit-view',
            name: "RehabilitationCaseView",
            component: () => import("../views/Officer/RehabilitationCase/view"),
        },
        {
            path: ':id/edit-case',
            name: "RehabilitationCaseEdit",
            component: () => import("../views/Officer/RehabilitationCase/editCase"),
        },

        {
            path: ':id/edit-rehabilitation',
            name: "RehabilitationCaseRehabilitationEdit",
            component: () => import("../views/Officer/RehabilitationCase/editRehabilitation"),
        },
        {
            path: ':id/create-rehabilitation',
            name: "RehabilitationCaseRehabilitationCreate",
            component: () => import("../views/Officer/RehabilitationCase/createRehabilitation"),
        },

        {
            path: ':id/edit-ssh',
            name: "RehabilitationCaseSSHEdit",
            component: () => import("../views/Officer/RehabilitationCase/editSocialServiceHour"),
        },
        {
            path: ':id/create-ssh',
            name: "RehabilitationCaseSSHCreate",
            component: () => import("../views/Officer/RehabilitationCase/createSocialServiceHour"),
        },
    ]
}