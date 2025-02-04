
"use strict";
    
    
$( "#CircleForm" ).validate({

});

function CircleCalculations() {
    if ($("#CircleForm").valid()) {
        let x = 1;
    window.alert("Start of Calculations");
}
}

function calculateDiameter(r) {
    return 2 * r;
}