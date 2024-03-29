import type { Meta, StoryObj } from '@storybook/react'

import avatar from '@/assets/images/photo.png'

import { FormValues, Profile } from './profile'

const meta = {
  component: Profile,
  tags: ['autodocs'],
  title: 'Profile/Profile',
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    avatar: avatar,
    email: 'eugeniuszkravchenko@mail.pl',
    name: 'Eugen',
    onSubmit: (data: FormValues) => console.log(data),
  },
}
