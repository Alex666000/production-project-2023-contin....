import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    // компонент из вне будет получать дополнительный класс (поправить отступы или изменить размеры чтобы...)
    className?: string;
}
const homeLinkText = 'Главная';
const aboutUsText = 'О себе';

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                {homeLinkText}
            </AppLink>
            <AppLink theme={AppLinkTheme.RED} to="/about">
                {aboutUsText}
            </AppLink>
        </div>
    </div>
);
