import './Menu.css'
import './whiteboard/Whiteboard.js'

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
    		<div class="left" onClick={WhiteBoard}></div>
    		<div class="middle">
				<img src={require('./logoWhite.png')} />
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
