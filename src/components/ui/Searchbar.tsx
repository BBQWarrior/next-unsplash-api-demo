"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../base/Input";

export const Searchbar = () => {
  const router = useRouter()
  const [value, setValue] = useState<string>('');
  
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setValue(event.target.value);
  };

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let path = `/search/${value}`;

    if (value){
      router.push(path);
    } 
  }

  return (
    <form  onSubmit={handleClick} className="flex appearance-none border-2 left-2 sm:max-w-screen-sm text-stone-900">
      <Input onChange={onChange} type="text" className="w-64" placeholder="Search..."/>
      <button type="submit" id="button" className="flex items-center justify-center px-5">
        <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
        </svg>
      </button>      
    </form>
  )
}