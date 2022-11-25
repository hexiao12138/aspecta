import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Layout(props: { children: any; }) {
  const { children } = props;
  return (
    <div className="layout bg-[#f1f6fe] overflow-hidden">
      {children}
      <div className='fixed left-0 bottom-0 w-full pl-5 py-2 mt-[40px] text-xs text-[#999FAE] lg:mt-[60px] xl:mt-[100px] bg-black'>
        Copyright @ Aspecta ai {new Date().getFullYear()} All Rights Reserved
      </div>
    </div>
  )
}
