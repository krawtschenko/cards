import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

const styles = {
  height: '552px',
  width: '420px',
}

export const Primary: Story = {
  args: {
    style: styles,
  },
}
