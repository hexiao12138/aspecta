import Head from 'next/head'
import Image from 'next/image'
import { FC, KeyboardEvent, useState } from 'react';
interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  labelClass?: string;
  required?: boolean;
  getInputValue?: (val: string) => void;
  keyDownHandler?: (val: string) => void;
}
const Input :FC<InputProps> = props => {
  const { label, value, placeholder, labelClass, required, getInputValue, keyDownHandler } = props;
  const inputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
   if (e.key === "Enter" && keyDownHandler) {
    keyDownHandler((e.target as HTMLInputElement).value);
    (e.target as HTMLInputElement).value = ''
   }
  }
  return (
    <div className="input flex border-2 border-[#5f77aa] mb-5">
      <label className={`${labelClass ? labelClass : ''}${required ? 'required ' : ''} py-1 border-r-2 border-[#5f77aa]`}>{label}</label>
      <input className='w-full pl-2' onInput={(e) => getInputValue && getInputValue((e.target as HTMLInputElement).value)} onKeyDown={inputHandler} value={value} type="text" placeholder={placeholder} />
      <style jsx>
        {
          `
          .required::after {
            content: '*';
            color: red
          }
          `
        }
      </style>
    </div>
  )
}
export default Input
