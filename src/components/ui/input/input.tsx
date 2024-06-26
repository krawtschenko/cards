import { ComponentPropsWithoutRef, HTMLInputTypeAttribute, useState } from 'react'

import { Typography } from '@/components/ui/typography/typography'
import clsx from 'clsx'
import { LuSearch } from 'react-icons/lu'
import { VscChromeClose, VscEye, VscEyeClosed } from 'react-icons/vsc'

import style from './input.module.scss'

export type InputProps = {
  error?: string
  label?: string
  onClearValue?: () => void
} & ComponentPropsWithoutRef<'input'>

export const Input = (props: InputProps) => {
  const { className, error, label, onClearValue, type = 'text', ...rest } = props

  const [isVisible, setIsVisible] = useState(true)
  const showIconHandler = (value: boolean) => setIsVisible(value)

  const generateType = (type: HTMLInputTypeAttribute, showIcon: boolean) => {
    if (type === 'password' && showIcon) {
      return 'password'
    } else {
      return 'text'
    }
  }

  return (
    <div aria-disabled={rest.disabled} className={clsx(style.root, className)}>
      {label && (
        <Typography className={style.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <div className={clsx(style.wrapper, error && style.error)}>
        {type === 'search' && (
          <div className={clsx(style.searchIcon, style.icon)}>
            <LuSearch />
          </div>
        )}
        <input
          autoComplete={'on'}
          className={style.input}
          type={generateType(type, isVisible)}
          {...rest}
        />

        {type === 'password' && (
          <div
            className={clsx(style.eyeIcon, style.icon)}
            onMouseDown={() => showIconHandler(false)}
            onMouseUp={() => showIconHandler(true)}
          >
            {isVisible ? <VscEye /> : <VscEyeClosed />}
          </div>
        )}
        {type === 'search' && (
          <div className={clsx(style.closeIcon, style.icon)} onClick={onClearValue}>
            {rest.value && <VscChromeClose />}
          </div>
        )}
      </div>

      {error && (
        <Typography color={'error'} variant={'caption'}>
          {error}
        </Typography>
      )}
    </div>
  )
}
