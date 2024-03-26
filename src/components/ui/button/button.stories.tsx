import type { Meta, StoryObj } from '@storybook/react'

import { FiLogIn } from 'react-icons/fi'

import { Button } from './button'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disabled: false,
    text: 'Primary Button',
    variant: 'primary',
  },
}

export const PrimaryWithIcon: Story = {
  args: {
    disabled: false,
    icon: <FiLogIn />,
    text: 'Primary With Icon',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    disabled: false,
    text: 'Secondary Button',
    variant: 'secondary',
  },
}

export const SecondaryWithIcon: Story = {
  args: {
    disabled: false,
    icon: <FiLogIn />,
    text: 'Secondary Button With Icon',
    variant: 'secondary',
  },
}

export const FullWidth: Story = {
  args: {
    disabled: false,
    fullWidth: true,
    text: 'Full Width Primary Button',
    variant: 'primary',
  },
}
