import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/home";
import Landing from "../pages/landing";
import Game from "../pages/game";
import Settings from "../pages/settings";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/app" element={<Home />} />
      <Route path="/app/game" element={<Game />} />
      <Route path="/app/settings" element={<Settings />} />
    </>
  )
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
