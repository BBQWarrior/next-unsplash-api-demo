import { InputHTMLAttributes } from "react"

export const Input = ({className, ...props}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className={`appearance-none bg-transparent px-4 py-2 placeholder-black focus:outline-none ${className}`} {...props}/>
  )
}