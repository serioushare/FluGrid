/* FluGrid.js *********************************************************************
 *                                                                                *
 * 
 *                                                                                *
 * Writen by E.P. de Haas                                                         *
 ********************************************************** © Serious Hare, 2015 **/


function FluGrid(element){
	var Me       = this;
	Me.Element   = element;
	Me.Id        = element.id||'fg_'+FluGrids.length;
	Me.ClassName = element.className||'';
	Me.Direction = element.getAttribute('direction')||'horizontal';

	Me.Items = new Array();
		
debug.info('FluGrid ('+Me.Id+') found');
	
	var fi = element.getElementsByTagName('fluitem');
	for(var i=0; i<fi.length; i++){
		Me.Items[i] = new FluColumn(fi[i], Me);
	}
	
debug.info('FluGrid contains '+fi.length+' items');
	
	Me.Body = document.createElement('div');
	Me.Body.id        = Me.Id;
	Me.Body.className = Me.ClassName;
	
	Me.MaxHeight = function(){
		return Me.Element.parentNode.scrollHeight;
	}
}
