import React from 'react'
import { ComponentProps } from '../types/componentProps'

const Tombol: React.FC<ComponentProps> = ({ children }) => (
  <button className="bg-red-200 px-2 py-1 rounded-md shadow-sm focus:bg-red-300 m-1">
    {children}
  </button>
)
export default Tombol
