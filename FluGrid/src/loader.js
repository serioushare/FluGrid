
FluGrid.Loader=window.setInterval(function(){
	if(document.readyState=='complete'){
		window.clearInterval(FluGrid.Loader);
		debug.info('loaded');
		//call to init comes here
	}
},1);
