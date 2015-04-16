<?php
if($_GET['debugger']){
	$debugger = $_GET['debugger'];
}else{
	$debugger = "nodebug.js";
}


// Creation of empty FluGrid Object
	echo "var FluGrid = {};\n";
	
	
	
// Include for support script

/* Debugger */                             include("ref/".$debugger);



// Includes for the components of FluGrid
	include("src/loader.js");
?>