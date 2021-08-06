import React, { useState } from 'react'
import { ComponentProps } from '../types/componentProps'

interface Props {
  children?: string | JSX.Element | JSX.Element[]
  title?: string
  content?: string
}

const Accordion: React.FC<Props> = ({ children, title, content }) => {

  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    // <button className="bg-red-200 px-2 py-1 rounded-md shadow-sm focus:bg-red-300 m-1">
    //   {children}
    // </button>
    <div
      style={{
        width: "100%",
        borderRadius: 8,
        boxShadow: "0px 6px 10px rgba(66, 66, 66, 0.2), 0px 0px 4px rgba(66, 66, 66, 0.2)"
      }}
    >
      <button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "4px",
          border: "none",
          background: "transparent",
          outline: "none",
          cursor: "pointer"
        }}
        onClick={toggle}
        type="button"
      >
        <p>{title}</p>
      </button>
      <div
        style={{ display: isShowing ? "block" : "none", padding: "5px" }}
        
      >
        {content}
      </div>
    </div>
  )
} 
export default Accordion
