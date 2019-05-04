import After from './containers/After'
import BetweenWorlds from './containers/BetweenWorlds'
import Home from './containers/Home'
import ROgre from './containers/ROgre'

export default [
    {
        component: Home,
        navText: 'Home',
        url: '/',
    },
    {
        component: BetweenWorlds,
        navText: 'Blood Between Worlds',
        url: '/between-worlds',
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
