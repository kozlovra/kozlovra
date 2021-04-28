window.addEventListener( "load", function () {
    const form = document.getElementById( "fscript" );
    form.addEventListener( "submit", function ( event ) {
        event.preventDefault();
        alert('Вы успешно записались на прием. Благодарим Вас за обращение в нашу клинику!');
        document.location.reload();
    } );
} );