'use client'

import * as yup from 'yup'
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import {FormHelperText} from "@mui/joy";
import {Key, Person} from "@mui/icons-material";
import * as React from "react";
import Button from "@mui/joy/Button";

const Form = () => {
  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
  })

  type FormData = yup.InferType<typeof schema>

  const {
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })


  return (
    <form
      action={'/api/auth/signin'}
      method={'POST'}
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
          startDecorator={<Person />}
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
          startDecorator={<Key />}
          type={'password'}
          placeholder='Password'
          {...register('password')}
        />
        <FormHelperText>{errors.password?.message}</FormHelperText>
      </FormControl>

      <Button
        sx={{ mt: 1 }}
        type='submit'
      >
        Log in
      </Button>
    </form>
  )
}

export default Form
