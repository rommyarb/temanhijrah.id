import React from 'react'
import { ComponentProps } from '../types/componentProps'

const Container: React.FC<ComponentProps> = ({ children }) => {
  return <div className="mx-auto py-18">{children}</div>
}

export default Container
