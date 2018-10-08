

var d = new Date();
var a = d.getDate() + (d.getMonth() + (d.getFullYear() - 1700) * 16) * 32;;

function calcAge(dtBirth) {
    var b = dtBirth.getDate() + (dtBirth.getMonth() + (dtBirth.getFullYear() - 1700) * 16) * 32;
    var x = Math.floor((a - b) / 32 / 16);
    return x < 0 ? null : x;
}
function calcAgeInMonths(dtBirth) {
    var b = dtBirth.getDate() + (dtBirth.getMonth() + (dtBirth.getFullYear() - 1700) * 16) * 32;
    var x = Math.floor(((a - b) / 32 / 16) * 12);
    return x < 0 ? null : x;
}
function calcAgeInDays(dtBirth) {
    var b = dtBirth.getDate() + (dtBirth.getMonth() + (dtBirth.getFullYear() - 1700) * 16) * 32;
    var x = Math.floor(((a - b) / 32 / 16) * 365);
    return x < 0 ? null : x;
}
function calcAgeInHours(dtBirth) {
    var b = dtBirth.getDate() + (dtBirth.getMonth() + (dtBirth.getFullYear() - 1700) * 16) * 32;
    var x = Math.floor((((a - b) / 32 / 16) * 365) * 24);
    return x < 0 ? null : x;
}
function calcAgeInMins(dtBirth) {
    var b = dtBirth.getDate() + (dtBirth.getMonth() + (dtBirth.getFullYear() - 1700) * 16) * 32;
    var x = Math.floor((((a - b) / 32 / 16) * 365) * 24) * 60;
    return x < 0 ? null : x;
}
function calcAgeInSec(dtBirth) {
    var b = dtBirth.getDate() + (dtBirth.getMonth() + (dtBirth.getFullYear() - 1700) * 16) * 32;
    var x = Math.floor(((((a - b) / 32 / 16) * 365) * 24) * 60) * 60;
    return x < 0 ? null : x;
}
function leapYear(dtBirth) {
    var year = dtBirth.getFullYear();
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        return "a Leap Year";
    } else {
        return "not a Leap Year";
    }
}
function getZodiac(dtBirth) {
    var zod_signs = ["Capricorn", "Aquarius", "Pisces", "Aries",
        "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio",
        "Sagittarius"];
    var zods = {
        Capricorn: 'Capricorn   <img src="../images/capricorn.png"></img>',
        Aquarius: 'Aquarius   <img src="../images/aquarius.png"></img>',
        Pisces: 'Pisces   <img src="../images/pisces.png"></img>',
        Aries: 'Aries   <img src="../images/aries.png"></img>',
        Taurus: 'Taurus   <img src="../images/taurus.png"></img>',
        Gemini: 'Gemini   <img src="../images/gemini.png"></img>',
        Cancer: 'Cancer   <img src="../images/cancer.png"></img>',
        Leo: 'Leo   <img src="../images/leo.png"></img>',
        Virgo: 'Virgo   <img src="../images/virgo.png"></img>',
        Libra: 'Libra   <img src="../images/libra.png"></img>',
        Scorpio: 'Scorpio   <img src="../images/scorpion.png"></img>',
        Sagittarius: 'Sagittarius   <img src="../images/sagittarius.png"></img>'
    }
    var day = dtBirth.getDate();
    var month = dtBirth.getMonth();
    var zodiacSign = "";
    switch (month) {
        case 0: {//January
            if (day < 20) {
                return zods.Capricorn;
            } else {
                return zods.Aquarius;
            }
        } break;
        case 1: {//February
            if (day < 19) {
                return zods.Aquarius;
            } else {
                return zods.Pisces;
            }
        } break;
        case 2: {//March
            if (day < 21) {
                return zods.Pisces;
            } else {
                return zods.Aries;
            }
        } break;
        case 3: {//April
            if (day < 20) {
                return zods.Aries;
            } else {
                return zods.Taurus;
            }
        } break;
        case 4: {//May
            if (day < 21) {
                return zods.Taurus;
            } else {
                return zods.Gemini;
            }
        } break;
        case 5: {//June
            if (day < 21) {
                return zods.Gemini;
            } else {
                return zods.Cancer;
            }
        } break;
        case 6: {//July
            if (day < 23) {
                return zods.Cancer;
            } else {
                return zods.Leo;
            }
        } break;
        case 7: {//August
            if (day < 23) {
                return zods.Leo;
            } else {
                return zods.Virgo;
            }
        } break;
        case 8: {//September
            if (day < 23) {
                return zods.Virgo;
            } else {
                return zods.Libra;
            }
        } break;
        case 9: {//October
            if (day < 23) {
                return zods.Libra;
            } else {
                return zods.Scorpio;
            }
        } break;
        case 10: {//November
            if (day < 22) {
                return zods.Scorpio;
            } else {
                return zods.Sagittarius;
            }
        } break;
        case 11: {//December
            if (day < 22) {
                return zods.Sagittarius;
            } else {
                return zods.Capricorn;
            }
        } break;
        default: {
            text = "ERROR!!";
        }
    }
}
var daysOfAWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday');
function CalDayOfWeek(dtBirth) {
    var d = daysOfAWeek[dtBirth.getDay()];
    return d;
}

$('input').dateDropper();
$(".calc_btn").click(function calc() {
    var dtBirth = new Date(document.getElementById('birthdate').value);
    document.getElementById('years').innerHTML = "You are " + calcAge(dtBirth) + " years old";
    document.getElementById('months').innerHTML = "You have spent " + calcAgeInMonths(dtBirth) + " months on Earth";
    document.getElementById('days').innerHTML = "You have spent " + calcAgeInDays(dtBirth) + " days on Earth";
    document.getElementById('hours').innerHTML = "You have spent " + calcAgeInHours(dtBirth) + " hours on Earth";
    document.getElementById('mins').innerHTML = "You have spent " + calcAgeInMins(dtBirth) + " minutes on Earth";
    document.getElementById('sec').innerHTML = "You have spent " + calcAgeInSec(dtBirth) + " seconds on Earth";
    document.getElementById('lp').innerHTML = "The year you were born was " + leapYear(dtBirth);
    document.getElementById('zod').innerHTML = "Your Zodiac Sign is " + getZodiac(dtBirth);
    document.getElementById('day').innerHTML = "You were born on " + CalDayOfWeek(dtBirth);
    $('.results').animate({
        opacity: 0.75,
        height: "toggle"   
    }, 5000 );
    
    return false;
});


particlesJS("particles-js", { 
    "particles": { 
        "number": { 
            "value": 100, 
            "density": { 
                "enable": true, 
                "value_area": 800 
            } 
        },  "color": { 
            "value": "#13a2de" 
        },  "shape": { 
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
                "enable": false, 
                "speed": 0.5, 
                "opacity_min": 0.1, 
                "sync": true 
            } 
        }, "size": { 
            "value": 3, 
            "random": true, 
            "anim": { 
                "enable": false, 
                "speed": 40, 
                "size_min": 0.1, 
                "sync": false 
            } 
        }, "line_linked": { 
            "enable": true, 
            "distance": 150, 
            "color": "#4ab1b1", 
            "opacity": 0.4, 
            "width": 1 
        }, "move": { 
            "enable": true, 
            "speed": 6, 
            "direction": "none", 
            "random": true, 
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
                "mode": "bubble" 
            }, "onclick": { 
                "enable": true, 
                "mode": "remove" 
            }, "resize": true 
        }, "modes": { 
            "grab": { 
                "distance": 400, 
                "line_linked": { 
                    "opacity": 1 
                } 
            }, "bubble": { 
                "distance": 60.90579092260088, 
                "size": 12.181158184520177, 
                "duration": 2.273816194443766, 
                "opacity": 0.5522125043649146, 
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