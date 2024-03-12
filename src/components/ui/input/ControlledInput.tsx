import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from './Input'

export type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputProps, 'onChange' | 'onValueChange' | 'value'>

export const ControlledInput = <T extends FieldValues>(props: ControlledInputProps<T>) => {
  const { control, name, ...rest } = props
  const {
    field: { onChange, ref, value },
  } = useController({
    control,
    name,
  })

  return <Input id={name} onValueChange={onChange} ref={ref} value={value} {...rest} />
}
