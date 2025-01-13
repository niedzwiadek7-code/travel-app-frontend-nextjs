'use client'

import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import {FormHelperText} from "@mui/joy";
import Button from "@mui/joy/Button";
import * as React from "react";
import * as yup from 'yup'
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {redirect} from "next/navigation";

const Form = () => {
  const schema = yup.object({
    name: yup
      .string()
      .required('Nazwa jest wymagana')
      .min(3, 'Nazwa musi mieć co najmniej 3 znaki'),
    days: yup
      .number()
      .required('Ilość dni jest wymagana')
      .min(1, 'Minimalna ilość dni w wycieczce to 1'),
  })

  type FormData = yup.InferType<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      days: 1,
    }
  })

  const onSubmit = async (data: FormData) => {
    const response = await fetch('/api/travel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    const responseBody = await response.json()
    redirect(`/auth/travel/edit/${responseBody.id}`)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <FormControl
        error={!!errors.name}
      >
        <FormLabel>Nazwa wycieczki</FormLabel>
        <Input
          type='text'
          placeholder='Nazwa wycieczki'
          {...register('name')}
        />
        <FormHelperText>{errors.name?.message}</FormHelperText>
      </FormControl>

      <FormControl
        error={!!errors.days}
      >
        <FormLabel>Ilość dni</FormLabel>
        <Input
          type='number'
          placeholder='Planowana ilośc dni'
          {...register('days')}
        />
        <FormHelperText>{errors.days?.message}</FormHelperText>
      </FormControl>

      <Button
        sx={{mt: 1}}
        type='submit'
        loading={isSubmitting}
      >
        Rozpocznij planowanie wycieczki
      </Button>
    </form>
  )
}

export default Form
