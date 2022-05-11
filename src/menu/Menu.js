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
    		<div class="left" onClick={Whiteboard}></div>
    		<div class="middle">
				<Whiteboard />

    		</div>
    		<div class="right"></div>
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
