import CareerItemPage from "modules/careers/components/item-page";
import CareersAdminPage from "modules/careers/components/career-admin-page";
import CareersListPage from "modules/careers/components/list-page";
import ContactPage from "modules/contact";
import MessagesPage from "modules/contact/components/admin-messages-page";
import DtPediaPage from "modules/dtpedia/components/page";
import DtPediaAdminPage from "modules/dtpedia/components/admin-page";
import HomePage from "modules/main/submodules/home-page";
import HistoryPage from "modules/main/submodules/history-page";
import AboutPage from "modules/main/submodules/company-page";
import NewsPage from "modules/news/components/news-page";
import NewsAdminPage from "modules/news/components/news-admin-page";
import LoginPage from "modules/users/components/login";
import RegisterPage from "modules/users/components/register";
import UsersListPage from "modules/users/components/users-admin-page";

export default [
  {
    path: "/careers/:id",
    component: CareerItemPage
  },
  {
    path: "/careers",
    component: CareersListPage
  },
  {
    path: "/contact-us",
    component: ContactPage
  },
  {
    path: "/dtpedia/:id/:slug",
    component: DtPediaPage
  },
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/history",
    component: HistoryPage
  },
  {
    path: "/company",
    component: AboutPage
  },
  {
    path: "/news/:id",
    component: NewsPage
  },
  {
    path: "/admin",
    group: [
      {
        path: "/users",
        component: UsersListPage
      },
      {
        path: "/register",
        component: RegisterPage
      },
      {
        path: "/login",
        component: LoginPage
      },
      {
        path: "/news",
        component: NewsAdminPage
      },
      {
        path: "/dtpedia",
        component: DtPediaAdminPage
      },
      {
        path: "/messages",
        component: MessagesPage
      },
      {
        path: "/careers",
        component: CareersAdminPage
      }
    ]
  }
];
