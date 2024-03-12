import type { Meta, StoryObj } from '@storybook/react'

import { Data, RadioGroup } from './RadioGroup'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const data: Data[] = [
  { label: 'Default', value: 'Default' },
  { label: 'Comfortable', value: 'Comfortable' },
  { label: 'Compact', value: 'Compact' },
]

export const Primary: Story = {
  args: {
    data,
    defaultValue: 'Compact',
  },
}
