window.addEventListener( "load", function () {
    const form = document.getElementById( "fscript" );
    form.addEventListener( "submit", function ( event ) {
        event.preventDefault();
        const receptionForm = document.getElementById('reception-form');
        const receptionDone = document.getElementById('reception-done');
        receptionForm.style.display = "none";
        receptionDone.style.display = "flex";
    } );
} );