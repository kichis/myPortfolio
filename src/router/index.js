import { createWebHistory, createRouter } from "vue-router";
import home from '@/components/home'
import aboutme from '@/components/aboutme'
import skills from '@/components/skills'
import works from '@/components/works'
import contact from '@/components/contact'

const routes = [
    {
        path: "/",
        name: "Home",
        component: home,
    },
    {
        path: "/about",
        name: "AboutMe",
        component: aboutme,
    },
    {
        path: "/skills",
        name: "Skills",
        component: skills,
    },
    {
        path: "/works",
        name: "Works",
        component: works,
    },
    {
        path: "/contact",
        name: "Contact",
        component: contact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;