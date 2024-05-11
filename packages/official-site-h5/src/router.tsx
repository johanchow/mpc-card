import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from './page/Main'
import Home from './page/Main/Home';
import OnbToken from "./page/Main/OnbToken";

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
]);

export default router;
