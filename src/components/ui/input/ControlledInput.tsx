import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from './Input'

export type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputProps, 'id' | 'onChange' | 'value'>

export const ControlledInput = <T extends FieldValues>(props: ControlledInputProps<T>) => {
  const { control, name, ...rest } = props
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return (
    <Input
      {...field}
      {...rest}
      error={error?.message}
      name={field.name} // send down the input name
      onBlur={field.onBlur} // notify when input is touched/blur
      onChange={field.onChange} // send value to hook form
      ref={field.ref} // send input ref, so we can focus on input when error appear
      value={field.value} // input value
    />
  )
}
