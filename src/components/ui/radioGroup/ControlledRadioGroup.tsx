import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from './RadioGroup'

type ControlledRadioProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'defaultValue' | 'name' | 'onValueChange'>

export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  ...rest
}: ControlledRadioProps<T>) => {
  const {
    field: { onChange },
  } = useController({
    control,
    defaultValue,
    name,
  })

  return <RadioGroup {...rest} defaultValue={defaultValue} name={name} onValueChange={onChange} />
}
