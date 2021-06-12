const btn1 = document.querySelector('#ue2a'); // get buttton1
const btn2 = document.querySelector('#ue3b'); // get buttton2
const btn3 = document.querySelector('#ue4'); // get buttton3
const btn4 = document.querySelector('#game'); // get buttton4

btn1.onmouseover = function () {
  btn1.onmousemove = function () {
    var btn1Info = btn1.getBoundingClientRect(); // get button info

    // get mouse x and y position on button
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var btn1X = btn1Info.x;
    var btn1Y = btn1Info.y;
    var posOnButtonX = mouseX - btn1X;
    var posOnButtonY = mouseY - btn1Y;

    function map(value, low1, high1, low2, high2) {
      return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
    }

    var X = map(posOnButtonX, 0, btn1Info.width, 0, 100);
    var Y = map(posOnButtonY, 0, btn1Info.height, 0, 100);

    // change bg on mouse move
    btn1.style.background =
      'radial-gradient(circle at  ' + X + '%  ' + Y + '%, #ff9f31, #be1e66)';
  };
};
btn1.onmouseout = function () {
  btn1.style.background =
    'radial-gradient(circle at  0%  0%, #ff9f31, #be1e66)';
};

btn2.onmouseover = function () {
  btn2.onmousemove = function () {
    var btn2Info = btn2.getBoundingClientRect(); // get button info

    // get mouse x and y position on button
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var btn2X = btn2Info.x;
    var btn2Y = btn2Info.y;
    var posOnButtonX = mouseX - btn2X;
    var posOnButtonY = mouseY - btn2Y;

    function map(value, low1, high1, low2, high2) {
      return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
    }

    var X = map(posOnButtonX, 0, btn2Info.width, 0, 100);
    var Y = map(posOnButtonY, 0, btn2Info.height, 0, 100);

    // change bg on mouse move
    btn2.style.background =
      'radial-gradient(circle at  ' + X + '%  ' + Y + '%, #26d0ce, #1a2980)';
  };
};
btn2.onmouseout = function () {
  btn2.style.background =
    'radial-gradient(circle at  0%  0%, #26d0ce, #1a2980)';
};

btn3.onmouseover = function () {
  btn3.onmousemove = function () {
    var btn3Info = btn3.getBoundingClientRect(); // get button info

    // get mouse x and y position on button
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var btn3X = btn3Info.x;
    var btn3Y = btn3Info.y;
    var posOnButtonX = mouseX - btn3X;
    var posOnButtonY = mouseY - btn3Y;

    function map(value, low1, high1, low2, high2) {
      return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
    }

    var X = map(posOnButtonX, 0, btn3Info.width, 0, 100);
    var Y = map(posOnButtonY, 0, btn3Info.height, 0, 100);

    // change bg on mouse move
    btn3.style.background =
      'radial-gradient(circle at  ' + X + '%  ' + Y + '%, #ff6c8c, #61045f)';
  };
};
btn3.onmouseout = function () {
  btn3.style.background =
    'radial-gradient(circle at  0%  0%, #ff6c8c, #61045f)';
};

btn4.onmouseover = function () {
  btn4.onmousemove = function () {
    var btn4Info = btn4.getBoundingClientRect(); // get button info

    // get mouse x and y position on button
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var btn4X = btn4Info.x;
    var btn4Y = btn4Info.y;
    var posOnButtonX = mouseX - btn4X;
    var posOnButtonY = mouseY - btn4Y;

    function map(value, low1, high1, low2, high2) {
      return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
    }

    var X = map(posOnButtonX, 0, btn4Info.width, 0, 100);
    var Y = map(posOnButtonY, 0, btn4Info.height, 0, 100);

    // change bg on mouse move
    btn4.style.background =
      'radial-gradient(circle at  ' + X + '%  ' + Y + '%, #bfda2b, #266104)';
  };
};
btn4.onmouseout = function () {
  btn4.style.background =
    'radial-gradient(circle at  0%  0%, #bfda2b, #266104)';
};
