import { createBrowserRouter } from "react-router-dom";
import Main from './page/Main'
import Home from './page/Main/Home';
import OnbToken from "./page/Main/OnbToken";
import Identity from './page/Identity';
import Login from "./page/Identity/Login";
import Register from "./page/Identity/Register";

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
  }
]);

export default router;
