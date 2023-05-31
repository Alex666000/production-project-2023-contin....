
type Mods = Record<string, boolean | string>


export function classNames(cls: string, mods: Mods, additional: string[]): string {
    // возвращаем строку классов
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ');
}
// classNames('remove-btn', {hovered: true,selecteble: true, red: true}, ['pdg'])


/*
mods - объект,  ключ название класса а значение булеан флаг  если true класс добавим иначе нет
additional - массив дополнительных классов

Record из ТС - в качестве ключа строка а значение булеан
 */



