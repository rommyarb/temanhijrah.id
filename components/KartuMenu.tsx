import React from 'react'
import Image from 'next/image'
//
import { KartuMenuProps } from '../types/componentProps'
import appColors from '../constants/appColors'

const cardSizeWidth = 174
const cardSizeHeight = 200

const KartuMenu: React.FC<KartuMenuProps> = ({ ikon, judul, deskipsi, toggleModal }) => {
  return (
    <div
      className="shadow border-t rounded-lg p-4 flex items-end bg-white"
      style={{
        height: cardSizeHeight,
        width: cardSizeWidth,
      }}
    >
      <div className="self-center">
        <div className="mb-2">
          <Image width={36} height={36} alt="ikon" src={ikon} />
        </div>
        <p
          style={{ color: appColors.gray1 }}
          className="font-semibold text-lg mb-2 leading-5"
        >
          {judul}
        </p>
        <p style={{ color: appColors.gray2 }} className="text-xs">
          {deskipsi}
        </p>
        <div className="cursor-pointer mt-3" onClick={toggleModal}>
          <p className="underline text-center" style={{ color: appColors.redPrimary }} >Lihat Ketentuan</p>
        </div>
      </div>
    </div>
  )
}

export default KartuMenu
