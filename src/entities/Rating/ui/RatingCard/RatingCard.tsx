import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StartRating } from '@/shared/ui/StartRating/StartRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    // заголовок
    title?: string;
    // то что будем писать внутри модалки
    feedbackTitle?: string;
    // написать отзыв в модалке
    hasFeedback?: boolean;
    // отменить отправку отзыва
    onCancel?: (starsCount: number) => void;
    // отправить отзыв - feedback - обратная связь
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        hasFeedback,
        feedbackTitle,
        title,
        onCancel,
        onAccept,
    } = props;

    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(0);
    const [feedback, setFeedback] = useState('');

    // выбор кол-ва звёзд
    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    // при нажатии на кнопку "Отправить"
    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    // при нажатии на кнопку "Закрыть"
    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
            />
        </>
    );

    return (
        <Card className={classNames('', {}, [className])}>
            <VStack align="center" gap="8">
                <Text title={title} />
                <StartRating size={40} onSelect={onSelectStars} />
            </VStack>

            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    {modalContent}
                    <HStack max gap="16" justify="end">
                        <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                            {t('Закрыть')}
                        </Button>
                        <Button onClick={acceptHandler}>
                            {t('Отправить')}
                        </Button>
                    </HStack>
                </Modal>
            </BrowserView>

            <MobileView>
                <VStack max gap="32">
                    <Drawer isOpen={isModalOpen} lazy>
                        {modalContent}
                        <Button fullWidth onClick={acceptHandler} size={ButtonSize.L}>
                            {t('Отправить')}
                        </Button>
                    </Drawer>
                </VStack>
            </MobileView>
        </Card>
    );
});
