import type { Meta, StoryObj } from '@storybook/react'

import { ForgotForm, FormValues } from './ForgotForm'

const meta = {
  component: ForgotForm,
  tags: ['autodocs'],
  title: 'Auth/Forgot Form',
} satisfies Meta<typeof ForgotForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: (data: FormValues) => console.log(data),
  },
}
