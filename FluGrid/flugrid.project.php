<?php
if($_GET['debugger']){$debugger = $_GET['debugger'];}else{$debugger = "nodebug.js";};

// include support scripts
/* Debugger */                             include("ref/".$debugger);


// includes for the components of FluGrid
include("src/globals.js");
include("src/loader.js");
include("src/init.js");

include("src/objects/FluGrid.js");
include("src/objects/FluItem.js");

include("src/objects/FluController.js");
?>