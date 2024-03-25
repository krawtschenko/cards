import clsx from 'clsx'
import { TbLoader2 } from 'react-icons/tb'

import style from './loader.module.scss'

type LoaderProps = {
  className?: string
}
export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={clsx(style.root, className)}>
      <TbLoader2 className={style.loader} />
    </div>
  )
}
