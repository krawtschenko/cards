import type { Meta, StoryObj } from '@storybook/react'

import { Table, TableBody, TableData, TableHead, TableHeadCell, TableRow } from './table'

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const data = [
  {
    cardsCount: 10,
    createdBy: 'John Doe',
    title: 'Project A',
    updated: '2023-07-07',
  },
  {
    cardsCount: 5,
    createdBy: 'Jane Smith',
    title: 'Project B',
    updated: '2023-07-06',
  },
  {
    cardsCount: 8,
    createdBy: 'Alice Johnson',
    title: 'Project C',
    updated: '2023-07-05',
  },
  {
    cardsCount: 3,
    createdBy: 'Bob Anderson',
    title: 'Project D',
    updated: '2023-07-07',
  },
  {
    cardsCount: 12,
    createdBy: 'Emma Davis',
    title: 'Project E',
    updated: '2023-07-04',
  },
]

export const Primary: Story = {
  render: () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Last Updated</TableHeadCell>
            <TableHeadCell>Created by</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ cardsCount, createdBy, title, updated }) => (
            <TableRow key={title}>
              <TableData>{title}</TableData>
              <TableData>{cardsCount}</TableData>
              <TableData>{updated}</TableData>
              <TableData>{createdBy}</TableData>
              <TableData>icons</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}
