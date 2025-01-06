import React from 'react'
import CustomFormfield, { FormFieldType } from '../ui/CustomFormfield';
import SubmitButton from '../ui/SubmitButton';
import { Form } from '../ui/form';
import { UserFormValidation } from '@/lib/validation';
import { createUser } from '@/lib/actions/paciente.actions';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const ResgisterForm = ({user}: {user:User}) => {
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 flex-1">
                <section className='space-y-4'>
                    <h2 className='header'>Welcome</h2>
                    <p className='text-dark-600'>Nos conte mais sobre voçe </p>
                </section>
                <section className='space-y-6'>
            
                    <p className='text-dark-600'>Informações pessoais </p>
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


                <SubmitButton isLoading={isLoadindState} >
                    Get Started
                </SubmitButton>
            </form>
        </Form>
    )
}

export default ResgisterForm




{/**
    
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
    
    
    
    
    */}