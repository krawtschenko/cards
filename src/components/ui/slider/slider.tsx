import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography/typography'
import * as SliderRadix from '@radix-ui/react-slider'

import style from './slider.module.scss'

type SliderProps = {
  disabled?: boolean
  max: number
  min: number
} & ComponentPropsWithoutRef<typeof SliderRadix.Root>

export const Slider = ({ disabled, max, min, ...rest }: SliderProps) => {
  return (
    <form className={style.form}>
      <div className={style.rectangle}>
        <Typography variant={'body1'}>{min}</Typography>
      </div>
      <SliderRadix.Root
        className={style.sliderRoot}
        defaultValue={[0]}
        disabled={disabled}
        max={max}
        min={min}
        step={1}
        {...rest}
      >
        <SliderRadix.Track className={style.sliderTrack}>
          <SliderRadix.Range className={style.sliderRange} />
        </SliderRadix.Track>
        <SliderRadix.Thumb className={style.sliderThumb} />
        <SliderRadix.Thumb className={style.sliderThumb} />
      </SliderRadix.Root>
      <div className={style.rectangle}>
        <Typography variant={'body1'}>{max}</Typography>
      </div>
    </form>
  )
}
