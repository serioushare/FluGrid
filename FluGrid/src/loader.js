
FluGrid_Loader=window.setInterval(function(){
	if(document.readyState=='complete'){
		window.clearInterval(FluGrid_Loader);
		debug.info('loaded');
	//init calls come here
		FluGrid_Init();
	}
},1);
