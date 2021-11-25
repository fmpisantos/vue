import Home from './pages/Home.vue';
import About from './pages/About.vue';
import SimpleHomePage from "./pages/SimpleHomePage"


const routes = [
    { path: '/', component: SimpleHomePage, props: { msg: "Passing props on route test" } },
    { path: '/home', component: Home },
    { path: '/about', component: About },
];

export default routes;