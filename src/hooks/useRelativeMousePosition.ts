import { useEffect, useState } from "react"

interface IProps {
    target: string
}
export default function useRelativeMousePosition({ target }:IProps ){
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })
    function onMouseMove(e:MouseEvent) {

        setPosition({
            x: e.offsetX,
            y: e.offsetY
        })
        
    }

    useEffect(() => {
        const element = document.getElementById(target)
        if(element) {
            element.addEventListener("mousemove", onMouseMove)
        }
        return () => {
            element?.removeEventListener("mousemove", onMouseMove)
        }
    }, [])

    return { position }
}
