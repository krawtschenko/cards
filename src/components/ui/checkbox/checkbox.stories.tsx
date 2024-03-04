import type { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from './Checkbox'

const meta = {
  component: CheckBox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disabled: true,
    label: 'Check-box',
  },
}
