import CareerItemPage from "./modules/careers/components/item-page";
import CareersAdminPage from "./modules/careers/components/career-admin-page";
import CareersListPage from "./modules/careers/components/list-page";
import ContactPage from "./modules/contact";
import MessagesPage from "./modules/contact/components/admin-messages-page";
import DtPediaPage from "./modules/dtpedia/components/page";
import DtPediaAdminPage from "./modules/dtpedia/components/admin-page";
import HomePage from "./modules/main/submodules/home-page";
import HistoryPage from "./modules/main/submodules/history-page";
import AboutPage from "./modules/main/submodules/company-page";
import EventPage from "./modules/news/components/event-page";
import NewsAdminPage from "./modules/news/components/event-admin-page";
import LoginPage from "./modules/users/components/login";
import RegisterPage from "./modules/users/components/register";
import UsersListPage from "./modules/users/components/users-admin-page";

export default [
    {
        path: '/careers/:id',
        component: CareerItemPage
    },
    {
        path: '/admin/careers',
        component: CareersAdminPage
    },
    {
        path: '/careers',
        component: CareersListPage
    },
    {
        path: '/contact-us',
        component: ContactPage
    },
    {
        path: '/admin/messages',
        component: MessagesPage
    },
    {
        path: '/dtpedia/:id/:slug',
        component: DtPediaPage
    },
    {
        path: '/admin/dtpedia',
        component: DtPediaAdminPage
    },
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/history',
        component: HistoryPage
    },
    {
        path: '/about-us',
        component: AboutPage
    },
    {
        path: '/news/:id',
        component: EventPage
    },
    {
        path: '/admin/news',
        component: NewsAdminPage
    },
    {
        path: '/admin/login',
        component: LoginPage
    },
    {
        path: '/admin/register',
        component: RegisterPage
    },
    {
        path: '/admin/users',
        component: UsersListPage
    }
]