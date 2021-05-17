const form = document.getElementById( "cv" );
form.addEventListener( "submit", function ( event ) {
    event.preventDefault();
    document.location = "completed.html";
} );