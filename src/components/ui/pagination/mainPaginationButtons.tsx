import { PageButtons } from './paginationButtons'

type MainPaginationButtonsProps = {
  currentPage: number
  onClick: (pageNumber: number) => () => void
  paginationRange: (number | string)[]
}

export const MainPaginationButtons = (props: MainPaginationButtonsProps) => {
  const { currentPage, onClick, paginationRange } = props

  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <span key={index}>...</span>
        }

        return <PageButtons key={index} onClick={onClick(page)} page={page} selected={isSelected} />
      })}
    </>
  )
}
