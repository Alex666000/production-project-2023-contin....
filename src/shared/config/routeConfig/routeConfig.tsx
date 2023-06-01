import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import React from 'react';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

// для каждого маршрута укажем путь до соответствующего компонента
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    // '*' - охватывать все маршруты если не один маршрут не отработал
    [AppRoutes.NOT_FOUND]: '*',
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
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
};

/*
RouteProps -- тип из react-router-dom
*/
