import LoginPage from "modules/users/components/login";
import RegisterPage from "modules/users/components/register";
import UsersListPage from "modules/users/components/users-admin-page";
import NewsAdminPage from "modules/news/components/news-admin-page";
import DtPediaAdminPage from "modules/dtpedia/components/admin-page";
import MessagesPage from "modules/contact/components/admin-messages-page";
import CareersAdminPage from "modules/careers/components/career-admin-page";

export default [
  {
    path: "/users",
    label: "Users",
    component: UsersListPage,
    adminOnly: true
  },
  {
    path: "/register",
    component: RegisterPage,
    adminOnly: true
  },
  {
    path: "/login",
    component: LoginPage
  },
  {
    path: "/news",
    label: "News",
    component: NewsAdminPage
  },
  {
    path: "/dtpedia",
    label: "DTpedia",
    component: DtPediaAdminPage
  },
  {
    path: "/messages",
    label: "Messages",
    component: MessagesPage
  },
  {
    path: "/careers",
    label: "Careers",
    component: CareersAdminPage
  }
];
