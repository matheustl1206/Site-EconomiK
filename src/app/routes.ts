import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { CasesPage } from "./pages/CasesPage";
import { InsightsPage } from "./pages/InsightsPage";
import { AboutPage } from "./pages/AboutPage";
import { WorkshopsPage } from "./pages/WorkshopsPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "servicos", Component: ServicesPage },
      { path: "cases", Component: CasesPage },
      { path: "insights", Component: InsightsPage },
      { path: "sobre", Component: AboutPage },
      { path: "workshops", Component: WorkshopsPage },
      { path: "contato", Component: ContactPage },
    ],
  },
]);
