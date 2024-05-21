import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "./page/Main";
import Home from "./page/Main/Home";
import OnbToken from "./page/Main/OnbToken";
import Identity from "./page/Identity";
import Login from "./page/Identity/Login";
import Register from "./page/Identity/Register";
import Card from './page/CardEntry';
import AddCard from "./page/CardAdd";
import ExtractCard from "./page/CardExtract";

// const OnbToken = lazy(() => import('./page/Main/OnbToken'));
// const Identity = lazy(() => import('./page/Identity'));
// const Login = lazy(() => import('./page/Identity/Login'));
// const Register = lazy(() => import('./page/Identity/Register'));

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
    path: '/card',
    element: <Card />,
    children: [
      {
        path: '/card/add',
        element: <AddCard />
      }, {
        path: '/card/extract',
        element: <ExtractCard />
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to='/main/home' replace />
  }
]);

export default router;
