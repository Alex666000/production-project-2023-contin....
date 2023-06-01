import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  // по умолчанию развернем Сайдбар
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    // сворачиваем и разворачиваем
    setCollapsed((prev) => !prev);
  };
  const toggleButtonText = 'toggle';
  return (
        <div
            // сворачиваем или разворачиваем
            className={classNames(cls.Sidebar, {
              [cls.collapsed]: collapsed,
            }, [className])}
        >
              <button
                  type="button"
                  onClick={onToggle}
              >
                    {toggleButtonText}
              </button>
              <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher className={cls.lang} />
              </div>
        </div>
  );
};

/*
в Арр добавим потом компонент Sidebar
 */
