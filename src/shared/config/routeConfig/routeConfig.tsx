import { RouteProps } from "react-router-dom";
import {MainPage} from "pages/MainPage";
import React from "react";
import {AboutPage} from "pages/AboutPage";

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
}

// для каждого маршрута укажем путь до соответствующего компонента
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
};

// роуты: маршрут для них и компонент который должны отрисовывать
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
};

/*
RouteProps -- тип из react-router-dom
*/