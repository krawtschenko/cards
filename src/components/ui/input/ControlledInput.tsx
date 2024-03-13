import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { Input, InputProps } from './Input'

export type ControlledInputProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<InputProps, 'id' | 'onChange' | 'value'>

export const ControlledInput = <T extends FieldValues>(props: ControlledInputProps<T>) => {
  const { control, name, ...rest } = props
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return <Input error={error?.message} onValueChange={field.onChange} {...field} {...rest} />
}
