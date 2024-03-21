import type { Meta, StoryObj } from '@storybook/react'

import { Data, Switcher } from './switcher'

const meta = {
  component: Switcher,
  tags: ['autodocs'],
  title: 'Components/Switcher',
} satisfies Meta<typeof Switcher>

export default meta
type Story = StoryObj<typeof meta>

const data: Data[] = [
  { value: 'Switcher 1' },
  { value: 'Switcher 2' },
  { value: 'Switcher 3' },
  { value: 'Switcher 4' },
  { value: 'Switcher 5' },
]

export const Primary: Story = {
  args: {
    data,
    defaultValue: data[1].value,
    disabled: false,
  },
}
