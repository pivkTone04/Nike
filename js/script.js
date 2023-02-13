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
  
  ctx.moveTo(361 + xoff, 418 + yoff);
  ctx.bezierCurveTo(357 + xoff, 430 + yoff, 358 + xoff, 452 + yoff, 371 + xoff, 457 + yoff);
  ctx.bezierCurveTo(384 + xoff, 464 + yoff, 435 + xoff, 446 + yoff, 449 + xoff, 442 + yoff);
  ctx.bezierCurveTo(467 + xoff, 436 + yoff, 498 + xoff, 427 + yoff, 524 + xoff, 417 + yoff);
  ctx.bezierCurveTo(539 + xoff, 412 + yoff, 559 + xoff, 403 + yoff, 572 + xoff, 399 + yoff);
  ctx.bezierCurveTo(575 + xoff, 399 + yoff, 573 + xoff, 412 + yoff, 573 + xoff, 411 + yoff);
  ctx.bezierCurveTo(557 + xoff, 417 + yoff, 520 + xoff, 434 + yoff, 503 + xoff, 440 + yoff);
  ctx.bezierCurveTo(481 + xoff, 450 + yoff, 436 + xoff, 471 + yoff, 403 + xoff, 479 + yoff);
  ctx.bezierCurveTo(385 + xoff, 485 + yoff, 339 + xoff, 501 + yoff, 326 + xoff, 475 + yoff);
  ctx.bezierCurveTo(324 + xoff, 471 + yoff, 321 + xoff, 447 + yoff, 338 + xoff, 436 + yoff);
  ctx.bezierCurveTo(335 + xoff, 435 + yoff, 360 + xoff, 417 + yoff, 361 + xoff, 417 + yoff);
  ctx.stroke();


	  ctx.fillStyle= "black";
	  ctx.fill();
}


function odpriBelo(x){
	document.getElementById('main').classList.remove("blackBackground")
	document.getElementById('togetherAsTwo').classList.remove("whiteSequel3")
	document.getElementById(x).classList.toggle("whiteSequel1");
	
	document.getElementById('main').classList.toggle("whiteBackground")
}

function odpriCrno(x){
	document.getElementById('main').classList.remove("whiteBackground")
	document.getElementById('togetherAsOne').classList.remove("whiteSequel1")
	document.getElementById(x).classList.toggle("whiteSequel3");
	
	document.getElementById('main').classList.toggle("blackBackground")
}

function sweetAlert(){
	Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'We are out of stock!',
  showConfirmButton: false,
  timer: 1500
  
})
}


function alert2(){
	Swal.fire({
  icon: 'error',
  title: 'Error',
  text: 'Info is currently unavailable',
  showConfirmButton: false,
  timer: 1500
  
})
}


