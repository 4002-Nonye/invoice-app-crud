import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useTheme } from '../context/ThemeContext';
import SideBar from './SideBar';

function AppLayout() {
    const { theme: uiTheme } = useTheme();
    useEffect(() => {
        if (uiTheme === 'dark') document.body.classList.add('dark');
        else {
            document.body.classList.remove('dark');
        }
        localStorage.setItem('theme', uiTheme);
    }, [uiTheme]);

    return (
        <>
            <SideBar />
            <main className="flex items-center justify-center pt-16">
                <Outlet />
            </main>
        </>
    );
}

export default AppLayout;
