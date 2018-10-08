
particlesJS("particles-js", { 
    "particles": { 
        "number": { 
            "value": 120, 
            "density": { 
                "enable": true, 
                "value_area": 800 
            } 
        }, "color": { 
            "value": "#13e8e9" 
        }, "shape": { 
            "type": "edge", 
            "stroke": { 
                "width": 0, 
                "color": "#000000" 
            }, "polygon": { 
                "nb_sides": 5 
            }, "image": { 
                "src": "img/github.svg", 
                "width": 100, 
                "height": 100 
            } 
        }, "opacity": { 
            "value": 0.5, 
            "random": true, 
            "anim": { 
                "enable": true, 
                "speed": 1.998001998001998, 
                "opacity_min": 0.1, 
                "sync": true 
            } 
        }, "size": { 
            "value": 3, 
            "random": true, 
            "anim": { 
                "enable": true, 
                "speed": 40, 
                "size_min": 0.1, 
                "sync": true 
            } 
        }, "line_linked": { 
            "enable": true, 
            "distance": 150, 
            "color": "#13e8e9", 
            "opacity": 0.4, 
            "width": 1 
        }, "move": { 
            "enable": true, 
            "speed": 6, 
            "direction": "none", 
            "random": false, 
            "straight": false, 
            "out_mode": "out", 
            "bounce": false, 
            "attract": { 
                "enable": false, 
                "rotateX": 600, 
                "rotateY": 1200 
            } 
        } 
    }, "interactivity": { 
        "detect_on": "window", 
        "events": { 
            "onhover": { 
                "enable": true, 
                "mode": "grab" 
            }, "onclick": { 
                "enable": true, 
                "mode": "push" 
            }, "resize": true 
        }, "modes": { 
            "grab": { 
                "distance": 400, 
                "line_linked": { 
                    "opacity": 1 
                } 
            }, "bubble": { 
                "distance": 191.80819180819182, 
                "size": 40, 
                "duration": 2, 
                "opacity": 8, 
                "speed": 3 
            }, "repulse": { 
                "distance": 200, 
                "duration": 0.4 
            }, "push": { 
                "particles_nb": 4 
            }, "remove": { 
                "particles_nb": 2 
            } 
        } 
    }, "retina_detect": true 
});


 /* NAME */
$(document).ready(function () {

    var $randomnbr = $('.nbr');
    var $timer = 30;
    var $it;
    var $data = 0;
    var index;
    var change;
    var letters = ["v", "i", "s", "h", "r", "a", "m"];

    $randomnbr.each(function () {

        change = Math.round(Math.random() * 100);
        $(this).attr('data-change', change);

    });

    function random() {
        return Math.round(Math.random() * 9);
    };

    function select() {
        return Math.round(Math.random() * $randomnbr.length + 1);
    };

    function value() {
        $('.nbr:nth-child(' + select() + ')').html('' + random() + '');
        $('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
        $data++;

        $randomnbr.each(function () {
            if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                index = $('.ltr').index(this);
                $(this).html(letters[index]);
                $(this).removeClass('nbr');
            }
        });

    };

    $it = setInterval(value, $timer);

});