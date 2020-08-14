import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'

import Landing from '@/components/Landing'
import About from '@/components/About'
import Matric from '@/components/Matric'
import Camp from '@/components/Camp'
import Orientation from '@/components/Orientation'
import Robotics from '@/components/Robotics'
import Lang from '@/components/Lang'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/matric',
            name: 'Matric',
            component: Matric
        },
        {
            path: '/camp',
            name: 'Camp',
            component: Camp
        },
        {
            path: '/orientation',
            name: 'Orientation',
            component: Orientation
        },
        {
            path: '/robotics',
            name: 'Robotics',
            component: Robotics
        },
        {
            path: '/languages',
            name: 'Lang',
            component: Lang
        }
    ]

})
