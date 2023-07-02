import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StartRating.module.scss';
import { Icon } from '@/shared/ui/Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';

interface StartRatingProps {
    className?: string;
    onSelect?: (startCount: number) => void;
    size?: number;
    selectedStars?: number
}

export const StartRating = memo((props: StartRatingProps) => {
    const {
        className,
        onSelect,
        size = 30,
        selectedStars = 0,
    } = props;

    const [isHovered, setIsHovered] = useState(false);
    // на какую звезду навели
    const [currentStarsCount, setCurrentStarsCount] = useState(0);
    // звезда выбрана не ноль...не selectedStars = 0
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    // навели
    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    // мышкой за пределы звезд вышли
    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    const stars = [1, 2, 3, 4, 5];

    return (
        <div className={classNames(cls.StartRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        /* starNumber - текущая звезда на которую направили
                         (количечество звёзд) */
                        [currentStarsCount >= starNumber ? cls.hovered : cls.normal],
                    )}
                    Svg={StarIcon}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
});
