import React, { Component } from 'react';


const Success = (props) => {

	const {count} = props;
	return ( <section class="matchedBlends">
	<div class="action">

	<div class="trophy">
		<svg fill="#FFD600" width="100%" height="100%" viewBox="0 0 24 24">
		  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
	</svg>
	</div>
	<div class="confetti"></div>
	<div class="confetti two"></div>
	<div class="confetti three"></div>
	<div class="confetti four"></div>
	<div class="confetti--purple"></div>
	<div class="confetti--purple two"></div>
	<div class="confetti--purple three"></div>
	<div class="confetti--purple four"></div>
	

</div>
<div className="animatedText anim-typewriter"> <h2> Hey, Astronaut,  <br/> Orbiting {count}  times !!! {String.fromCodePoint(127769)}  </h2></div>
</section>  );
}
 
export default Success;
