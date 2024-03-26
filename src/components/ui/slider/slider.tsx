import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

import { Typography } from '@/components/ui/typography/typography'
import * as SliderRadix from '@radix-ui/react-slider'
import clsx from 'clsx'

import style from './slider.module.scss'

type SliderProps = {
  className?: string
  label?: string
  max: number
  min: number
} & Omit<ComponentPropsWithoutRef<typeof SliderRadix.Root>, 'max' | 'min' | 'value'>

export const Slider = forwardRef<ElementRef<typeof SliderRadix.Root>, SliderProps>(
  ({ className, label, ...rest }, ref) => {
    const [value, setValue] = useState<number[]>([rest.min, rest.max])

    const onValueChange = (value: number[]) => {
      setValue(value)
      console.log(value)
    }

    return (
      <div className={clsx(style.root, className)}>
        {label && <Typography variant={'body2'}>{label}</Typography>}
        <div aria-disabled={rest.disabled} className={style.wrapper}>
          <div className={style.rectangle}>
            <Typography variant={'body1'}>{value[0]}</Typography>
          </div>
          <SliderRadix.Root
            className={style.sliderRoot}
            minStepsBetweenThumbs={1}
            onValueChange={onValueChange}
            value={value}
            {...rest}
            ref={ref}
          >
            <SliderRadix.Track className={style.sliderTrack}>
              <SliderRadix.Range className={style.sliderRange} />
            </SliderRadix.Track>
            <SliderRadix.Thumb className={style.sliderThumb} />
            <SliderRadix.Thumb className={style.sliderThumb} />
          </SliderRadix.Root>
          <div className={style.rectangle}>
            <Typography variant={'body1'}>{value[1]}</Typography>
          </div>
        </div>
      </div>
    )
  }
)
