import { ComponentProps } from 'react'
import Image from 'next/image'
import appColors from '../constants/appColors'

interface Props {
  ikon: string
  judul: string
  deskripsi: string
}

const CardMenu: React.FC<Props> = ({ ikon, judul, deskripsi }) => {
  return (
    <div
      className="shadow"
      style={{ borderRadius: 8, padding: 16, width: 160, height: 160 }}
    >
      <div
        style={{
          borderRadius: 6,
          backgroundColor: appColors.redLight,
        }}
        className="p-1 h-8 w-8 flex items-center justify-center"
      >
        <Image
          src={ikon}
          height="20"
          width="20"
          alt="Ikon"
          objectFit="contain"
        />
      </div>
      <div className="mt-1 font-semibold" style={{ color: appColors.gray1 }}>
        {judul}
      </div>
      <div className="text-xs tracking-wide mt-1" style={{ color: appColors.gray2 }}>
        {deskripsi}
      </div>
    </div>
  )
}

export default CardMenu
