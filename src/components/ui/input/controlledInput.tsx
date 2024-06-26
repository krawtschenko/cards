import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from './input'

export type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputProps, 'id' | 'onChange' | 'value'>

export const ControlledInput = <T extends FieldValues>(props: ControlledInputProps<T>) => {
  const { control, name, ...rest } = props
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return <Input error={error?.message} id={name} onChange={onChange} value={value} {...rest} />
}
