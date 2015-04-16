
function FluGrid_Init(){
	var style = document.createElement('style');
	style.innerHTML = '\n';
	style.innerHTML = style.innerHTML+'flugrid{display:none !important;}\n';
	document.getElementsByTagName('head')[0].appendChild(style);
	
	var fgs = document.getElementsByTagName('flugrid');
	for(var i=0; i<fgs.length; i++){
		FluGrids[i] = new FluGrid(fgs[i]);
	}

	FluController.Draw();
}
