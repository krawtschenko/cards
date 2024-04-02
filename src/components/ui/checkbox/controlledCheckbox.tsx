import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from './checkbox'

export type ControlledCheckboxProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'onValueChange'>

export const ControlledCheckbox = <T extends FieldValues>(props: ControlledCheckboxProps<T>) => {
  const { control, disabled, name, ...rest } = props
  const {
    field: { onChange, ref, value },
  } = useController({
    control,
    disabled,
    name,
  })

  return (
    <Checkbox
      checked={value}
      disabled={disabled}
      id={name}
      onValueChange={onChange}
      ref={ref}
      {...rest}
    />
  )
}
