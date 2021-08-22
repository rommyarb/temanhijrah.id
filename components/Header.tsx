import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import appColors from '../constants/appColors'
import dimens from '../constants/dimens'

interface Props {
  menuList: {
    label: string
    type?: string
    onClick?: () => void
  }[]
}

const Header: React.FC<Props> = ({ menuList }) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)
  return (
    <div className="shadow-md">
      <div
        className="px-4 mx-auto max-w-4xl flex items-center justify-between"
        style={{ height: dimens.HEADER_HEIGHT }}
      >
        <Link href="/" passHref>
          <div className="cursor-pointer flex justify-center">
            <Image
              src="/img/logo.png"
              height="30px"
              width="100px"
              objectFit="contain"
              alt="Logo"
            />
          </div>
        </Link>
        <div className="h-full hidden md:flex">
          {menuList.map((m, i) => {
            if (m.type === 'link') {
              return (
                <Link href="/butuh-dibantu" passHref key={`header-menu-${i}`}>
                  <div
                    style={{ color: appColors.gray1 }}
                    className="text-sm px-6 h-full flex items-center hover:bg-red-100 cursor-pointer"
                  >
                    {m.label}
                  </div>
                </Link>
              )
            }
            return (
              <div
                key={`header-menu=${i}`}
                style={{ color: appColors.gray1 }}
                className="text-sm px-6 h-full flex items-center hover:bg-red-100 cursor-pointer"
                onClick={() => {
                  if (m.onClick) {
                    m.onClick()
                  }
                }}
              >
                {m.label}
              </div>
            )
          })}
        </div>
        {!showMobileMenu && (
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
        )}
      </div>

      {showMobileMenu && (
        <div
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="py-3 h-full w-full bg-white">
            <div className="pt-4 px-5 flex items-center w-full">
              <Image
                src="/img/logo.png"
                height="50px"
                width="220px"
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
                  src="/img/icon/clear.svg"
                  height="30px"
                  width="30px"
                  objectFit="contain"
                  alt="Close"
                />
              </div>
            </div>
            <div className="mx-5 h-3 mb-3"></div>
            {menuList.map((m, i) => {
              if (m.type === 'link') {
                return (
                  <Link href="/butuh-dibantu" passHref key={`header-menu-${i}`}>
                    <div className="px-5 text-lg py-2 hover:bg-red-100 cursor-pointer">
                      {m.label}
                    </div>
                  </Link>
                )
              }
              return (
                <div
                  key={`header-menu=${i}`}
                  className="px-5 text-lg py-2 hover:bg-red-100 cursor-pointer"
                  onClick={() => {
                    if (m.onClick) {
                      m.onClick()
                    }
                    setShowMobileMenu(false)
                  }}
                >
                  {m.label}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
