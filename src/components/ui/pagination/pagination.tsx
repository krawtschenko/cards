import { MainPaginationButtons } from '@/components/ui/pagination/mainPaginationButtons'
import { Select } from '@/components/ui/select/select'
import { Typography } from '@/components/ui/typography/typography'

import style from './pagination.module.scss'

import { NextButton, PrevButton } from './paginationButtons'
import { usePagination } from './usePagination'

export type PaginationProps = {
  count: number
  defaultValue?: number
  onChange: (page: number) => void
  onPerPageChange: (itemPerPage: number) => void
  page: number
  perPage?: number
  perPageOptions: number[]
  siblings?: number
}

export const Pagination = (props: PaginationProps) => {
  const { count, defaultValue, onChange, onPerPageChange, page, perPageOptions, siblings } = props

  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({
    count,
    onChange,
    page,
    siblings,
  })

  const onValueChange = (value: string) => {
    onPerPageChange(+value)
  }

  return (
    <div className={style.root}>
      <div className={style.pageWrapper}>
        <NextButton disabled={isFirstPage} onClick={handlePreviousPageClicked} />
        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />
        <PrevButton disabled={isLastPage} onClick={handleNextPageClicked} />
      </div>
      <div className={style.selectBlockWrapper}>
        <Typography variant={'body2'}>Показать</Typography>
        <Select
          className={style.selectButton}
          defaultValue={defaultValue?.toString()}
          onValueChange={onValueChange}
          options={perPageOptions}
        />
        <Typography variant={'body2'}>на странице</Typography>
      </div>
    </div>
  )
}
