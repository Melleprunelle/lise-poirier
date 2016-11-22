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

//icone presentation
$('#present-1').ready(function () {
    $('#present-1').mouseenter(function () {
        $(this).css("width", "66.66%");
        $(this).css("transition", "0.5s");
            var div = $('#hover-present-1');
            div.animate({
                width: '100%',
                opacity: '1'
            }, "slow");
    });
    $('#present-1').mouseleave(function () {
        $(this).css("width", "16.66%");
            var div = $('#hover-present-1');
            div.animate({
                width: '100%',
                opacity: '0',
                transition: '0s'
            }, "slow");
        });
});

$('#present-2').ready(function () {
    $('#present-2').mouseenter(function () {
        $(this).css("width", "66.66%");
        $(this).css("transition", "0.5s");
            var div = $('#hover-present-2');
            div.animate({
                width: '100%',
                opacity: '1'
            }, "slow");
    });
    $('#present-2').mouseleave(function () {
        $(this).css("width", "16.66%");
            var div = $('#hover-present-2');
            div.animate({
                width: '100%',
                opacity: '0',
                transition: '0s'
            }, "slow");
        });
});

$('#present-3').ready(function () {
    $('#present-3').mouseenter(function () {
        $(this).css("width", "66.66%");
        $(this).css("transition", "0.5s");
            var div = $('#hover-present-3');
            div.animate({
                width: '100%',
                opacity: '1'
            }, "slow");
    });
    $('#present-3').mouseleave(function () {
        $(this).css("width", "16.66%");
            var div = $('#hover-present-3');
            div.animate({
                width: '100%',
                opacity: '0',
                transition: '0s'
            }, "slow");
        });
});

//barre de progression
$('#flamand').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            "width": "12vw",
            "transition": "4s"
        })
    } else {
        $(this).css({
            "width": "3vw"
        })
    }
});

$('#elephant').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            "width": "12vw",
            "transition": "4s"
        })
    } else {
        $(this).css({
            "width": "3vw"
        })
    }
});

$('#bear').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            "width": "10vw",
            "transition": "4s"
        })
    } else {
        $(this).css({
            "width": "3vw"
        })
    }
});

$('#seal').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            "width": "9vw",
            "transition": "4s"
        })
    } else {
        $(this).css({
            "width": "3vw"
        })
    }
});

$('#canon').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            "width": "9vw",
            "transition": "4s"
        })
    } else {
        $(this).css({
            "width": "3vw"
        })
    }
});
$('#canon').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            "width": "9vw",
            "transition": "4s"
        })
    } else {
        $(this).css({
            "width": "3vw"
        })
    }
});

$('#magician').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            "width": "9vw",
            "transition": "4s"
        })
    } else {
        $(this).css({
            "width": "3vw"
        })
    }
});
$('#lion').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            "width": "9vw",
            "transition": "4s"
        })
    } else {
        $(this).css({
            "width": "3vw"
        })
    }
});

$('#strongman').on('inview', function (event, isInView) {
    if (isInView) {
        $(this).css({
            "width": "9vw",
            "transition": "4s"
        })
    } else {
        $(this).css({
            "width": "3vw"
        })
    }
});


//Scroll fluid pour l'ancre
$(document).ready(function() {
		$('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});


//hover-projets
(function() {
	function init() {
		var speed = 250,
			easing = mina.easeinout;

		[].slice.call ( document.querySelectorAll( '#hover-projet > a' ) ).forEach( function( el ) {
			var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
				pathConfig = {
					from : path.attr( 'd' ),
					to : el.getAttribute( 'data-path-hover' )
				};

			el.addEventListener( 'mouseenter', function() {
				path.animate( { 'path' : pathConfig.to }, speed, easing );
			} );

			el.addEventListener( 'mouseleave', function() {
				path.animate( { 'path' : pathConfig.from }, speed, easing );
			} );
		} );
	}

	init();

})();