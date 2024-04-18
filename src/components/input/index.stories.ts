import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'with label',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};

export const Unstyled: Story = {
  args: {
    variant: 'unstyled',
  },
};
