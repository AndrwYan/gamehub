import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import GameDetailPage from "./pages/GameDetailPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import DeveloperDetailPage from "./pages/DeveloperDetailPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    // children:就是孩子路由
    children: [
      { index: true, element: <HomePage /> },
      { path: 'developer/:slug', element: <DeveloperDetailPage /> }
    ]
  }
]);

export default router;