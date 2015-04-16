
FluGrid.Loader=window.setInterval(function(){
	if(document.readyState=='complete'){
		window.clearInterval(FluGrid.Loader);
		FluGrid.Init()
	}
},1);
