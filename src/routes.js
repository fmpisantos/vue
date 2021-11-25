import Home from './components/Home.vue';
import About from './components/About.vue';
import SimpleHomePage from "./components/SimpleHomePage"


const routes = [
    { path: '/', component: SimpleHomePage, props: { msg: "Passing props on route test" } },
    { path: '/home', component: Home },
    { path: '/about', component: About },
];

export default routes;