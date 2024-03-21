import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components/ui/typography/typography'
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
    children: <Typography variant={'subtitle2'}>Primary Button</Typography>,
    disabled: false,
    variant: 'primary',
  },
}

export const PrimaryWithIcon: Story = {
  args: {
    children: (
      <>
        <FiLogIn />
        <Typography variant={'subtitle2'}>Primary With Icon</Typography>
      </>
    ),
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: <Typography variant={'subtitle2'}>Secondary Button</Typography>,
    disabled: false,
    variant: 'secondary',
  },
}

export const SecondaryWithIcon: Story = {
  args: {
    children: (
      <>
        <FiLogIn />
        <Typography variant={'subtitle2'}>Secondary Button With Icon</Typography>
      </>
    ),
    disabled: false,
    variant: 'secondary',
  },
}

export const FullWidth: Story = {
  args: {
    children: <Typography variant={'subtitle2'}>Full Width Primary Button</Typography>,
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}
