/* loader.js **********************************************************************
 *                                                                                *
 * This script keeps track of the load-state of the document (page), and once     *
 * complete, starts the initialization of FluGrid.                                *
 *                                                                                *
 * Writen by E.P. de Haas                                                         *
 ********************************************************** © Serious Hare, 2015 **/

FluGrid_Loader=window.setInterval(function(){
	if(document.readyState=='complete'){
		window.clearInterval(FluGrid_Loader);
		debug.info('loaded');
	//init calls come here
		FluGrid_Init();
	}
},1);
