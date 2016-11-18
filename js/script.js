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
    var element = document.getElementById("affichage-projet");
    if (element.style.display == "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

//hover presentation
$('#present-1').ready(function () {
    $('#present-1').mouseenter(function () {
        $(this).css("width", "66.66%");
        $(this).css("transition", "1s");
        $('#hover-present-1').mouseenter(function () {
            var div = $('#hover-present-1');
            div.animate({
                width: '100%',
                opacity: '1'
            }, "slow");
        });
    });
    $('#present-1').mouseleave(function () {
        $(this).css("width", "16.66666667%");
           $('#hover-present-1').mouseleave(function () {
            var div = $('#hover-present-1');
            div.animate({
                width: '100%',
                opacity: '0',
                transition: '0s'
            }, "slow");
        });
    
    });
});

//barre de progression
$('#flamand').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            "width": "35vw",
            "transition": "3s"
        })
    } else {
        $(this).css({
            "width": "5vw"
        })
    }
});

$('#elephant').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            "width": "32vw",
            "transition": "3s"
        })
    } else {
        $(this).css({
            "width": "5vw"
        })
    }
});

$('#bear').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            "width": "28vw",
            "transition": "3s"
        })
    } else {
        $(this).css({
            "width": "5vw"
        })
    }
});

$('#seal').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            "width": "20vw",
            "transition": "3s"
        })
    } else {
        $(this).css({
            "width": "5vw"
        })
    }
});