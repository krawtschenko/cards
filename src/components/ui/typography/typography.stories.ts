import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography'

const meta = {
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['dark', 'error', 'light', 'link'],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    as: 'a',
    children: 'Carosserie Test Zürich',
    variant: 'h1',
  },
}
export const H2: Story = {
  args: {
    children: 'Carosserie Test Zürich',
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    children: 'Carosserie Test Zürich',
    variant: 'h3',
  },
}
export const H4: Story = {
  args: {
    children: 'Carosserie Test Zürich',
    variant: 'h4',
  },
}
export const Body1: Story = {
  args: {
    children: 'Carosserie Test Zürich',
    variant: 'body1',
  },
}
export const Body2: Story = {
  args: {
    children: 'Carosserie Test Zürich',
    variant: 'body2',
  },
}
export const Subtitle1: Story = {
  args: {
    children: 'Carosserie Test Zürich',
    variant: 'subtitle1',
  },
}
export const Subtitle2: Story = {
  args: {
    children: 'Carosserie Test Zürich',
    variant: 'subtitle2',
  },
}
export const Caption: Story = {
  args: {
    children: 'Carosserie Test Zürich',
    variant: 'caption',
  },
}
export const Overline: Story = {
  args: {
    children: 'Carosserie Test Zürich',
    variant: 'overline',
  },
}
