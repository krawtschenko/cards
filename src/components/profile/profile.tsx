import { useState } from 'react'
import { useForm } from 'react-hook-form'

import altAvatar from '@/assets/images/photo.png'
import { Button } from '@/components/ui/button/button'
import { Card } from '@/components/ui/card/card'
import { ControlledInput } from '@/components/ui/input/controlledInput'
import { Typography } from '@/components/ui/typography/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { FiLogIn } from 'react-icons/fi'
import { PiPencilSimpleLineBold } from 'react-icons/pi'
import { TbPhotoSensor2 } from 'react-icons/tb'
import { z } from 'zod'

import style from './profile.module.scss'

import { profileSchema } from './profileSchema'

export type FormValues = z.infer<typeof profileSchema>
type ProfileProps = {
  data?: {
    avatar?: null | string
    email?: string
    name?: string
  }
  logout: () => void
  onSubmit: (data: FormValues) => void
}

export const Profile = ({ data, logout, onSubmit }: ProfileProps) => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: { name: '' },
    resolver: zodResolver(profileSchema),
  })
  const onSubmitHandler = (data: FormValues) => {
    onSubmit(data)
    setIsEdit(false)
    reset()
  }
  const [isEdit, setIsEdit] = useState(false)

  return (
    <Card>
      <Typography className={style.title} variant={'h1'}>
        Personal Information
      </Typography>

      <div className={style.photoWrapper}>
        <img alt={'photo'} src={data?.avatar ?? altAvatar} />
        {!isEdit && (
          <Button className={style.edit} icon={<TbPhotoSensor2 />} variant={'secondary'} />
        )}
      </div>

      <div className={style.container}>
        {!isEdit ? (
          <>
            <div className={style.nameWrapper}>
              <Typography variant={'h2'}>{data?.name}</Typography>
              <Button
                className={style.edit}
                icon={<PiPencilSimpleLineBold />}
                onClick={() => setIsEdit(true)}
              />
            </div>

            <Typography className={style.email} variant={'body2'}>
              {data?.email}
            </Typography>

            <Button
              className={style.button}
              icon={<FiLogIn />}
              onClick={logout}
              text={'Logout'}
              variant={'secondary'}
            />
          </>
        ) : (
          <form className={style.form} onSubmit={handleSubmit(onSubmitHandler)}>
            <ControlledInput
              className={style.input}
              control={control}
              label={'Nickname'}
              name={'name'}
              placeholder={data?.name}
            />

            <Button fullWidth text={'Save Changes'} type={'submit'} />
          </form>
        )}
      </div>
    </Card>
  )
}
