import type { Meta, StoryObj } from '@storybook/react'

import { Textfield } from './Textfield'

const meta = {
  component: Textfield,
  tags: ['autodocs'],
  title: 'Components/Textfield',
} satisfies Meta<typeof Textfield>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Test',
    placeholder: 'placeholder',
  },
}

export const WithPassword: Story = {
  args: {
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
    label: 'Test',
    placeholder: 'placeholder',
    type: 'search',
  },
}
