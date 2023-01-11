import Error from "../pages/Error";
import Main from "../pages/Main";
import { IRoutes } from "./types";

const routes: IRoutes = {
  main: {
    path: "/",
    element: Main,
  },
  error: {
    path: "*",
    element: Error,
  },
};
export { routes };
