import Pacienteform from "@/components/forms/pacienteform";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div className="flex h-screen max-h-screen">
        {/* Todo OTP Verification*/}

        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w[496px]">
            <Image src={"/assets/icons/logo-full.svg"} alt={""} height={1000} width={1000} className="mb-2 h-10 w-fit "></Image>
            <Pacienteform/>
            <div className="text-14-regular mt-20 flex justify-between">
              <p className="justify-items-end text-dark-600 xl:text-left ">
              2024 CarePulse

              </p>
              <Link href={"/?admin=true"} className="text-green-500"> admin</Link>
            </div>
          </div>
        </section>
        <Image src={"/assets/images/onboarding-img.png"} alt={""} height={1000}width={1000} className="side-img max-w-[50%]"></Image>
    </div>
  );
}
