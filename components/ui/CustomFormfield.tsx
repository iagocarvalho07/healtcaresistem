"use client"
import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from 'react-hook-form'
import { Label } from '@radix-ui/react-label'
import Image from 'next/image'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
}

interface CustomProps {
    control: Control<any>;
    name: string;
    label?: string;
    placeholder?: string;
    iconSrc?: string;
    iconAlt?: string;
    disabled?: boolean;
    dateFormat?: string;
    showTimeSelect?: boolean;
    children?: React.ReactNode;
    renderSkeleton?: (field: any) => React.ReactNode;
    fieldType: FormFieldType;
}

const RenderImput = ({ field, props }: { field: any; props: CustomProps }) => {
    switch (props.fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className='flex rounded-md border border-dark-500 bg-dark-400'>
                    {props.iconSrc && (
                        <Image
                            src={props.iconSrc}
                            alt={props.iconAlt || 'icon'}
                            width={24}
                            height={24}
                            className='ml-2' />
                    )}
                    <FormControl>
                        <Input
                            placeholder={props.placeholder}
                            {...field}
                            className='shad-iput border-0'/>
                    </FormControl>
                </div>
            )
            case FormFieldType.PHONE_INPUT:
                return (
                   <FormControl>
                          <PhoneInput
                             placeholder={props.placeholder}
                             {...field}
                             defaultCountry="BR"
                             international
                             withCountryCallingCode
                             value={field.value as Number | undefined}
                             onChange={field.onChange}
                             className='input-phone'
                             />
                   </FormControl>
                )
    }
}

const CustomFormfield = (props: CustomProps) => {
    return (
        <FormField
            control={props.control}
            name={props.name}
            render={({ field }) => (
                <FormItem className='flex-1'>
                    {props.fieldType !== FormFieldType.CHECKBOX && props.label && (
                        <FormLabel>{props.label}</FormLabel>
                    )}
                    <RenderImput field={field} props={props} />
                    <FormMessage className='shad-error' />

                </FormItem>
            )}
        />
    )
}

export default CustomFormfield

{/**]
    
        <FormLabel>{props.name}</FormLabel>
        <FormControl>
          <Input placeholder="shadcn" {...field} />
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
    
    
    
    */}