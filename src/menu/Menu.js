import './Menu.css'
import Whiteboard from '../whiteboard/Whiteboard';

function Menu() {
	return (

    <body>
    	<header>
    		<div id="topleft">
    			<span></span>
    		</div>
    		<div id="topright">
    			<span></span>
    		</div>
    	</header>
    	<main>
    		<div className="left" onClick={Whiteboard}></div>
    		<div className="middle" >
				<Whiteboard />

    		</div>
    		<div className="right"></div>
    	</main>
    	<footer>
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
