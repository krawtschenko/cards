import { Typography } from '@/components/ui/typography/typography'
import clsx from 'clsx'
import { IoIosArrowUp } from 'react-icons/io'

import style from './pagination.module.scss'

type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
}

type PageButtonProps = NavigationButtonProps & {
  page: number
  selected: boolean
}

export const PageButtons = ({ disabled, onClick, page, selected }: PageButtonProps) => {
  return (
    <button
      className={clsx(style.pageButton, selected && style.selected)}
      disabled={selected || disabled}
      onClick={onClick}
    >
      <Typography variant={'body2'}>{page}</Typography>
    </button>
  )
}

export const NextButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button className={style.arrowButton} disabled={disabled} onClick={onClick}>
      <IoIosArrowUp className={style.nextArrow} />
    </button>
  )
}
export const PrevButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button className={style.arrowButton} disabled={disabled} onClick={onClick}>
      <IoIosArrowUp className={style.prevArrow} />
    </button>
  )
}
