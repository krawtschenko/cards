import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './select'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const options = ['HTML', 'SCSS', 'React']
const placeholder = 'select variants'

export const Default: Story = {
  args: {
    defaultValue: options[0],
    disabled: false,
    options,
    placeholder: placeholder,
  },
}
