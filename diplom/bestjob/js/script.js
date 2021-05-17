const form = document.getElementById( "cv" );
form.addEventListener( "submit", function ( event ) {
    event.preventDefault();
    document.location = "completed.html";
} );

var strGET = window.location.search.replace( '?s=', '');
var inpJob = document.getElementById('inpjob');
inpJob.value = decodeURIComponent(strGET);
console.log(strGET);