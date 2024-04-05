import type { Meta, StoryObj } from '@storybook/react'

import avatar from '@/assets/images/photo.png'

import { DropdownMenu } from './dropdownMenu'

const meta = {
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    avatar,
  },
}
