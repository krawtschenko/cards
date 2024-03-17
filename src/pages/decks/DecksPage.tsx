import { Button } from '@/components/ui/button/Button'
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table/Table'
import { useGetDecksQuery } from '@/services/base-api'

export const DecksPage = () => {
  const { data, isLoading } = useGetDecksQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Table style={{ margin: '0 auto' }}>
      <TableHead>
        <TableRow>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Cards</TableHeadCell>
          <TableHeadCell>Last Updated</TableHeadCell>
          <TableHeadCell>Created By</TableHeadCell>
          <TableHeadCell></TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.items.map(({ author, cardsCount, id, name, updated }) => {
          return (
            <TableRow key={id}>
              <TableData>{name}</TableData>
              <TableData>{cardsCount}</TableData>
              <TableData>{new Date(updated).toLocaleDateString('pl')}</TableData>
              <TableData>{author.name}</TableData>
              <TableData>
                <Button>Edit</Button>
              </TableData>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
