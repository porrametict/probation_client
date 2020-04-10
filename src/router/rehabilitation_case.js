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
    ]
}