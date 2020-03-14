import LoginPage from "modules/users/components/login";
import RegisterPage from "modules/users/components/register";
import UsersListPage from "modules/users/components/users-admin-page";
import NewsAdminPage from "modules/news/components/news-admin-page";
import DtPediaAdminPage from "modules/dtpedia/components/admin-page";
import MessagesPage from "modules/contact/components/messages-admin-page";
import CareersAdminPage from "modules/careers/components/career-admin-page";
import DashboardHome from "modules/main/submodules/admin-home-page";
import ClientsAdminPage from "modules/main/submodules/clients-admin-page";

export default [
  {
    path: "/",
    label: "Home",
    component: DashboardHome
  },
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
    path: "/clients",
    label: "Clients",
    component: ClientsAdminPage
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
