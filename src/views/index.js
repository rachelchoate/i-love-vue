import About from './About.vue';
import Game from './Game.vue';
import Settings from './Settings.vue';

const routes = [
    {
        component: About,
        path: '/',
        name: 'Home',
    },
    {
        component: Game,
        path: '/game',
        name: 'Game',
    },
    {
        component: Settings,
        path: '/settings',
        name: 'Settings',
    },
];

export default routes;
