
"use strict";
    
$( "#CircleForm" ).validate({

});

function calculateCircle() {
    if ($("#CircleForm").valid()) {
        let radius = document.getElementById("radius").value;
        let radiusfp = parseFloat(radius);
        let diameter = calculateDiameter(radiusfp);
        document.getElementById("diameter").innerHTML = diameter;
        let circumference = calculateCircumference(radiusfp);
        document.getElementById("circumference").innerHTML = circumference;
        let area = calculateArea(radiusfp);
        document.getElementById("area").innerHTML = area;
    }
}

function calculateDiameter(r) {
    return 2 * r;
}

function calculateCircumference(r) {
    return 2 * Math.PI * r;
}

function calculateArea(r) {
    return Math.PI * r * r;
}

function clearForm() {
    document.getElementById("radius").value = "";
    document.getElementById("radiuserror").innerHTML = "";
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
    document.getElementById("area").innerHTML = "";
}