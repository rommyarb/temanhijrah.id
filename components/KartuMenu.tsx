import React from 'react'
import Image from 'next/image'
import { useWindowWidth } from '@react-hook/window-size'
//
import { KartuMenuProps } from '../types/componentProps'
import appColors from '../constants/appColors'

const KartuMenu: React.FC<KartuMenuProps> = ({ ikon, judul, deskipsi }) => {
  const windowWidth = useWindowWidth()
  const cardSize = React.useMemo<number>(() => {
    if (windowWidth < 375) {
      return 150
    } else if (windowWidth < 640) {
      return 170
    }
    return 175
  }, [windowWidth])

  return (
    <div
      className="shadow border-t rounded-lg p-4"
      style={{
        height: windowWidth >= 375 ? cardSize : 'auto',
        width: cardSize,
      }}
    >
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
    </div>
  )
}

export default KartuMenu
