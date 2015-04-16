
var flgDefaults = {
	columnWidth:'400px',
	direction:'horizontal'
}

var testColumn;



function buildFluGrid(flugrid){
	fluitems=flugrid.getElementsByTagName('fluitem');
	console.info('Found: FluGrid('+flugrid.id+'); containing '+fluitems.length+' elements');
	var flg = document.createElement('div');
	flg.className = flugrid.className;
	flugrid.ref = flg;
	var parent = flugrid.parentNode;
	parent.insertBefore(flg, flugrid);
	
	for(var i=0;i<fluitems.length;i++){
		var fluitem = fluitems[i];
		var flutype = fluitem.getAttribute('type')||'columns';
		console.info(' > FluItem: '+flutype);
		switch(flutype){
			case "columns":
				buildFluColumns(flugrid, fluitem);
				break;
		}
	}
}

function buildFluColumns(flugrid, fluitem){
	var fli = document.createElement('div');
	var dir = flgDefaults.direction;
	if(fluitem.hasAttribute('direction')){
		dir = fluitem.getAttribute('direction');
		if(dir != ('horizontal'||'vertical')){
			dir = flgDefaults.direction;
		}
	}
	fli.className = fluitem.className;
	fli.classList.add('fl_item');
	flugrid.ref.appendChild(fli);
	fli.style.height = flugrid.ref.clientHeight+'px';
	
	var fc = fluitem.childNodes;
	var pc = 0;
	var els = new Array();
	for(var i=0;i<fc.length;i++){
		var nn = fc[i].nodeName
		if(nn!='#text'){
			console.info(' >   Element: '+nn);
			els.push(fc[i]);
		}
	}
	console.info(' >   Element count: '+els.length);
	
	var hlimit = flugrid.ref.clientHeight-40;
	
	var cc = 0;
	for(var i=0;i<els.length;i++){
		var nn = els[i].nodeName
		switch(nn){
			case 'FLUTITLE':
				var el = document.createElement('div');
				el.innerHTML = els[i].innerHTML;
				el.className = els[i].className;
				el.classList.add('fl_title');
				fli.appendChild(el);
				
				hlimit = hlimit - el.clientHeight;
				
				break;
			case 'P':
				var store = testColumn.innerHTML;
				var pwords = els[i].innerHTML.split('. ');
				
				var newp = document.createElement('p');
				testColumn.appendChild(newp);
				
				for(var j=0;j<pwords.length;j++){
					var store2 = newp.innerHTML;
					if(testColumn.clientHeight>hlimit){
						console.info(store2+'.');
						newp.innerHTML = store2+'.';
						store = testColumn.innerHTML;
						newp.innerHTML = pwords[j];
						testColumn.innerHTML = '';
						testColumn.appendChild(newp);
						
						var col = document.createElement('div');
						col.className = 'fl_column';
						col.style.left = (5+(cc*0))+'px';
						col.innerHTML = store
						fli.appendChild(col);
					
						cc++;
					}else{
						if(store2==''){
							newp.innerHTML = pwords[j];
						}else{
							newp.innerHTML = store2+'. '+pwords[j];
						}
					}
				}
				break;
			default:
				var store = testColumn.innerHTML;
				
				var elc = els[i].cloneNode(true);
				
				testColumn.appendChild(elc);
				if(testColumn.clientHeight>hlimit){
					console.info(store);
					testColumn.innerHTML = '';
					testColumn.appendChild(elc);
					
					var col = document.createElement('div');
					col.className = 'fl_column';
					col.style.left = (5+(cc*0))+'px';
					col.innerHTML = store;
					fli.appendChild(col);
					
					cc++;
				}
		}
	}
	var store = testColumn.innerHTML;
	console.info(store);
					
	var col = document.createElement('div');
	col.className = 'fl_column';
	col.style.left = (5+(cc*0))+'px';
	col.innerHTML = store;
	fli.appendChild(col);
	
	testColumn.innerHTML = '';
}

var fgl=window.setInterval(function(){
	if(document.readyState=='complete'){
		window.clearInterval(fgl);
		fgs=document.getElementsByTagName('flugrid');
		testColumn=document.getElementById('col_tester');
		for(var i=0;i<fgs.length;i++){
			var f = fgs[i];
			f.id = f.id||'__'+i;
			buildFluGrid(f);
		}
	}
},1);

function rebuild(){
	
	var bdy = document.getElementById('page_body')
	var fgs = document.getElementsByClassName('fl_body')
	
	for(var i=0;i<fgs.length;i++){
		if(fgs[i].nodeName=='DIV'){
			bdy.removeChild(fgs[i]);
		}
	}
	
	fgs=document.getElementsByTagName('flugrid');
	testColumn=document.getElementById('col_tester');
	for(var i=0;i<fgs.length;i++){
		var f = fgs[i];
		f.id = f.id||'__'+i;
		buildFluGrid(f);
	}
}
