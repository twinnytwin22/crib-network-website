
'use client'
import Script from "next/script"


export const VantaScript = () => {

return (
<>
<Script src="three.r134.min.js"></Script>
<Script src="vanta.net.min.js"></Script>
<Script>
VANTA.NET({}
  el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xffffff
)
</Script></>
)
}