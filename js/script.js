var a=0;


function searchBarChose(x){
	document.getElementById(x).classList.toggle("searchBarOpen");
	document.getElementById("searchImage").classList.toggle("search-img-repair");
	document.getElementById("logoNike").classList.toggle("close-LogoNike-selection");
	document.getElementById("selection").classList.toggle("close-LogoNike-selection");
	
	if(a==1){
		a=0;
	}
	else if(a==0){			/*Da se ne zopre search kadar je odprt*/
		a=1;
	}
}


function searchBarChoseOnce(x){
	if(a==0){
		searchBarChose(x); 		/*Da se ne zopre search kadar je odprt*/
		a=1;
	}
}

function belaBarva(x){
	
	//classList.remove('spremeniBarvoTemnoModra');
	document.getElementById(x).classList.toggle("spremeniBarvoBelo");
	classList.remove('spremeniBarvoSvetloModro');
}
function svetloModraBarva(x){
	//classList.remove('spremeniBarvoTemnoModra');
	//classList.remove('spremeniBarvoBelo');
	document.getElementById(x).classList.toggle("spremeniBarvoSvetloModro");
	
}
function temnoModraBarva(x){
	//classList.remove('spremeniBarvoSvetloModro');
	//classList.remove('spremeniBarvoBelo');
	document.getElementById(x).classList.toggle("spremeniBarvoTemnoModro");
	
}
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


drawShape(ctx, 1, -200);
function drawShape(ctx, xoff, yoff) {
	  ctx.beginPath();
	  ctx.moveTo(348 + xoff, 373 + yoff);
	  ctx.bezierCurveTo(337 + xoff, 374 + yoff, 317 + xoff, 389 + yoff, 312 + xoff, 395 + yoff);
	  ctx.bezierCurveTo(302 + xoff, 407 + yoff, 299 + xoff, 414 + yoff, 298 + xoff, 421 + yoff);
	  ctx.bezierCurveTo(296 + xoff, 436 + yoff, 302 + xoff, 452 + yoff, 331 + xoff, 454 + yoff);
	  ctx.bezierCurveTo(351 + xoff, 455 + yoff, 425 + xoff, 439 + yoff, 438 + xoff, 434 + yoff);
	  ctx.bezierCurveTo(446 + xoff, 431 + yoff, 530 + xoff, 404 + yoff, 536 + xoff, 401 + yoff);
	  ctx.bezierCurveTo(551 + xoff, 394 + yoff, 525 + xoff, 386 + yoff, 514 + xoff, 390 + yoff);
	  ctx.bezierCurveTo(493 + xoff, 397 + yoff, 442 + xoff, 411 + yoff, 438 + xoff, 412 + yoff);
	  ctx.bezierCurveTo(419 + xoff, 417 + yoff, 379 + xoff, 421 + yoff, 363 + xoff, 420 + yoff);
	  ctx.bezierCurveTo(326 + xoff, 417 + yoff, 346 + xoff, 372 + yoff, 349 + xoff, 373 + yoff);
	  ctx.stroke();
	  ctx.fillStyle= "black";
	  ctx.fill();
}

