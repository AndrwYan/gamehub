import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import DeveloperDetailPage from "./pages/DeveloperDetailPage";
import ProjectPage from "./pages/ProjectPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects/', element: <ProjectPage /> },
      { path: 'developer/:slug', element: <DeveloperDetailPage /> }
    ]
  }
]);

export default router;