import type { Meta, StoryObj } from '@storybook/react'

import { FormValues, RegistrationForm } from './registrationForm'

const meta = {
  component: RegistrationForm,
  tags: ['autodocs'],
  title: 'Auth/Registration Form',
} satisfies Meta<typeof RegistrationForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: (data: FormValues) => console.log(data),
  },
}
