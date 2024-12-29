'use client'

import * as yup from 'yup'
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import {FormHelperText, Modal, ModalClose, ModalDialog} from "@mui/joy";
import {Key, Person} from "@mui/icons-material";
import * as React from "react";
import Button from "@mui/joy/Button";
import {redirect} from "next/navigation";
import {useState} from "react";
import Typography from "@mui/joy/Typography";

const Form = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
  })

  type FormData = yup.InferType<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.status === 200) {
      redirect('/auth/dashboard')
    }

    setLoading(false)
    setOpen(true)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <FormControl
          error={!!errors.email}
        >
          <FormLabel>Email</FormLabel>
          <Input
            startDecorator={<Person/>}
            type='email'
            placeholder='Email'
            {...register('email')}
          />
          <FormHelperText>{errors.email?.message}</FormHelperText>
        </FormControl>

        <FormControl
          error={!!errors.password}
        >
          <FormLabel>Password</FormLabel>
          <Input
            startDecorator={<Key/>}
            type={'password'}
            placeholder='Password'
            {...register('password')}
          />
          <FormHelperText>{errors.password?.message}</FormHelperText>
        </FormControl>

        <Button
          sx={{mt: 1}}
          type='submit'
          loading={loading}
        >
          Log in
        </Button>
      </form>

      <Modal
        open={open}
      >
        <ModalDialog
          color='danger'
          layout='center'
          variant='outlined'
        >
          <ModalClose
            onClick={() => setOpen(false)}
          />
          <Typography
            color='danger'
            level='h4'
          >
            Login Error
          </Typography>
          <Typography>
            Invalid email or password
          </Typography>
        </ModalDialog>
      </Modal>
    </>
  )
}

export default Form
