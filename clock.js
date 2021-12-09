function clock() {
    var hrs = document.getElementById('hrs');
    var min = document.getElementById('min');
    var sec = document.getElementById('sec');
    var ams = document.getElementById('ams');


    var time = new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();

    hrs.innerHTML = a;
    min.innerHTML = b;
    sec.innerHTML = c;
    if (hrs > 12) {
        ams = "PM";
    }

}
setInterval(clock, 1000);

function settime() {
    var i = document.getElementById('wake').value;
    var h = new Date().getHours();
    if (i == h) {
        document.getElementById(`divdend`).style.backgroundImage = "url(wake.jpeg)";
        document.getElementById('lunch').innerHTML = "Let's Have Some Breakfast!";
        makediv();
    }
    var j = document.getElementById('wake1').value;
    var o = new Date().getHours();
    if (j == o) {
        document.getElementById(`divdend`).style.backgroundImage = "url(lunch.jpeg)";
        document.getElementById('lunch').innerHTML = "Let's Have Lunch!";
        makediv1();
    }
    var k = document.getElementById('wake2').value;
    var m = new Date().getHours();
    if (k == m) {
        document.getElementById(`divdend`).style.backgroundImage = "url(night.jpeg)";
        document.getElementById('lunch').innerHTML = "Let's Take A Nap!";
        makediv2();
    }


}

function makediv() {
    var x = document.createElement('div');
    x.className = "grid-item";
    x.id = "timeline";
    document.getElementById('grid-container1').appendChild(x);

    var y = document.getElementById('wake');
    var z = y.options[y.selectedIndex].text;
    document.getElementById('timeline').innerHTML = "Wake up Time:-" + z;


}

function makediv1() {
    var x = document.createElement('div');
    x.className = "grid-item";
    x.id = "timeline";
    document.getElementById('grid-container1').appendChild(x);

    var y = document.getElementById('wake1');
    var z = y.options[y.selectedIndex].text;
    document.getElementById('timeline').innerHTML = "Lunch Time:-" + z;


}

function makediv2() {
    var x = document.createElement('div');
    x.className = "grid-item";
    x.id = "timeline";
    document.getElementById('grid-container1').appendChild(x);

    var y = document.getElementById('wake2');
    var z = y.options[y.selectedIndex].text;
    document.getElementById('timeline').innerHTML = "Nap Time:-" + z;


}