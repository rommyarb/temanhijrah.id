import React from 'react'
import Image from 'next/image'
import appColors from '../constants/appColors'

interface Props {
  label?: string
  customLabel?: JSX.Element
  warna?: string
  ikon?: string
  size?: 'sm' | 'base'
  notFullInMobile?: boolean
  onClick?: () => void
  full?: boolean
}

const Tombol: React.FC<Props> = ({
  label,
  customLabel,
  warna,
  ikon,
  size,
  notFullInMobile,
  onClick,
  full,
}) =>
  warna === 'merah' ? (
    <button
      onClick={onClick}
      style={{ backgroundColor: appColors.redPrimary }}
      className={[
        'rounded-full shadow-sm focus:bg-red-300 text-base font-medium text-white space-x-2 flex flex-wrap content-center justify-center items-center',
        full && 'w-full',
        notFullInMobile ? 'px-10' : 'w-full',
        size === 'sm' && 'h-8',
        size !== 'sm' && 'h-11',
        size === 'sm' ? (!full ? 'md:w-40' : '') : !full ? 'md:w-56' : '',
      ].join(' ')}
    >
      {label ? (
        <div className={[size === 'sm' && 'text-sm'].join(' ')}>{label}</div>
      ) : (
        customLabel
      )}
      {ikon && (
        <div className="mt-1">
          <Image src={ikon} height="18px" width="18px" alt="Logo" />
        </div>
      )}
    </button>
  ) : (
    <button
      onClick={onClick}
      style={{ backgroundColor: appColors.gray1 }}
      className={[
        'rounded-full shadow-sm focus:bg-red-300 text-base font-medium text-white space-x-2 flex flex-wrap content-center justify-center items-center',
        full && 'w-full',
        notFullInMobile ? 'px-10' : 'w-full',
        size === 'sm' && 'h-8',
        size !== 'sm' && 'h-11',
        size === 'sm' ? (!full ? 'md:w-40' : '') : !full ? 'md:w-56' : '',
      ].join(' ')}
    >
      {label ? (
        <div className={[size === 'sm' && 'text-sm'].join(' ')}>{label}</div>
      ) : (
        customLabel
      )}
      {ikon && (
        <div className="mt-1">
          <Image src={ikon} height="15px" width="15px" alt="Logo" />
        </div>
      )}
    </button>
  )
export default Tombol
