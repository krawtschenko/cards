import type { Meta, StoryObj } from '@storybook/react'

import { CheckForm } from './checkForm'

const meta = {
  component: CheckForm,
  tags: ['autodocs'],
  title: 'Auth/Check Form',
} satisfies Meta<typeof CheckForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    email: 'eugen@proinfo.com',
  },
}
