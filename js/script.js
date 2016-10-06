//animation navbar fixed (transparence)
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.navbar').css('color', 'white');
                $('.navbar').css('transition', '0.5s');
            } else {
                $(".navbar").css('color', '#222');
                $('.navbar').css('transition', '0.5s');
            }
        });
    }
});


//affichage projet

function affichageprojet() {
    document.getElementById("affichage-projet").style.transition = "all 5s";
    document.getElementById("affichage-projet").style.display = "block";
}