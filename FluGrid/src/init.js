
function FluGrid_Init(){
	var style = document.createElement("style");
	style.innerHTML = "\n";
	style.innerHTML = style.innerHTML+"flugrid{display:none !important;}\n";
	document.getElementsByTagName("head")[0].appendChild(style);
}
