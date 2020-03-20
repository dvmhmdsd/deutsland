import CareerItemPage from "modules/careers/components/item-page";
import ContactPage from "modules/contact";
import DtPediaPage from "modules/dtpedia/components/page";
import HomePage from "modules/main/submodules/home-page";
import HistoryPage from "modules/main/submodules/history-page";
import AboutPage from "modules/main/submodules/company-page";
import NewsPage from "modules/news/components/news-page";
import DTPediaListPage from "modules/dtpedia/components/list-page";
import ProjectsPage from "modules/projects/components/page";
import CareersPage from "modules/careers";
import SolutionsPage from "modules/solutions/components/page";

export default [
  {
    path: "/careers/:id",
    component: CareerItemPage
  },
  {
    path: "/",
    component: HomePage,
    label: "Home"
  },
  {
    path: "/company",
    component: AboutPage,
    label: "Company"
  },
  {
    path: "/history",
    component: HistoryPage,
    label: "History"
  },
  {
    path: "/solutions",
    component: SolutionsPage,
    label: "Solutions"
  },
  {
    path: "/projects",
    component: ProjectsPage,
    label: "Projects"
  },
  {
    path: "/careers",
    component: CareersPage,
    label: "Careers"
  },
  {
    path: "/contact-us",
    component: ContactPage,
    label: "Contact"
  },
  {
    path: "/dtpedia",
    component: DTPediaListPage
  },
  {
    path: "/dtpedia/:id/:slug",
    component: DtPediaPage
  },
  {
    path: "/news/:id",
    component: NewsPage
  },
];
