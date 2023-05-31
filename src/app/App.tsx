import React, {Suspense} from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import './styles/index.scss';
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar/ui/Sidebar/Sidebar";


const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar/>
                <div className='content-page'>
                    {/*страница и Sidebar должны быть в одной строчке одном блоке*/}
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
/*
content-page -- глобальный класс css module можно не использовать тк это корневой компонент
 */
