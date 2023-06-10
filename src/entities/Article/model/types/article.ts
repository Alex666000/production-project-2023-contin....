// 3 типа блоков из которых строится наша статья
export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}
// ArticleBlockBase (убирает дублирование) - так как общее в БД в структуре любой статьи id и type
export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

// 1 блок
export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

// 2 блок
export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

// 3 блок
export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

// отдельный тип под блок - объединяющий блок
export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    // одновременно могут быть и IT и ECONOMICS поэтому [ ]
    type: ArticleType[];
    // в статье ожидаем массив блоков
    blocks: ArticleBlock[];
}

/*
- ArticleCodeBlock extends ArticleBlockBase: Наследуемся от него с базовыми типами все остальные блоки чтобы не дублировать  в блоках одни и те же поля
 */
