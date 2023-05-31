import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    // по умолчанию развернем Сайдбар
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        // сворачиваем и разворачиваем
        setCollapsed(prev => !prev);
    }

    return (
        <div
            // сворачиваем или разворачиваем
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])} // класс [cls.collapsed] зависит от этого состояния collapsed
        >
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
              {/*todo  <LangSwitcher /> потом сделать*/}
            </div>
        </div>
    );
};

/*
в Арр добавим потом компонент Sidebar
 */
