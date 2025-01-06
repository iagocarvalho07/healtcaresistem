"use client"

import ResgisterForm from '@/components/forms/resgisterForm'
import { getUser } from '@/lib/actions/paciente.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Register = async ({params :{userId}}: SearchParamProps) => {
    const user = await getUser(userId)
    return (

        <div className="flex h-screen max-h-screen">
        {/* Todo OTP Verification*/}

        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w[496px]">
            <Image src={"/assets/icons/logo-full.svg"} alt={""} height={1000} width={1000} className="mb-2 h-10 w-fit "></Image>
            <ResgisterForm user={user}/>
     
            <div className="text-14-regular mt-20 flex justify-between">
              <p className="justify-items-end text-dark-600 xl:text-left ">
              2024 CarePulse

              </p>
              <Link href={"/?admin=true"} className="text-green-500"> admin</Link>
            </div>
          </div>
        </section>
        <Image src={"/assets/images/register-img.png"} alt={""} height={1000}width={1000} className="side-img max-w-[390px]"></Image>
    </div>
    )
}

export default Register