import './Whiteboard.css'
import { useState } from "react";

function Whiteboard(){

    const [style, setStyle] = useState("whiteboard");
    const changeStyle = () => {
      setStyle("whiteboard2");
    };

    return (
      <div className={style}>

        <button className="button" onClick={() => setStyle((style) => (style === "whiteboard" ? "whiteboard2" : "whiteboard"))}>
          Click me!
        </button>
      </div>
 )
}

export default Whiteboard
