import React from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";

interface NavbarProps {
    // компонент из вне будет получать дополнительный класс(поправить отступы или изменить размеры чтобы...)
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames('navbar', {}, [className])}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
        </div>
    );
};

