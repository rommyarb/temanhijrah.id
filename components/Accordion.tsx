import Image from 'next/image';
import React, { useState, useRef } from 'react'
import { ComponentProps } from '../types/componentProps'

interface Props {
  children?: string | JSX.Element | JSX.Element[]
  title?: string
  icon?: string
}

const Accordion: React.FC<Props> = ({ children, title, icon }) => {

  const [isShowing, setIsShowing] = useState(false);
  const [height, setHeight] = useState('0px')
  const contentSpace = useRef<HTMLInputElement>(null)

  const toggle = () => {
    setIsShowing(!isShowing);
    setHeight(isShowing ? '0px' : `${contentSpace?.current?.scrollHeight}px`)
  };

  return (
    <div className="shadow-lg w-full rounded p-4">
      <button className="w-full flex flex-wrap items-center justify-between" onClick={toggle} type="button">
        <div className="flex flex-wrap items-center" >
          {icon && (
            <div className="mr-3">
              <Image src={icon} height="20px" width="20px" alt="Icon" />
            </div>
          )}
          <p className="font-semibold text-lg">{title}</p>
        </div>
        <div className={[
          'p-1 transform duration-500 ease-in-out',
          isShowing && 'transform duration-500 ease-in-out rotate-180',
        ].join(' ')}>
          <Image src="/img/icon/arrow_drop_down.svg" height="24px" width="24px" alt="Icon" />
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
