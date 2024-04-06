import type { Meta, StoryObj } from '@storybook/react'

import { PiPencilLine, PiPlayCircle, PiTrash } from 'react-icons/pi'

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
    data: [
      { icon: <PiPlayCircle />, name: 'Learn' },
      { icon: <PiPencilLine />, name: 'Edit' },
      { icon: <PiTrash />, name: 'Delete' },
    ],
    disabled: true,
  },
}
