import {
    createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

// вывели типы из библиотек
type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    // когда библиотеки подгрузились
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

// Обе либы зависят друг от друга
// подгружаем библы лениво асинхронно чтобы не тянулись в бандл
const getAsyncAnimationModules = async () => {
    return Promise.all([
        // асинхронный импорт
        import('@react-spring/web'),
        import('@use-gesture/react'),
    ]);
};
// пользуемся сверху useAnimationLibs
export const useAnimationLibs = () => {
    return useContext(AnimationContext) as Required<AnimationContextPayload>;
};

// Компонент
export const AnimationProvider = ({ children }: { children: ReactNode }) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            //  библиотеки подгрузились успешно
            setIsLoaded(true);
        });
    }, []);

    const value = useMemo(() => ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded,
    }), [isLoaded]);

    return (
        <AnimationContext.Provider
            value={value}
        >
            {children}
        </AnimationContext.Provider>
    );
};
/*
Теперь везде где понадобятся нам эти 2 библы  мы можем компонент в этот провайдер
 обернуть и они лениво подгрузятся там где нужны
 */
