
import { useEffect, useRef, useState } from "react"
import useRelativeMousePosition from "../hooks/useRelativeMousePosition"
interface IProps {
    children: JSX.Element,
    color: string,
    size: number
}
export default function BackdropShadow({ children, color, size }:IProps) {
    console.log(color)
    const containerRef = useRef<HTMLElement | null>(null)
    const [isHover, setIsHover] = useState(false)
    const { position } = useRelativeMousePosition({ target: "h-container" })
    console.log(position)

  return (
    <div className="overflow-hidden">
        <div className='text-white relative' id="h-container" ref={containerRef} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <div>{children}</div>
        {isHover &&
        
        <div className={`z-[-1] -translate-x-1/2 -translate-y-1/2 rounded-full`} style={{
            position: "absolute",
            background: `radial-gradient(${color}, transparent)`,
            width: size + "px",
            height: size + "px",
            left: position.x + "px",
            top: position.y + "px",

        }}>

        </div>
        }
    </div>
    </div>
  )
}
