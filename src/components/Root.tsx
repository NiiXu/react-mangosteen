import {Navigate,Outlet, useNavigate} from 'react-router-dom'
import React from 'react';
export const Root: React.FC = () => {
    const hasRead = localStorage.getItem('hasReadWelcomes')
    if (hasRead){
        return <Navigate to="/home"></Navigate>
    }else {
        return <Navigate to="/welcome/1"></Navigate>
    }
}
