import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button';

const meta: Meta<any> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<ButtonProps>;

type PrimaryButtonPropsType = { primary: boolean; label: string; };

export const Primary = {
    args: {
        primary: true,
        label: 'Button',
    } as PrimaryButtonPropsType,
};

export const Secondary: Story = {
    args: {
        label: 'Button',
    } as any,
};

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Button',
    } as any,
};

export const Small: Story = {
    args: {
        size: 'small',
        label: 'Button',
    } as any,
};
