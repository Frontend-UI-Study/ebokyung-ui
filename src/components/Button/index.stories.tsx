import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';
import { wrapper } from './button.css';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['solid', 'outline', 'ghost'],
      control: { type: 'radio' },
    },
    size: {
      options: ['large', 'medium', 'small', 'xSmall'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary', 'negative'],
      control: { type: 'radio' },
    },
    disabled: {
      options: ['true', 'false'],
      control: { type: 'boolean' },
    },
    pending: {
      options: ['true', 'false'],
      control: { type: 'boolean' },
    },
  },
  render: props => (
    <div className={wrapper}>
      {['primary', 'secondary', 'negative'].map(item => (
        // TODO: type 부분 고민
        <Button {...props} color={item as typeof props.color} onClick={() => alert('Clicked!')}>
          Button
        </Button>
      ))}
    </div>
  ),
};
export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultOnClick: Story = {
  args: {
    children: 'On click!',
  },
};

export const SolidLarge: Story = {
  args: {
    variant: 'solid',
    size: 'large',
  },
};

export const OutlineMedium: Story = {
  args: {
    variant: 'outline',
  },
};

export const GhostSmall: Story = {
  args: {
    variant: 'ghost',
    size: 'small',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Pending: Story = {
  args: {
    pending: true,
  },
};

export const WithIcon: Story = {
  args: {
    prefix: '🍓',
  },
};
