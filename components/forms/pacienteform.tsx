"use client";

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from "@/components/ui/form"
import CustomFormfield, { FormFieldType } from '../ui/CustomFormfield'
import SubmitButton from '../ui/SubmitButton'
import { UserFormValidation } from '@/lib/validation'
import { useRouter } from 'next/navigation'
import { createUser } from '@/lib/actions/paciente.actions'



const Pacienteform = () => {
    const router = useRouter();
    const [isLoadindState, setIsLoadingState] = React.useState(false)


    // 1. Define your form.
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
        setIsLoadingState(true)
        try {
            const uerData = { name, email, phone};
            const user = await createUser(uerData);
            if (user) {
                router.push(`/patients/${user.$id}/register`)
            }
        } catch (error) {
            console.log(error);
        }
        setIsLoadingState(false)
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

                <SubmitButton isLoading={isLoadindState} >
                    Get Started
                </SubmitButton>
            </form>
        </Form>
    )
}

export default Pacienteform