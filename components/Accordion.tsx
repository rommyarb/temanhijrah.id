import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { ComponentProps } from '../types/componentProps'

interface Props {
  children?: string | JSX.Element | JSX.Element[]
  title?: string
  icon?: string
  isMobile?: boolean
}

const Accordion: React.FC<Props> = ({ children, title, icon, isMobile }) => {
  const [isShowing, setIsShowing] = useState(false)
  const [height, setHeight] = useState('0px')
  const contentSpace = useRef<HTMLInputElement>(null)

  const toggle = () => {
    setIsShowing(!isShowing)
    setHeight(isShowing ? '0px' : `${contentSpace?.current?.scrollHeight}px`)
  }

  return (
    <div
      style={{
        boxShadow:
          '0px 6px 10px rgba(66, 66, 66, 0.2), 0px 0px 4px rgba(66, 66, 66, 0.2)',
      }}
      className="w-full rounded p-4 sm:py-6 sm:px-12 bg-white"
    >
      <button
        className="w-full flex flex-wrap items-center justify-between"
        onClick={toggle}
        type="button"
      >
        <div className="flex flex-wrap items-center">
          {icon && (
            <div className="mr-2 sm:mr-4 flex items-center">
              <Image src={icon} height="20" width="20" alt="Icon" />
            </div>
          )}
          <div className="font-semibold text-base sm:text-xl">{title}</div>
        </div>
        <div
          className={[
            'transform duration-500 ease-in-out',
            isShowing && 'transform duration-500 ease-in-out rotate-180',
          ].join(' ')}
        >
          <Image
            src="/img/icon/arrow_drop_down.svg"
            height="10px"
            width="10px"
            alt="Icon"
          />
        </div>
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto overflow-y-hidden transition-max-height duration-500 ease-in-out"
      >
        {children}
      </div>
    </div>
  )
}
export default Accordion
