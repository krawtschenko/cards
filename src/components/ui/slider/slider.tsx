import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography/typography'
import * as SliderRadix from '@radix-ui/react-slider'
import clsx from 'clsx'

import style from './slider.module.scss'

type SliderProps = {
  className?: string
  label?: string
  value: (null | number)[]
} & Omit<ComponentPropsWithoutRef<typeof SliderRadix.Root>, 'value'>

export const Slider = ({ className, label, value, ...rest }: SliderProps) => {
  return (
    <div className={clsx(style.root, className)}>
      {label && (
        <Typography aria-disabled={rest.disabled} className={style.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <div aria-disabled={rest.disabled} className={style.wrapper}>
        <div className={style.rectangle}>
          <Typography variant={'body1'}>{value?.[0]}</Typography>
        </div>
        <SliderRadix.Root
          className={style.sliderRoot}
          value={[value?.[0] ?? 0, value?.[1] ?? rest.max ?? 0]}
          {...rest}
        >
          <SliderRadix.Track className={style.sliderTrack}>
            <SliderRadix.Range className={style.sliderRange} />
          </SliderRadix.Track>
          <SliderRadix.Thumb className={style.sliderThumb} />
          <SliderRadix.Thumb className={style.sliderThumb} />
        </SliderRadix.Root>
        <div className={style.rectangle}>
          <Typography variant={'body1'}>{value?.[1]}</Typography>
        </div>
      </div>
    </div>
  )
}
