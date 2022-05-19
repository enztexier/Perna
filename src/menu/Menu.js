import React from 'react';
import './Menu.css'
import { useState } from "react";


export class Menu extends React.Component {
	constructor(props) {
    super(props);

  }

  render() {
		return (
			<body>
	    	<header >
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
	    		<div className="left" categorie="" >
					</div>
	    		<div className="middle" >
					<div >

		      </div>
	    		</div>
	    		<div className="right" >
					</div>
	    	</main>
	    	<footer >
	    		<div id="bottomleft">
	    			<span></span>
	    		</div>
	    		<div id="bottomright">
	    			<span></span>
	    		</div>
	    	</footer>
	    </body>
);
  }
}

export default Menu

//<img src={require('./logoWhite.png')} />
