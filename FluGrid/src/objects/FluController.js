var FluController = new function(){
	var Me = this;


	Me.Draw = function(){
		for(var i=0; i<FluGrids.length; i++){
			FluGrids[i].Element.parentNode.insertBefore(FluGrids[i].Body, FluGrids[i].Element);
			
			for(var j=0; j<FluGrids[i].Items.length; j++){
				FluGrids[i].Body.appendChild(FluGrids[i].Items[j].Body);
				switch(FluGrids[i].Items[j].Type){
				  case 'column':
					Me.DrawColumn(FluGrids[i], FluGrids[i].Items[j]);
					break
				}
			}
		}
	}
	
	Me.DrawColumn = function(flugrid, fluitem){
		var TestColumn = document.createElement('div');
		
	}
}