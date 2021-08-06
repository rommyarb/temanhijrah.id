import React from 'react'
import Image from 'next/image'
import appColors from '../constants/appColors'

interface Props {
  label: string
  warna?: string
  ikon?: string
}

const Tombol: React.FC<Props> = ({ label, warna, ikon }) =>
  warna === 'merah' ? (
    <button
      style={{ backgroundColor: appColors.redPrimary }}
      className="
     rounded-full shadow-sm focus:bg-red-300 w-full md:w-56 h-11
    text-lg font-medium text-white space-x-2
    flex flex-wrap content-center justify-center items-center"
    >
      <div> {label} </div>
      {ikon && (
        <div className="mt-1">
          <Image src={ikon} height="18px" width="18px" alt="Logo" />
        </div>
      )}
    </button>
  ) : (
    <button
      style={{ backgroundColor: appColors.gray1 }}
      className="rounded-full shadow-sm focus:bg-red-300 w-full md:w-56 h-11
    text-lg font-medium text-white space-x-2
    flex flex-wrap content-center justify-center items-center"
    >
      <div> {label} </div>
      {ikon && (
        <div className="mt-1">
          <Image src={ikon} height="15px" width="15px" alt="Logo" />
        </div>
      )}
    </button>
  )
export default Tombol
