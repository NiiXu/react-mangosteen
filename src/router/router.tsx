import {createBrowserRouter, NavLink, Outlet} from 'react-router-dom';
import {NotFoundPage} from '../pages/NotFoundPage';
import React from 'react';
import {Root} from '../components/Root';
import {Welcome1} from '../pages/Welcome1';
import {Welcome2} from '../pages/Welcome2';
import {Welcome3} from '../pages/Welcome3';
import {Welcome4} from '../pages/Welcome4';


export const router = createBrowserRouter([
    {
        path:'/home',
        element:<div>home</div>
    },
    {
        path:'/',
        element:<Root/>
    },
    {
        path: '/welcome',
        errorElement: <NotFoundPage/>,
        children: [
            {
                path: '1',
                element: <Welcome1/>
            },
            {
                path: '2',
                element: <Welcome2/>
            },
            {
                path: '3',
                element: <Welcome3/>

            },
            {
                path: '4',
                element: <Welcome4/>
            },
        ]
    }
])
