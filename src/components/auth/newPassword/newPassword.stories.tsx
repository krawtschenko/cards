import type { Meta, StoryObj } from '@storybook/react'

import { FormValues, NewPassword } from './NewPassword'

const meta = {
  component: NewPassword,
  tags: ['autodocs'],
  title: 'Auth/New password Form',
} satisfies Meta<typeof NewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: (data: FormValues) => console.log(data),
  },
}
