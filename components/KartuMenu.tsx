import React from 'react'
import { KartuMenuProps } from '../types/componentProps'
import Image from 'next/image'

const cardSize = 190

const KartuMenu: React.FC<KartuMenuProps> = ({ ikon, judul, deskipsi }) => {
  return (
    <div
      className="shadow-md border rounded-lg p-4"
      style={{ height: cardSize, width: cardSize }}
    >
      <Image width={36} height={36} alt="ikon" src={ikon} />
      <p className="font-semibold text-xl my-2 text-gray-1">{judul}</p>
      <p className="text-sm text-gray-2">{deskipsi}</p>
    </div>
  )
}

export default KartuMenu
