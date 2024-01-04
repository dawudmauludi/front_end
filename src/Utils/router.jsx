import { createBrowserRouter } from "react-router-dom";
import GuestSkin from "../Skin/guest";
import GuardedSkin from "../Skin/guarded";
import { routeCreate, routeDashboard, routeFirst, routeSignin, routerRegis } from "../Constant/routeName";
import { LoginPage } from "../Pages/LoginPage";
import { DashboardPage } from "../Pages/DashboardPage";
import { CreateConsul } from "../Pages/CreateConsul";
import { FirstVaccination } from "../Pages/FirstVaccination";
import { RegistrasiVaccination } from "../Pages/RegisVaccination";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestSkin/>,
        children: [
            {
                path: routeSignin,
                element: <LoginPage/>
            }
        ]
    },
    {
        path: '/',
        element: <GuardedSkin/>,
        children: [
            {
                path: routeDashboard,
                element: <DashboardPage/>
            },
            {
                path: routeCreate,
                element: <CreateConsul/>
            },
            {
                path: routeFirst,
                element: <FirstVaccination/>
            },
            {
                path: routerRegis,
                element: <RegistrasiVaccination/>
            },
        ]
      },
])

export default router

