import React from 'react'
import { KartuMenuProps } from '../types/componentProps';
import Image from 'next/image';

const KartuMenu: React.FC<KartuMenuProps> = ({ ikon, judul, deskipsi }) => {
    return (
        <div className="shadow-sm w-45 border-2 rounded-lg p-4">
          <Image width={36} height={36} alt="Logo" src={ikon}/>
          <p className="font-semibold text-xl my-2 text-gray-1">{judul}</p>
          <p className="text-sm text-gray-2">{deskipsi}</p>
        </div>
    );
}

export default KartuMenu;