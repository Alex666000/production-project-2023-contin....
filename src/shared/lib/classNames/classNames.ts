type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    // возвращаем строку классов
    return [
        cls,
        // чтобы не прилетали в массив undefined
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
}
// classNames('remove-btn', {hovered: true,selecteble: true, red: true}, ['pdg'])

/*
'remove-btn' - основной класс

mods - объект,  ключ название класса а значение булеан флаг  если true класс добавим иначе нет

mods - добавляются в самый конец например: const expected = 'someClass class1 class2 hovered scrollable';

additional - массив дополнительных классов

Record из ТС - в качестве ключа строка а значение булеан
 */
