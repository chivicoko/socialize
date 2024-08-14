"use client"

import { ErrorOutlineRounded } from "@mui/icons-material";
import Link from "next/link";

const Error = (error) => {
  return (
    <div className="flex min-h-fit flex-col items-center justify-between p-24">
        <h1 className="text-red-700"> <ErrorOutlineRounded /> ERROR!</h1>
        <h2>{ error.error.message || `Sorry! There has been a glitch in the process. Try again.` }</h2>
        <Link href="/" className="text-blue-500 hover:text-blue-600">Go back to home</Link>
    </div>
  )
}

export default Error;