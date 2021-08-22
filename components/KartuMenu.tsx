import React from 'react'
import Image from 'next/image'
//
import { KartuMenuProps } from '../types/componentProps'
import appColors from '../constants/appColors'

const KartuMenu: React.FC<KartuMenuProps> = ({
  ikon,
  judul,
  deskipsi,
  toggleModal,
}) => {
  return (
    <div className="shadow border-t rounded-lg p-4 bg-white kartu-menu relative">
      <div>
        <div>
          <Image width={36} height={36} alt="ikon" src={ikon} />
        </div>
        <div
          style={{ color: appColors.gray1 }}
          className="font-semibold text-lg mb-2 leading-5"
        >
          {judul}
        </div>
        <div style={{ color: appColors.gray2 }} className="text-xs">
          {deskipsi}
        </div>
      </div>
      <div
        className="cursor-pointer absolute bottom-4 left-0 w-full"
        onClick={toggleModal}
      >
        <div
          className="underline text-center text-sm md:text-base"
          style={{ color: appColors.redPrimary }}
        >
          Lihat Ketentuan
        </div>
      </div>
    </div>
  )
}

export default KartuMenu
