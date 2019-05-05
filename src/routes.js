import After from './containers/After'
import WorldsBetween from './containers/WorldsBetween'
import Home from './containers/Home'
import ROgre from './containers/ROgre'

export default [
    {
        component: Home,
        navText: 'Home',
        url: '/',
    },
    {
        component: WorldsBetween,
        navText: 'Worlds Between Blood',
        url: '/worlds-between',
    },
    {
        component: After,
        navText: 'After',
        url: '/after',
    },
    {
        component: ROgre,
        navText: 'ROgre',
        url: '/rogre',
    },
]
