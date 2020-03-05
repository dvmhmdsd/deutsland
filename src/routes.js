import CareerItemPage from "modules/careers/components/item-page";
import CareersListPage from "modules/careers/components/list-page";
import ContactPage from "modules/contact";
import DtPediaPage from "modules/dtpedia/components/page";
import HomePage from "modules/main/submodules/home-page";
import HistoryPage from "modules/main/submodules/history-page";
import AboutPage from "modules/main/submodules/company-page";
import NewsPage from "modules/news/components/news-page";

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
];
