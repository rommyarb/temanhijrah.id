import React from 'react'
import { ComponentProps } from '../types/componentProps'
import Image from 'next/image'

const Header: React.FC<ComponentProps> = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)
  return (
    <div className="shadow-md">
      <div
        className="px-4 mx-auto max-w-5xl flex items-center justify-between"
        style={{ height: 70 }}
      >
        <Image
          src="/img/logo.png"
          height="30px"
          width="100px"
          objectFit="contain"
          alt="Logo"
        />
        <div className="h-full hidden md:flex">
          <div className="px-6 h-full flex items-center hover:bg-red-100 cursor-pointer">
            Mau Membantu
          </div>
          <div className="px-6 h-full flex items-center hover:bg-red-100 cursor-pointer">
            Mau dibantu
          </div>
        </div>
        <div className="md:hidden">
          <div
            className="hover:bg-red-100 cursor-pointer p-1 flex items-center rounded-md"
            onClick={() => {
              setShowMobileMenu(true)
            }}
          >
            <Image
              src="/img/icon/menu.png"
              alt="Menu"
              height="20"
              width="20"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {showMobileMenu && (
        <div
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="py-3 h-full w-3/4 bg-white">
            <div className="px-5 flex items-center w-full">
              <Image
                src="/img/logo.png"
                height="100px"
                width="300px"
                objectFit="contain"
                alt="Logo"
              />
              <div className="w-full"></div>
              <div
                onClick={() => {
                  setShowMobileMenu(false)
                }}
              >
                <Image
                  src="/img/icon/clear.png"
                  height="30px"
                  width="30px"
                  objectFit="contain"
                  alt="Close"
                />
              </div>
            </div>
            <div className="h-3 border-b mb-3"></div>
            <div className="px-5 text-lg py-2 hover:bg-red-100">Butuh dibantu</div>
            <div className="px-5 text-lg py-2 hover:bg-red-100">Mau membantu</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
