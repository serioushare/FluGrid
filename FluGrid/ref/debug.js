var debug = {};
debug.info = function(){
	if(arguments.length==1){
		console.info(arguments[0])
	}else{
		console.info(arguments)
	}
};
