$('#eenden').hide();

teller = 0;
var element = document.getElementById('eenden');

$('#btn').on('click', function () {
    $('#eenden').slideDown();
   // $('#intro').hide();

    $('html, body').animate({
        scrollTop: $("#eenden").offset().top
    }, 100);
    teller++;
    if (teller < 1) {
        $('#eenden').append('<img src="scroll.png">');
        teller = 0;
    } else {
        window.onscroll = function () {

            if (teller < 20) {
                teller++;
            } else {
                teller = 0;
                $('#eenden').append('<img src="scroll.png">');
            //  element.removeChild(element.lastChild);
            };
            console.log(teller);

        }
    }
});


console.log("Kwaak");