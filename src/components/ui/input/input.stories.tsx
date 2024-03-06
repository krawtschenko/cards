import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta = {
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disabled: false,
    label: 'Test',
    placeholder: 'placeholder',
  },
}

export const WithPassword: Story = {
  args: {
    disabled: false,
    label: 'Test',
    placeholder: 'placeholder',
    type: 'password',
  },
}

export const WithError: Story = {
  args: {
    error: 'Error!',
    label: 'Test',
  },
}

export const WithSearch: Story = {
  args: {
    disabled: false,
    label: 'Test',
    placeholder: 'placeholder',
    type: 'search',
  },
}
