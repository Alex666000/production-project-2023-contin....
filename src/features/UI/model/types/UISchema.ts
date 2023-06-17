// <Адрес страницы, позиция скролла> ключ = адрес страницы а номер = позиция скролла в цифрах в пикселях
export type ScrollSchema = Record<string, number>

export interface UISchema {
    scroll: ScrollSchema;
}
