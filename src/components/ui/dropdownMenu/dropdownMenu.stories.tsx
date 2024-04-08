import type { Meta, StoryObj } from '@storybook/react'

import avatar from '@/assets/images/photo.png'
import { PiPencilLine, PiPlayCircle, PiTrash } from 'react-icons/pi'

import { DropdownMenu } from './dropdownMenu'

const meta = {
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

const profileData = {
  avatar,
  mail: 'Ivan@gmail.com',
  name: 'Ivan',
}

export const WithoutAvatar: Story = {
  args: {
    data: [
      { icon: <PiPlayCircle />, name: 'Learn' },
      { icon: <PiPencilLine />, name: 'Edit' },
      { icon: <PiTrash />, name: 'Delete' },
    ],
    disabled: false,
  },
}

export const WithAvatar: Story = {
  args: {
    data: [
      { icon: <PiPlayCircle />, name: 'Learn' },
      { icon: <PiPencilLine />, name: 'Edit' },
      { icon: <PiTrash />, name: 'Delete' },
    ],
    disabled: false,
    profileData,
  },
}
