import Head from 'next/head'
import Image from 'next/image'
import { FC } from 'react';
interface InputProps {
  text?:string;
}
const Tag :FC<InputProps> = props => {
  const { text } = props;
  return (
    <div className="tag flex items-center cursor-pointer rounded-md inline-block py-1 px-2 mr-2 mb-2 bg-[#efeeee] border text-[#858485]">
      <span className='inline-block mr-2 text-xs w-4 bg-[#616161] text-[#fff] rounded-3xl text-center'>+</span>
      {text}
    </div>
  )
}
export default Tag
