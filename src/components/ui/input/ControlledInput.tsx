import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from './Input'

export type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputProps, 'id' | 'onChange' | 'value'>

export const ControlledInput = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledInputProps<T>) => {
  const { field, fieldState } = useController({
    control,
    name,
  })

  return <Input {...field} {...rest} error={fieldState.error?.message} />
}
