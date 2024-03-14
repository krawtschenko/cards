import type { Meta, StoryObj } from '@storybook/react'

import { FormValues, SignUpForm } from './SignUpForm'

const meta = {
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'Auth/Registration Form',
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: (data: FormValues) => console.log(data),
  },
}
