import { ComponentPropsWithoutRef, HTMLInputTypeAttribute, forwardRef, useState } from 'react'

import clsx from 'clsx'
import { LuSearch } from 'react-icons/lu'
import { VscChromeClose, VscEye, VscEyeClosed } from 'react-icons/vsc'

import style from './input.module.scss'

import { Typography } from '../typography/Typography'

export type InputProps = {
  className?: string
  error?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, disabled, error, label, placeholder, type = 'text', value, ...rest } = props

  const [isVisible, setIsVisible] = useState(true)
  const showIconHandler = () => setIsVisible(prev => !prev)

  const generateType = (type: HTMLInputTypeAttribute, showIcon: boolean) => {
    if (type === 'password' && showIcon) {
      return 'password'
    } else {
      return 'text'
    }
  }

  return (
    <div aria-disabled={disabled} className={clsx(style.root, className)}>
      <Typography className={style.label} variant={'body2'}>
        {label}
      </Typography>
      <div className={clsx(style.wrapper, error && style.error)}>
        <div className={clsx(style.searchIcon, style.icon)}>
          {type === 'search' && <LuSearch />}
        </div>
        <input
          className={style.input}
          disabled={disabled}
          placeholder={placeholder}
          ref={ref}
          type={generateType(type, isVisible)}
          {...rest}
        />

        {type === 'password' && (
          <div className={clsx(style.eyeIcon, style.icon)} onClick={showIconHandler}>
            {isVisible ? <VscEye /> : <VscEyeClosed />}
          </div>
        )}
        {type === 'search' && (
          <div className={clsx(style.closeIcon, style.icon)}>{value && <VscChromeClose />}</div>
        )}
      </div>

      {error && (
        <Typography color={'error'} variant={'caption'}>
          {error}
        </Typography>
      )}
    </div>
  )
})
