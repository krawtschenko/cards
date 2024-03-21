import type { Meta, StoryObj } from '@storybook/react'

import { Profile } from './profile'

const meta = {
  component: Profile,
  tags: ['autodocs'],
  title: 'Profile/Profile',
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
