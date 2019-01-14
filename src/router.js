import Vue from 'vue';
import Router from 'vue-router';
import Trending from './components/trending/Trending'
import Movies from './components/movies/Movies'
import Serials from './components/serials/Serials';
import About from './components/about/About'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/trending',
            name: 'trending',
            component: Trending
        },
        {
            path: '/movies',
            name: 'movies',
            component: Movies
        },
        {
            path: '/serials',
            name: 'serials',
            component: Serials
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
});