import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLInputTypeAttribute,
  forwardRef,
  useState,
} from 'react'

import clsx from 'clsx'
import { LuSearch } from 'react-icons/lu'
import { VscChromeClose, VscEye, VscEyeClosed } from 'react-icons/vsc'

import style from './input.module.scss'

import { Typography } from '../typography/Typography'

export type InputProps = {
  error?: string
  label?: string
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<ElementRef<'input'>, InputProps>((props, ref) => {
  const {
    className,
    error,
    label,
    onChange,
    onValueChange,
    placeholder,
    type = 'text',
    ...rest
  } = props

  const [isVisible, setIsVisible] = useState(true)
  const showIconHandler = () => setIsVisible(prev => !prev)

  const clearInputHandler = () => {
    onValueChange?.('')
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange?.(e.currentTarget.value)
  }

  const generateType = (type: HTMLInputTypeAttribute, showIcon: boolean) => {
    if (type === 'password' && showIcon) {
      return 'password'
    } else {
      return 'text'
    }
  }

  return (
    <div aria-disabled={rest.disabled} className={clsx(style.root, className)}>
      <Typography className={style.label} variant={'body2'}>
        {label}
      </Typography>
      <div className={clsx(style.wrapper, error && style.error)}>
        {type === 'search' && (
          <div className={clsx(style.searchIcon, style.icon)}>
            <LuSearch />
          </div>
        )}
        <input
          className={style.input}
          onChange={handleChange}
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
          <div className={clsx(style.closeIcon, style.icon)} onClick={clearInputHandler}>
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
})
