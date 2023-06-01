import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary', // основная тема
    SECONDARY = 'primary', // тема в инвертед -- противоположным цветом
    // чтобы внедрить новую тему добавляем + добавляем сам класс в AppLink.module.scss + в Navbar меняем тему на red:
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string
    // темы для ui kit
    theme?: AppLinkTheme
}

// кастомная ссылка - в приложении все ссылки меняем на кастомные
export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    children,
    className,
    // тема по умолчанию
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
        <Link
            to={to}
            // передаем тему
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
              {children}
        </Link>
  );
};
