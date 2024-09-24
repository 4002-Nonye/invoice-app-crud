import avatar from '../assets/avatar.svg';
import logo from '../assets/logo.svg';
import moonIcon from '../assets/moon.svg';
import sunIcon from '../assets/sun.svg';
import { useTheme } from '../context/ThemeContext';

function SideBar() {
    const { toggleTheme, theme } = useTheme();

    return (
        <aside className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between bg-darkblue-300 lg:h-screen lg:w-[unset] lg:flex-col lg:rounded-br-3xl lg:rounded-tr-3xl">
            <img src={logo} alt="logo" className="h-20 lg:h-[unset]" />

            <div className="flex items-center divide-x-2 divide-grey-100 lg:flex-col lg:divide-x-0 lg:divide-y-[0.5px]">
                <img
                    onClick={toggleTheme}
                    src={theme === 'light' ? moonIcon : sunIcon}
                    alt="themeIcon"
                    className="cursor-pointer p-5 lg:p-8"
                />
                <img src={avatar} alt="avatar" className="w-full p-5 lg:p-7" />
            </div>
        </aside>
    );
}

export default SideBar;
