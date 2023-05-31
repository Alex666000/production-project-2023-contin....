import {AboutPageAsync} from "./ui/AboutPage.async";

export {
    AboutPageAsync as AboutPage
};

/*
наружу выходит только асинхронный компонент  наружу нужен асинхронный чанк его используем в роутинге чтобы уменьшить  размер бандла
отдаем наружу под таким названием AboutPage
 */