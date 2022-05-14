import './Menu.css'
import { useState } from "react";


function Menu() {

	const [style, setStyle] = useState("whiteboard");
	const changeStyle = () => {
		setStyle("whiteboard2");
	};

	return (

    <body>
    	<header onClick={() => setStyle((style) => (style === "whiteboardtop" ? "whiteboardtopend" : "whiteboardtop"))}>
    		<div id="topleft">
    			<span></span>
    		</div>
				<div id="topcenter">
				</div>
    		<div id="topright">
    			<span></span>
    		</div>
    	</header>
    	<main>
    		<div className="left" categorie="" onClick={() => setStyle((style) => (style === "whiteboardleft" ? "whiteboardleftend" : "whiteboardleft"))}>
				</div>
    		<div className="middle" >
				<div className={style}>
	      </div>
    		</div>
    		<div className="right" onClick={() => setStyle((style) => (style === "whiteboardright" ? "whiteboardrightend" : "whiteboardright"))}>
				</div>
    	</main>
    	<footer onClick={() => setStyle((style) => (style === "whiteboard" ? "whiteboard2" : "whiteboard"))}>
    		<div id="bottomleft">
    			<span></span>
    		</div>
    		<div id="bottomright">
    			<span></span>
    		</div>
    	</footer>
    </body>

  )

}

export default Menu

//<img src={require('./logoWhite.png')} />
