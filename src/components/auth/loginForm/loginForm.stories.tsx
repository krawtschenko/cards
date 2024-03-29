import type { Meta, StoryObj } from '@storybook/react'

import { FormValues, LoginForm } from './loginForm'

const meta = {
  component: LoginForm,
  tags: ['autodocs'],
  title: 'Auth/Login Form',
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: (data: FormValues) => console.log(data),
  },
}
