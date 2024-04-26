import { ReactNode, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography/typography'
import * as SelectRadix from '@radix-ui/react-select'
import { SelectItemProps } from '@radix-ui/react-select'
import clsx from 'clsx'
import { IoIosArrowUp } from 'react-icons/io'

import s from './select.module.scss'

type SelectType = {
  className?: string
  options: Array<number | string>
  placeholder?: ReactNode
} & SelectRadix.SelectProps

export const Select = (props: SelectType) => {
  const {
    className,
    defaultValue,
    disabled,
    onValueChange,
    options,
    placeholder,
    value,
    ...restProps
  } = props
  const changeCurrentValue = (value: string) => {
    onValueChange?.(value)
  }

  return (
    <SelectRadix.Root disabled={disabled} onValueChange={changeCurrentValue} {...restProps}>
      {!!placeholder && (
        <Typography className={s.placeholder} variant={'body2'}>
          {placeholder}
        </Typography>
      )}
      <SelectRadix.Trigger className={clsx(s.trigger, className)}>
        <SelectRadix.Value className={s.selectValue} placeholder={defaultValue} />
        <IoIosArrowUp style={{ rotate: '180deg' }} />
      </SelectRadix.Trigger>
      <SelectRadix.Portal>
        <SelectRadix.Content className={s.content} position={'popper'} sideOffset={-1}>
          <SelectRadix.Viewport>
            {options.map(el => (
              <SelectItem className={s.item} key={el} value={el.toString()}>
                {el}
              </SelectItem>
            ))}
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  )
}

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, value, ...props }, ref) => {
    return (
      <SelectRadix.Item className={className} value={value} {...props} ref={ref}>
        <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)
