import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import DeveloperDetailPage from "./pages/DeveloperDetailPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AccountPage from "./pages/AccountPage";

const router = createBrowserRouter([  
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects/', element: <ProjectPage /> },
      { path: 'logining/', element: <LoginPage /> },
      { path: 'account/', element: <AccountPage /> },
      { path: 'signup/', element: <SignupPage /> },
      { path: 'developer/:slug', element: <DeveloperDetailPage /> },
      { path: 'project/:slug', element: <ProjectDetailPage /> }
    ]
  }
]);

export default router;

