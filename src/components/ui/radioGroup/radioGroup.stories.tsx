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
  { id: '1', value: 'Default' },
  { id: '2', value: 'Comfortable' },
  { id: '3', value: 'Compact' },
]

export const Primary: Story = {
  args: {
    data,
    defaultValue: '1',
  },
}
