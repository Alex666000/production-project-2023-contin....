import { Article } from './article';

// тип для state который будет отвечать за статью за  ее подгрузку ошибку и тд

export interface ArticleDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Article;
}
