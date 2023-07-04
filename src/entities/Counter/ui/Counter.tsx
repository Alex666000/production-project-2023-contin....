import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { t } = useTranslation();

    const { increment, decrement, add } = useCounterActions();

    const handleInc = () => {
        // dispatch(counterActions.increment());
        increment();
    };

    const handleDec = () => {
        // dispatch(counterActions.decrement());
        decrement();
    };

    const handleAddFive = () => {
        // dispatch(counterActions.decrement());
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={handleAddFive}
                data-testid="increment-btn"
            >
                {t('add5')}
            </Button>
            <Button
                onClick={handleInc}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={handleDec}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
