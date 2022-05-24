import React from 'react';
import './Menu.css'
import { useState } from "react";


export class Menu extends React.Component {
	constructor(props) {
    super(props);
this.state = { 	style : 'whiteboard',
							styleright : 'whiteboardright'
};
  }

leftmove (props) {


		if (this.state.style === 'whiteboard' || 'whiteboardleftend'){
			console.log('1er');
			this.setState({ style: 'whiteboardleft' });
			this.setState({ style: 'whiteboardleftend' });
		}
		else{
			this.setState({ style: 'whiteboardleft' });
			console.log('2eme');
			//
			//this.rightmove()
		}
		//this.setState({ style: 'whiteboardleftend' });
		//console.log(props)
		//console.log("leftmove")

}

rightmove (props) {


		if (this.state.style === 'whiteboard' || ''){
			this.setState({ style: 'whiteboardright' });
			this.setState({ style: 'whiteboardrightend' });
			console.log('3er');
		}
		else{
			this.setState({ style: 'whiteboardright' });
			console.log('4eme');
		}

}

  render() {
		const {style} = this.state
		const {styleright} = this.state
		console.log({style})
		console.log({styleright})


		return (
		<div className="bd">
	    	<header>
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
    		<div className="left" onClick={() => this.leftmove(this.state)} >
					</div>
	    		<div className="middle" >
					<div className={style}>

		      </div>
	    		</div>
	    		<div className="right" onClick={() => this.rightmove(this.state)} >
					</div>
	    	</main>
	    	<footer>
	    		<div id="bottomleft">
	    			<span></span>
	    		</div>
	    		<div id="bottomright">
	    			<span></span>
	    		</div>
	    	</footer>
	    </div>
);
  }
}

export default Menu

//<img src={require('./logoWhite.png')} />

/*
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
*/
