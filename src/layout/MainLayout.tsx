import {Navigate,Outlet, useNavigate} from 'react-router-dom'
import React from 'react';
export const MainLayout: React.FC = () => {
    const hasRead = localStorage.getItem('hasReadWelcomes')
    if (hasRead){
        return <Navigate to="/home"></Navigate>
    }else {
        return <div><Outlet /></div>
    }
}
