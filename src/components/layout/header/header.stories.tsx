import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Layout/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

const style = { width: '1300px' }

export const Loginned: Story = {
  args: {
    loggedIn: false,
    style,
  },
}
export const NotLoginned: Story = {
  args: {
    loggedIn: true,
    style,
  },
}
