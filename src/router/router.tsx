import {createBrowserRouter, NavLink, Outlet} from 'react-router-dom';
import {RedirectToWelcome1} from '../components/RedirectToWelcome1';
import React from 'react';
import {MainLayout} from '../layout/MainLayout';
import {welcomeRoutes} from './welcomeRoutes';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <RedirectToWelcome1/>,
        children: [
            welcomeRoutes
        ]
    }
])
