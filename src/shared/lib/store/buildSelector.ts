import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

// то что возвращаем дженериком подхватывается и автоматически типизируется
type Selector<T> = (state: StateSchema) => T;
type Result<T> = [() => T, Selector<T>]

export function buildSelector<T>(selector: Selector<T>): Result<T> {
    const useSelectorHook = () => {
        return useSelector(selector);
    };

    return [useSelectorHook, selector];
}
