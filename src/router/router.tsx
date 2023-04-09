import {createBrowserRouter, NavLink, Outlet} from 'react-router-dom';
import {NotFoundPage} from '../pages/NotFoundPage';
import React from 'react';
import {MainLayout} from '../layout/MainLayout';
import {welcomeRoutes} from './welcomeRoutes';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <NotFoundPage/>,
        children: [
            welcomeRoutes
        ]
    }
])
