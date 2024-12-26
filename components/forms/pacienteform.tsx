"use client"

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from "@/components/ui/button"
import { Form} from "@/components/ui/form"
import CustomFormfield, { FormFieldType } from '../ui/CustomFormfield'
import exp from 'constants'


const formSchema = z.object({
    username: z.string().min(2).max(50),
  })

const Pacienteform = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className='mb-12 space-y-4'>
            <h2 className='header'>Hi there</h2>
            <p className='text-dark-600'>shedule your appointment</p>
        </section>
        <CustomFormfield 
           fieldType={FormFieldType.INPUT}
           control={form.control}
           name="name"
           label="full name"
           placeholder="John Doe"
           iconSrc='/assets/icons/user.svg'
           iconAlt='user'

        
        />
                <CustomFormfield 
           fieldType={FormFieldType.INPUT}
           control={form.control}
           name="email"
           label="email"
           placeholder="John@gmail.com"
           iconSrc='/assets/icons/email.svg'
           iconAlt='email'

        
        />
         <CustomFormfield 
           fieldType={FormFieldType.PHONE_INPUT}
           control={form.control}
           name="phone"
           label="phone number"
           placeholder="(55) 123456789"
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default Pacienteform