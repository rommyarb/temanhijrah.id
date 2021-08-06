import React from 'react'
import { KartuMenuProps } from '../types/componentProps';
import Image from 'next/image';

const KartuMenu: React.FC<KartuMenuProps> = ({ ikon, judul, deskipsi }) => {
    return (
        <div className="shadow-md border rounded-lg p-4 mx-2 md:mx-5 mb-3 w-44 md:w-45">
          <Image width={36} height={36} alt="Logo" src={ikon}/>
          <p className="font-semibold text-xl my-2 text-gray-1">{judul}</p>
          <p className="text-sm text-gray-2">{deskipsi}</p>
        </div>
    );
}

export default KartuMenu;