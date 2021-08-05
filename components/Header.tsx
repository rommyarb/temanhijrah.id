import React from 'react'
import { ComponentProps } from '../types/componentProps'
import Image from 'next/image'

const Header: React.FC<ComponentProps> = () => (
  <div className="flex items-center justify-between">
    <Image
      src="/img/logo.png"
      height="30px"
      width="100px"
      objectFit="contain"
      alt="Logo"
    />
    <div>Mau Membantu</div>
    <div>Mau dibantu</div>
  </div>
)

export default Header
