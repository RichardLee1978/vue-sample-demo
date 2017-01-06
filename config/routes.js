

import Home from "../page/index.vue"
import List from "../page/list.vue"
const routers = [{
    path: '*',
    name: 'home',
    component: Home
},
    {
        path: '/',
        name: 'index',
        component: Home
    },
    {
        path: '/list',
        name: 'list',
        component: List
    }
];
export default routers;