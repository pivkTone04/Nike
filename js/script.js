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
