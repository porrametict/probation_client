export default {
    path: 'probation-case',
    component: () => import("../views/Officer/ProbationCase/ProbationCaseTemplate"),
    children: [
        {
            path: '',
            name: "ProbationCase",
            component: () => import("../views/Officer/ProbationCase/index"),
        },
        {
            path: 'upload-excel',
            name: "ProbationCaseExcelUpload",
            component: () => import("../views/Officer/ProbationCase/ExcelProbationCase"),
        },
        {
            path: ':id/view',
            name: "ProbationCaseView",
            component: () => import("../views/Officer/ProbationCase/view"),
        },
        {
            path: ':id/edit-case',
            name: "ProbationCaseEdit",
            component: () => import("../views/Officer/ProbationCase/editCase"),
        },
        {
            path: ':id/edit-classification',
            name: "ProbationCaseClassificationEdit",
            component: () => import("../views/Officer/ProbationCase/editClassification"),
        },
        {
            path: ':id/create-classification',
            name: "ProbationCaseClassificationCreate",
            component: () => import("../views/Officer/ProbationCase/createClassification"),
        },
    ]
}
