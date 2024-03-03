import { ChangeEvent, ComponentPropsWithoutRef, HTMLInputTypeAttribute, useState } from 'react'

import clsx from 'clsx'
import { VscChromeClose, VscEye, VscEyeClosed, VscSearch } from 'react-icons/vsc'

import style from './textfield.module.scss'

import { Typography } from '../typography/Typography'

export type TextfieldProps = {
  className?: string
  error?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const Textfield = (props: TextfieldProps) => {
  const { className, error, label, placeholder, type = 'text' } = props

  const [isVisible, setIsVisible] = useState(true)
  const [value, setValue] = useState('')

  const changeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }
  const clearValue = () => {
    setValue('')
  }
  const showIconHandler = () => setIsVisible(prev => !prev)

  const generateType = (type: HTMLInputTypeAttribute, showIcon: boolean) => {
    if (type === 'password' && showIcon) {
      return 'password'
    } else {
      return 'text'
    }
  }

  return (
    <div className={clsx(style.root, className)}>
      <Typography className={style.label} variant={'body2'}>
        {label}
      </Typography>
      <div className={clsx(style.TextfieldWrapper, error && style.error)}>
        <div className={clsx(style.searchIcon, style.icon)}>
          {type === 'search' && <VscSearch />}
        </div>
        <input
          className={style.textfield}
          onChange={event => changeValueHandler(event)}
          placeholder={placeholder}
          type={generateType(type, isVisible)}
          value={value}
        />
        {type === 'password' && (
          <div className={clsx(style.eyeIcon, style.icon)} onClick={showIconHandler}>
            {isVisible ? <VscEye /> : <VscEyeClosed />}
          </div>
        )}
        {type === 'search' && (
          <div className={clsx(style.closeIcon, style.icon)} onClick={clearValue}>
            {value && <VscChromeClose />}
          </div>
        )}
      </div>
      <Typography color={'error'} variant={'caption'}>
        {error}
      </Typography>
    </div>
  )
}
