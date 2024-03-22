import { useState } from 'react'
import { useForm } from 'react-hook-form'

import photo from '@/assets/images/photo.png'
import { Button } from '@/components/ui/button/button'
import { Card } from '@/components/ui/card/card'
import { ControlledInput } from '@/components/ui/input/controlledInput'
import { Typography } from '@/components/ui/typography/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { FiLogIn } from 'react-icons/fi'
import { PiPencilSimpleLineBold } from 'react-icons/pi'
import { z } from 'zod'

import style from './profile.module.scss'

import { profileSchema } from './profileSchema'

export type FormValues = z.infer<typeof profileSchema>
type ProfileProps = {
  email: string
  name: string
  onSubmit: (data: FormValues) => void
}

export const Profile = (props: ProfileProps) => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: { name: '' },
    resolver: zodResolver(profileSchema),
  })
  const onSubmit = (data: FormValues) => {
    props.onSubmit(data)
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
        <img alt={'photo'} src={photo} />
        {!isEdit && (
          <Button className={style.edit} noTypography variant={'secondary'}>
            <PiPencilSimpleLineBold />
          </Button>
        )}
      </div>

      <div className={style.container}>
        {!isEdit ? (
          <>
            <div className={style.nameWrapper}>
              <Typography variant={'h2'}>{props.name}</Typography>
              <Button className={style.edit} noTypography onClick={() => setIsEdit(true)}>
                <PiPencilSimpleLineBold />
              </Button>
            </div>

            <Typography className={style.email} variant={'body2'}>
              {props.email}
            </Typography>

            <Button className={style.button} noTypography variant={'secondary'}>
              <FiLogIn />
              <Typography variant={'subtitle2'}>Logout</Typography>
            </Button>
          </>
        ) : (
          <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <ControlledInput
              className={style.input}
              control={control}
              label={'Nickname'}
              name={'name'}
              placeholder={'Nickname'}
            />

            <Button fullWidth type={'submit'}>
              Save Changes
            </Button>
          </form>
        )}
      </div>
    </Card>
  )
}
