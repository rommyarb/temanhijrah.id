import React from 'react'
import { ComponentProps } from '../types/componentProps'
import Image from 'next/image'

const Tombol: React.FC<ComponentProps> = ({ label, warna, ikon }) => (
  (warna === 'merah') ?
    <button className="
    bg-red-600 rounded-full shadow-sm focus:bg-red-300 w-56 h-11
    text-lg font-medium text-white space-x-2 font-sans
    flex flex-wrap content-center justify-center">
      <div> {label} </div>
      <div className="mt-1">
      <Image
      src={ikon}
      height="18px"
      width="18px"
      alt="Logo"
      />
      </div>
    </button>
    :
    <button className="
    bg-gray-800 rounded-full shadow-sm focus:bg-red-300 w-56 h-11
    text-lg font-medium text-white space-x-2 font-sans
    flex flex-wrap content-center justify-center">
      <div> {label} </div>
      <div className="mt-1">
      <Image
      src={ikon}
      height="15px"
      width="15px"
      alt="Logo"
      />
      </div>
    </button>
)
export default Tombol
