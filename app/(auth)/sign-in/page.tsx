import Link from "next/link"

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"

import Form from "./From"




const page: React.FC = async () => {


  return (
    <div className="">
      <div className="py-6 h-[75vh] sm:h-[80vh] flex flex-col justify-center items-center w-full">
        <Form />
      </div>

      <div className="h-[10vh] w-full text-center text-sm">

        <div><Link href='/signup' className="hover:underline underline-offset-2">Don&apos;t have a account?  SignUp</Link></div>
        <div className="mt-1 flex flex-wrap items-center  justify-center w-full">
          <span>By joining, you agree to our </span>

          <Link href="/terms&conditions" target="_blank" className="hover:underline underline-offset-2 font-medium flex items-center gap-x-1 mx-1"><span>Terms of Service</span><span><ArrowTopRightOnSquareIcon height={14} width={14} /> </span></Link>

          <span>and </span>
          <Link href="/privacy-policy" target="_blank" className="hover:underline underline-offset-2 font-medium flex items-center gap-x-1 mx-1"><span>Privacy and Policy</span> <span><ArrowTopRightOnSquareIcon height={14} width={14} /> </span></Link>
        </div>
      </div>
    </div>
  )
}

export default page