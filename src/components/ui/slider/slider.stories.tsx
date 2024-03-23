import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from './slider'

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disabled: false,
    max: 100,
    min: 0,
  },
}
