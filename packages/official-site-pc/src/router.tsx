import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "./page/Main";
import Home from "./page/Main/Home";

const OnbToken = lazy(() => import('./page/Main/OnbToken'));
const Identity = lazy(() => import('./page/Identity'));
const Login = lazy(() => import('./page/Identity/Login'));
const Register = lazy(() => import('./page/Identity/Register'));

const router = createBrowserRouter([
	{
	  path: "/main",
    element: <Main />,
	  children: [
      {
        path: "/main/home",
        element: <Home />
      },
      {
        path: "/main/onb",
        element: <OnbToken />
      },
	  ]
	},
  {
    path: '/identity',
    element: <Identity />,
    children: [
      {
        path: '/identity/register',
        element: <Register />,
      },
      {
        path: '/identity',
        element: <Login />,
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to='/main/home' replace />
  }
]);

export default router;
