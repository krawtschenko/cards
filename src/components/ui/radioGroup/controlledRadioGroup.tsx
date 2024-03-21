import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from './radioGroup'

type ControlledRadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'defaultValue' | 'name' | 'onValueChange'>

const ControlledRadioGroup = <T extends FieldValues>(props: ControlledRadioGroupProps<T>) => {
  const { control, defaultValue, name, rules, ...rest } = props
  const {
    field: { onChange },
  } = useController({
    control,
    defaultValue,
    name,
  })

  return <RadioGroup defaultValue={defaultValue} id={name} onValueChange={onChange} {...rest} />
}
