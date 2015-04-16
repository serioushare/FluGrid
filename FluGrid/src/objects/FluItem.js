
function FluItem(element, parent){
	var Me = this;
	Me.Element = element;
	Me.Type = element.getAttribute('type')||'column';
	
	Me.Items = new Array();
	
	Me.Body = document.createElement('div');
	
	var itms = Me.Element.childNodes;
	for(var i=0; i<itms.length; i++){
		if((itms[i].outerHTML != null) && (typeof(itms[i].outerHTML) !== 'undefined')){
			Me.Items[i] = itms[i];
//debug.info(itms[i].outerHTML);
		}
	}
}
