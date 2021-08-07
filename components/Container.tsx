import React from 'react'
import { ComponentProps } from '../types/componentProps'

const Container: React.FC<ComponentProps> = ({ children }) => {
  return (
    <div className="mx-auto py-18">
      {children}
      <div className="h-4"></div>
    </div>
  )
}

export default Container
