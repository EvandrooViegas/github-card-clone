import React from 'react'
//@ts-ignore
import Tilt from 'react-tilt'
interface IProps {
    children: JSX.Element
}
export default function Card({ children }:IProps) {
  return (
    <Tilt className="Tilt" options={{
        reverse:        false,  // reverse the tilt direction
        max:            5,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
        speed:          300,    // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          false,    // If the tilt effect has to be reset on exit.
    }}>
    {children}
   </Tilt>
  )
}
