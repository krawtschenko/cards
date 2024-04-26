import { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './pagination'

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    count: 100,
    onChange: (page: number) => console.log(page),
    page: 10,
    perPageOptions: [10, 20, 30],
    siblings: 1,
  },
}
