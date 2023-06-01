import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear', // кнопка без всего -- просто текст

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    // кнопки будут с разными темами
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;

  return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
              {children}
        </button>
  );
};
/*
и в конце меняем кнопку в ThemeSwitcher на нашу кастомную -- настроили кнопку переключения темы
(убрали у svg рамки и фон ее) -- theme={ThemeButton.CLEAR}:
<Button
    theme={ThemeButton.CLEAR}
    className={classNames(cls.ThemeSwitcher, {}, [className])}
     onClick={toggleTheme}>
     {theme === Theme.DARK ? <DarkIcon  /> : <LightIcon />}
</Button>
 */
