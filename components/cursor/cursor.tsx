"use client"

import { FC, useEffect, useState } from "react"

import AnimatedCursor from "react-animated-cursor"

interface CursorProps {
    color:string
}

const Cursor: FC<CursorProps> = ({ color }) => {
    const [desktopBoolean, setDesktopBoolean] = useState(false);

    useEffect(() => {
        setDesktopBoolean(isDesktop());
    }, []);

    return (
        desktopBoolean ?
            <AnimatedCursor 
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                innerStyle={{
                    backgroundColor: "color"
                }}
                outerStyle={{
                    border: `3px solid ${color}`
                }}
                clickables={[ "a", "button", "select", "input", ".link" ]}
            />

            :

            <></>
    )
}

export default Cursor;

const isDesktop = () => {
  const ua = navigator.userAgent;

  if (/Mobi|Android/i.test(ua)) {
    return false;
  } else if (/iPad|Tablet/i.test(ua)) {
    return false;
  } else {
    return true;
  }
};