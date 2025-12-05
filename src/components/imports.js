import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home.jsx'));
const Projects = lazy(() => import('./pages/project.jsx'));
const Contact = lazy(() => import('./pages/contact.jsx'));
const Experience = lazy(() => import('./pages/experience.jsx'));
const About = lazy(() => import('./pages/about.jsx'));
const NotFound = lazy(() => import('./pages/404.jsx'));



export {
    Home,
    Projects,
    Contact,
    Experience,
    About,
    NotFound
};
