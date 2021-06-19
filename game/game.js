// ----- VARS -----

var hitswitch;

var menu = 1;

// key switches
var Moves = {
  up: false,
  down: false,
  left: false,
  right: false,
};

// finish coords
const finish = {
  x: 972,
  y: 0,
  w: 324,
  h: 108,
};

//gates setup
const lbgate1 = {
  x: 1001,
  y: 569,
  hopside: 1030,
  hopfrom: 603,
  hopto: 539,
};
const mbgate1 = {
  x: 29,
  y: 569,
  hopside: 0,
  hopfrom: 603,
  hopto: 539,
};
const mbgate2 = {
  x: 1001,
  y: 461,
  hopside: 1030,
  hopfrom: 495,
  hopto: 431,
};
const rbgate2 = {
  x: 29,
  y: 461,
  hopside: 0,
  hopfrom: 495,
  hopto: 431,
};
const rbgate3 = {
  x: 785,
  y: 29,
  hopside: 0,
  hopfrom: 819,
  hopto: 755,
};
const rmgate3 = {
  x: 785,
  y: 1001,
  hopside: 1030,
  hopfrom: 819,
  hopto: 755,
};
const mbgate4 = {
  x: 677,
  y: 29,
  hopside: 0,
  hopfrom: 711,
  hopto: 647,
};
const mmgate4 = {
  x: 677,
  y: 1001,
  hopside: 1030,
  hopfrom: 711,
  hopto: 647,
};
const mmgate5 = {
  x: 29,
  y: 569,
  hopside: 0,
  hopfrom: 603,
  hopto: 539,
};
const lmgate5 = {
  x: 1001,
  y: 569,
  hopside: 1030,
  hopfrom: 603,
  hopto: 539,
};
const mbgate6 = {
  x: 1001,
  y: 785,
  hopside: 1030,
  hopfrom: 819,
  hopto: 755,
};
const rbgate6 = {
  x: 29,
  y: 785,
  hopside: 0,
  hopfrom: 819,
  hopto: 755,
};
const lmgate7 = {
  x: 677,
  y: 29,
  hopside: 0,
  hopfrom: 711,
  hopto: 647,
};
const ltgate7 = {
  x: 677,
  y: 1001,
  hopside: 1030,
  hopfrom: 711,
  hopto: 647,
};
const ltgate8 = {
  x: 1001,
  y: 569,
  hopside: 1030,
  hopfrom: 603,
  hopto: 539,
};
const mtgate8 = {
  x: 29,
  y: 569,
  hopside: 0,
  hopfrom: 603,
  hopto: 539,
};
const rtgate9 = {
  x: 245,
  y: 1001,
  hopside: 1030,
  hopfrom: 324,
  hopto: 215,
};
const rmgate9 = {
  x: 245,
  y: 29,
  hopside: 0,
  hopfrom: 324,
  hopto: 215,
};
const rmgate10 = {
  x: 29,
  y: 677,
  hopside: 0,
  hopfrom: 755,
  hopto: 647,
};
const mmgate10a = {
  x: 1001,
  y: 677,
  hopside: 1030,
  hopfrom: 755,
  hopto: 647,
};
const mmgate10b = {
  x: 667,
  y: 29,
  hopside: 0,
  hopfrom: 755,
  hopto: 647,
};
const mtgate10 = {
  x: 667,
  y: 1001,
  hopside: 1030,
  hopfrom: 755,
  hopto: 647,
};
const lmgate11 = {
  x: 353,
  y: 1001,
  hopside: 1030,
  hopfrom: 432,
  hopto: 323,
};
const lbgate11 = {
  x: 353,
  y: 29,
  hopside: 0,
  hopfrom: 432,
  hopto: 323,
};
const mtgate12 = {
  x: 1001,
  y: 137,
  hopside: 1030,
  hopfrom: 216,
  hopto: 107,
};
const rtgate12 = {
  x: 29,
  y: 137,
  hopside: 0,
  hopfrom: 216,
  hopto: 107,
};

// init currtile
var currtile = lb;

// keys update
var Key = {
  one: false,
  two: false,
  three: false,
  four: false,
  five: false,
  six: false,
  seven: false,
  eight: false,
};

// keys position
var keyOne = { x: 230, y: 554, r: 40 };
var keyTwo = { x: 122, y: 122, r: 40 };
var keyThree = { x: 122, y: 554, r: 40 };
var keyFour = { x: 662, y: 878, r: 40 };
var keyFive = { x: 662, y: 554, r: 40 };
var keySix = { x: 446, y: 878, r: 40 };
var keySeven = { x: 770, y: 338, r: 40 };
var keyEight = { x: 122, y: 230, r: 40 };

// character coord
var coord = {
  x: 29,
  y: 1001,
  r: 25,
};

// world borders
const coordBound = {
  minx: 00,
  maxx: 1030,
  miny: 00,
  maxy: 1030,
};

// speed setup
var speed = 8;

// character setup
let character;

// ----- KEY DETECTION -----
window.onkeydown = function (e) {
  e.preventDefault();
  var key = e.keyCode;

  if (key === 37) Moves.left = true;
  if (key === 38) Moves.up = true;
  if (key === 39) Moves.right = true;
  if (key === 40) Moves.down = true;
};
window.onkeyup = function (e) {
  e.preventDefault();
  var key = e.keyCode;
  if (key === 37) Moves.left = false;
  if (key === 38) Moves.up = false;
  if (key === 39) Moves.right = false;
  if (key === 40) Moves.down = false;
};

// ----- DRAW WALLS -----

const wallslb = [
  { id: 1, x: 0, y: 0, w: 324, h: 108 },
  { id: 2, x: 432, y: 0, w: 648, h: 108 },
  { id: 3, x: 0, y: 108, w: 108, h: 108 },
  { id: 4, x: 540, y: 108, w: 540, h: 108 },
  { id: 5, x: 0, y: 216, w: 108, h: 108 },
  { id: 6, x: 648, y: 216, w: 432, h: 108 },
  { id: 7, x: 0, y: 324, w: 1080, h: 108 },
  { id: 8, x: 0, y: 432, w: 432, h: 108 },
  { id: 9, x: 972, y: 432, w: 108, h: 108 },
  { id: 10, x: 0, y: 540, w: 216, h: 108 },
  { id: 11, x: 0, y: 648, w: 432, h: 108 },
  { id: 12, x: 972, y: 648, w: 108, h: 108 },
  { id: 13, x: 0, y: 756, w: 108, h: 108 },
  { id: 14, x: 540, y: 756, w: 540, h: 108 },
  { id: 15, x: 432, y: 864, w: 648, h: 108 },
  { id: 16, x: 324, y: 972, w: 756, h: 108 },
];
function drawWallsLb() {
  for (i = 0; i < wallslb.length; i++) {
    var svgns = 'http://www.w3.org/2000/svg';
    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttribute('id', wallslb[i].id);
    rect.setAttribute('x', wallslb[i].x);
    rect.setAttribute('y', wallslb[i].y);
    rect.setAttribute('height', wallslb[i].h);
    rect.setAttribute('width', wallslb[i].w);
    rect.setAttribute('fill', '#000');
    document.getElementById('lb').appendChild(rect);
  }
}

const wallsmb = [
  { id: 1, x: 0, y: 0, w: 648, h: 108 },
  { id: 2, x: 756, y: 0, w: 324, h: 108 },
  { id: 3, x: 0, y: 108, w: 216, h: 108 },
  { id: 4, x: 864, y: 108, w: 216, h: 108 },
  { id: 5, x: 0, y: 216, w: 108, h: 108 },
  { id: 6, x: 324, y: 216, w: 324, h: 108 },
  { id: 7, x: 972, y: 216, w: 108, h: 108 },
  { id: 8, x: 0, y: 324, w: 108, h: 108 },
  { id: 9, x: 432, y: 324, w: 324, h: 108 },
  { id: 10, x: 972, y: 324, w: 108, h: 108 },
  { id: 11, x: 0, y: 432, w: 216, h: 108 },
  { id: 12, x: 540, y: 432, w: 108, h: 108 },
  { id: 13, x: 432, y: 540, w: 108, h: 108 },
  { id: 13, x: 756, y: 540, w: 324, h: 108 },
  { id: 14, x: 0, y: 648, w: 108, h: 108 },
  { id: 15, x: 864, y: 648, w: 216, h: 108 },
  { id: 16, x: 0, y: 756, w: 216, h: 108 },
  { id: 16, x: 0, y: 864, w: 216, h: 108 },
  { id: 16, x: 648, y: 864, w: 432, h: 108 },
  { id: 16, x: 0, y: 972, w: 1080, h: 108 },
];
function drawWallsMb() {
  for (i = 0; i < wallsmb.length; i++) {
    var svgns = 'http://www.w3.org/2000/svg';
    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttribute('id', wallsmb[i].id);
    rect.setAttribute('x', wallsmb[i].x);
    rect.setAttribute('y', wallsmb[i].y);
    rect.setAttribute('height', wallsmb[i].h);
    rect.setAttribute('width', wallsmb[i].w);
    rect.setAttribute('fill', '#000');
    document.getElementById('mb').appendChild(rect);
  }
}

const wallsrb = [
  { id: 1, x: 0, y: 0, w: 756, h: 108 },
  { id: 2, x: 864, y: 0, w: 216, h: 108 },
  { id: 3, x: 0, y: 108, w: 108, h: 324 },
  { id: 4, x: 648, y: 108, w: 108, h: 432 },
  { id: 5, x: 972, y: 108, w: 108, h: 864 },
  { id: 6, x: 216, y: 216, w: 216, h: 108 },
  { id: 7, x: 756, y: 216, w: 108, h: 324 },
  { id: 8, x: 324, y: 324, w: 216, h: 108 },
  { id: 9, x: 216, y: 432, w: 324, h: 108 },
  { id: 10, x: 0, y: 540, w: 540, h: 108 },
  { id: 11, x: 0, y: 648, w: 756, h: 108 },
  { id: 12, x: 648, y: 756, w: 324, h: 108 },
  { id: 13, x: 0, y: 864, w: 108, h: 108 },
  { id: 14, x: 756, y: 864, w: 216, h: 108 },
  { id: 15, x: 0, y: 972, w: 1080, h: 108 },
];
function drawWallsRb() {
  for (i = 0; i < wallsrb.length; i++) {
    var svgns = 'http://www.w3.org/2000/svg';
    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttribute('id', wallsrb[i].id);
    rect.setAttribute('x', wallsrb[i].x);
    rect.setAttribute('y', wallsrb[i].y);
    rect.setAttribute('height', wallsrb[i].h);
    rect.setAttribute('width', wallsrb[i].w);
    rect.setAttribute('fill', '#000');
    document.getElementById('rb').appendChild(rect);
  }
}

const wallsrm = [
  { id: 1, x: 0, y: 0, w: 216, h: 108 },
  { id: 2, x: 324, y: 0, w: 756, h: 108 },
  { id: 3, x: 0, y: 108, w: 108, h: 540 },
  { id: 4, x: 972, y: 108, w: 108, h: 864 },
  { id: 5, x: 0, y: 756, w: 108, h: 216 },
  { id: 6, x: 0, y: 972, w: 756, h: 108 },
  { id: 7, x: 864, y: 972, w: 216, h: 108 },
];
function drawWallsRm() {
  for (i = 0; i < wallsrm.length; i++) {
    var svgns = 'http://www.w3.org/2000/svg';
    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttribute('id', wallsrm[i].id);
    rect.setAttribute('x', wallsrm[i].x);
    rect.setAttribute('y', wallsrm[i].y);
    rect.setAttribute('height', wallsrm[i].h);
    rect.setAttribute('width', wallsrm[i].w);
    rect.setAttribute('fill', '#000');
    document.getElementById('rm').appendChild(rect);
  }
}

const wallsmm = [
  { id: 1, x: 0, y: 0, w: 108, h: 540 },
  { id: 2, x: 108, y: 0, w: 540, h: 108 },
  { id: 3, x: 756, y: 0, w: 324, h: 108 },
  { id: 4, x: 432, y: 108, w: 216, h: 108 },
  { id: 5, x: 864, y: 108, w: 216, h: 108 },
  { id: 6, x: 216, y: 216, w: 540, h: 108 },
  { id: 7, x: 972, y: 216, w: 108, h: 432 },
  { id: 8, x: 324, y: 324, w: 432, h: 108 },
  { id: 9, x: 324, y: 432, w: 540, h: 108 },
  { id: 10, x: 540, y: 540, w: 324, h: 108 },
  { id: 11, x: 0, y: 648, w: 108, h: 108 },
  { id: 12, x: 648, y: 648, w: 216, h: 108 },
  { id: 13, x: 0, y: 756, w: 216, h: 108 },
  { id: 14, x: 648, y: 756, w: 432, h: 108 },
  { id: 15, x: 0, y: 864, w: 432, h: 108 },
  { id: 15, x: 756, y: 864, w: 324, h: 108 },
  { id: 15, x: 0, y: 972, w: 648, h: 108 },
  { id: 15, x: 756, y: 972, w: 324, h: 108 },
];
function drawWallsMm() {
  for (i = 0; i < wallsmm.length; i++) {
    var svgns = 'http://www.w3.org/2000/svg';
    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttribute('id', wallsmm[i].id);
    rect.setAttribute('x', wallsmm[i].x);
    rect.setAttribute('y', wallsmm[i].y);
    rect.setAttribute('height', wallsmm[i].h);
    rect.setAttribute('width', wallsmm[i].w);
    rect.setAttribute('fill', '#000');
    document.getElementById('mm').appendChild(rect);
  }
}

const wallslm = [
  { id: 1, x: 0, y: 0, w: 648, h: 108 },
  { id: 2, x: 756, y: 0, w: 324, h: 108 },
  { id: 3, x: 0, y: 108, w: 540, h: 108 },
  { id: 4, x: 972, y: 108, w: 108, h: 108 },
  { id: 5, x: 0, y: 216, w: 432, h: 108 },
  { id: 6, x: 864, y: 216, w: 216, h: 108 },
  { id: 7, x: 0, y: 324, w: 324, h: 108 },
  { id: 8, x: 648, y: 324, w: 432, h: 108 },
  { id: 9, x: 0, y: 432, w: 540, h: 108 },
  { id: 10, x: 972, y: 432, w: 108, h: 108 },
  { id: 11, x: 0, y: 540, w: 108, h: 324 },
  { id: 12, x: 216, y: 540, w: 108, h: 216 },
  { id: 13, x: 324, y: 540, w: 108, h: 108 },
  { id: 14, x: 972, y: 648, w: 108, h: 108 },
  { id: 15, x: 756, y: 756, w: 324, h: 108 },
  { id: 16, x: 0, y: 864, w: 216, h: 108 },
  { id: 17, x: 540, y: 864, w: 540, h: 108 },
  { id: 18, x: 0, y: 972, w: 324, h: 108 },
  { id: 19, x: 432, y: 972, w: 648, h: 108 },
];
function drawWallsLm() {
  for (i = 0; i < wallslm.length; i++) {
    var svgns = 'http://www.w3.org/2000/svg';
    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttribute('id', wallslm[i].id);
    rect.setAttribute('x', wallslm[i].x);
    rect.setAttribute('y', wallslm[i].y);
    rect.setAttribute('height', wallslm[i].h);
    rect.setAttribute('width', wallslm[i].w);
    rect.setAttribute('fill', '#000');
    document.getElementById('lm').appendChild(rect);
  }
}

const wallslt = [
  { id: 1, x: 0, y: 0, w: 1080, h: 108 },
  { id: 2, x: 0, y: 108, w: 108, h: 216 },
  { id: 3, x: 432, y: 108, w: 324, h: 108 },
  { id: 4, x: 972, y: 108, w: 108, h: 216 },
  { id: 5, x: 540, y: 216, w: 108, h: 324 },
  { id: 6, x: 0, y: 324, w: 216, h: 108 },
  { id: 7, x: 864, y: 324, w: 216, h: 108 },
  { id: 8, x: 0, y: 432, w: 324, h: 108 },
  { id: 9, x: 756, y: 432, w: 324, h: 108 },
  { id: 10, x: 0, y: 540, w: 216, h: 108 },
  { id: 11, x: 0, y: 648, w: 108, h: 216 },
  { id: 12, x: 540, y: 648, w: 108, h: 216 },
  { id: 13, x: 864, y: 648, w: 216, h: 108 },
  { id: 14, x: 972, y: 756, w: 108, h: 108 },
  { id: 15, x: 0, y: 864, w: 216, h: 108 },
  { id: 16, x: 432, y: 864, w: 216, h: 108 },
  { id: 17, x: 865, y: 864, w: 216, h: 108 },
  { id: 18, x: 0, y: 972, w: 648, h: 108 },
  { id: 19, x: 756, y: 972, w: 324, h: 108 },
];
function drawWallsLt() {
  for (i = 0; i < wallslt.length; i++) {
    var svgns = 'http://www.w3.org/2000/svg';
    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttribute('id', wallslt[i].id);
    rect.setAttribute('x', wallslt[i].x);
    rect.setAttribute('y', wallslt[i].y);
    rect.setAttribute('height', wallslt[i].h);
    rect.setAttribute('width', wallslt[i].w);
    rect.setAttribute('fill', '#000');
    document.getElementById('lt').appendChild(rect);
  }
}

const wallsmt = [
  { id: 1, x: 0, y: 0, w: 1080, h: 108 },
  { id: 2, x: 0, y: 108, w: 108, h: 432 },
  { id: 3, x: 972, y: 216, w: 108, h: 756 },
  { id: 4, x: 0, y: 648, w: 108, h: 324 },
  { id: 5, x: 0, y: 972, w: 648, h: 108 },
  { id: 5, x: 756, y: 972, w: 324, h: 108 },
];
function drawWallsMt() {
  for (i = 0; i < wallsmt.length; i++) {
    var svgns = 'http://www.w3.org/2000/svg';
    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttribute('id', wallsmt[i].id);
    rect.setAttribute('x', wallsmt[i].x);
    rect.setAttribute('y', wallsmt[i].y);
    rect.setAttribute('height', wallsmt[i].h);
    rect.setAttribute('width', wallsmt[i].w);
    rect.setAttribute('fill', '#000');
    document.getElementById('mt').appendChild(rect);
  }
}

const wallsrt = [
  { id: 1, x: 0, y: 0, w: 756, h: 108 },
  { id: 2, x: 0, y: 216, w: 108, h: 756 },
  { id: 2, x: 108, y: 216, w: 108, h: 108 },
  { id: 2, x: 972, y: 216, w: 108, h: 756 },
  { id: 5, x: 108, y: 324, w: 540, h: 108 },
  { id: 5, x: 864, y: 324, w: 108, h: 324 },
  { id: 5, x: 108, y: 432, w: 756, h: 108 },
  { id: 5, x: 216, y: 648, w: 540, h: 108 },
  { id: 5, x: 324, y: 756, w: 540, h: 108 },
  { id: 5, x: 324, y: 864, w: 108, h: 108 },
  { id: 5, x: 0, y: 972, w: 216, h: 108 },
  { id: 5, x: 324, y: 972, w: 756, h: 108 },
];
function drawWallsRt() {
  for (i = 0; i < wallsrt.length; i++) {
    var svgns = 'http://www.w3.org/2000/svg';
    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttribute('id', wallsrt[i].id);
    rect.setAttribute('x', wallsrt[i].x);
    rect.setAttribute('y', wallsrt[i].y);
    rect.setAttribute('height', wallsrt[i].h);
    rect.setAttribute('width', wallsrt[i].w);
    rect.setAttribute('fill', '#000');
    document.getElementById('rt').appendChild(rect);
  }
}

drawWallsLb();
drawWallsMb();
drawWallsRb();
drawWallsRm();
drawWallsMm();
drawWallsLm();
drawWallsLt();
drawWallsMt();
drawWallsRt();

function menuSwitch() {
  document.querySelector('#text').style.display = 'none';
  menu = 2;
}
function menuSwitch2() {
  window.location.reload();
}
function fin() {
  if (currtile == rt && coord.x > finish.x - 50 && coord.y < finish.h) {
    document.querySelector('#textagain').style.display = 'block';
    menu = 1;
  }
}
document.querySelector('#play').addEventListener('click', menuSwitch);
document.querySelector('#playagain').addEventListener('click', menuSwitch2);

// ----- MAIN FUNCTION -----

function main() {
  fin();
  move();

  // TILE DISPLAY & GATE SPAWN
  switch (currtile) {
    case lb: // left bottom
      character = document.querySelector('#character-lb');

      if (lb.style.display == 'none' && mb.style.display == 'block') {
        coord.x = lbgate1.x;
        coord.y = lbgate1.y;
      }

      if (lb.style.display == 'none' && lm.style.display == 'block') {
        coord.x = lbgate11.x;
        coord.y = lbgate11.y;
      }

      lb.style.display = 'block';
      mb.style.display = 'none';
      rb.style.display = 'none';
      rm.style.display = 'none';
      mm.style.display = 'none';
      lm.style.display = 'none';
      lt.style.display = 'none';
      mt.style.display = 'none';
      rt.style.display = 'none';

      hitswitch = wallslb;

      break;

    case mb: // middle bottom
      character = document.querySelector('#character-mb');

      if (mb.style.display == 'none' && lb.style.display == 'block') {
        coord.x = mbgate1.x;
        coord.y = mbgate1.y;
      }
      if (
        mb.style.display == 'none' &&
        rb.style.display == 'block' &&
        coord.y > mbgate2.hopto &&
        coord.y < mbgate2.hopfrom
      ) {
        coord.x = mbgate2.x;
        coord.y = mbgate2.y;
      }
      if (mb.style.display == 'none' && mm.style.display == 'block') {
        coord.x = mbgate4.x;
        coord.y = mbgate4.y;
      }
      if (
        mb.style.display == 'none' &&
        rb.style.display == 'block' &&
        coord.y > mbgate6.hopto &&
        coord.y < mbgate6.hopfrom
      ) {
        coord.x = mbgate6.x;
        coord.y = mbgate6.y;
      }

      lb.style.display = 'none';
      mb.style.display = 'block';
      rb.style.display = 'none';
      mm.style.display = 'none';

      hitswitch = wallsmb;

      break;
    case rb: // right bottom
      character = document.querySelector('#character-rb');

      if (rb.style.display == 'none' && rm.style.display == 'block') {
        coord.x = rbgate3.x;
        coord.y = rbgate3.y;
      }

      if (
        rb.style.display == 'none' &&
        mb.style.display == 'block' &&
        coord.y > mbgate2.hopto &&
        coord.y < mbgate2.hopfrom
      ) {
        coord.x = rbgate2.x;
        coord.y = rbgate2.y;
      }

      if (
        rb.style.display == 'none' &&
        mb.style.display == 'block' &&
        coord.y > mbgate6.hopto &&
        coord.y < mbgate6.hopfrom
      ) {
        coord.x = rbgate6.x;
        coord.y = rbgate6.y;
      }

      mb.style.display = 'none';
      rb.style.display = 'block';
      rm.style.display = 'none';

      hitswitch = wallsrb;

      break;
    case rm: // right middle
      character = document.querySelector('#character-rm');

      if (rm.style.display == 'none' && rb.style.display == 'block') {
        coord.x = rmgate3.x;
        coord.y = rmgate3.y;
      }
      if (rm.style.display == 'none' && rt.style.display == 'block') {
        coord.x = rmgate9.x;
        coord.y = rmgate9.y;
      }

      if (rm.style.display == 'none' && mm.style.display == 'block') {
        coord.x = rmgate10.x;
        coord.y = rmgate10.y;
      }

      rb.style.display = 'none';
      rm.style.display = 'block';
      mm.style.display = 'none';
      rt.style.display = 'none';

      hitswitch = wallsrm;

      break;
    case mm: // middle middle
      character = document.querySelector('#character-mm');

      if (mm.style.display == 'none' && mb.style.display == 'block') {
        coord.x = mmgate4.x;
        coord.y = mmgate4.y;
      }

      if (mm.style.display == 'none' && lm.style.display == 'block') {
        coord.x = mmgate5.x;
        coord.y = mmgate5.y;
      }

      if (mm.style.display == 'none' && rm.style.display == 'block') {
        coord.x = mmgate10a.x;
        coord.y = mmgate10a.y;
      }

      if (mm.style.display == 'none' && mt.style.display == 'block') {
        coord.x = mmgate10b.x;
        coord.y = mmgate10b.y;
      }

      mb.style.display = 'none';
      rm.style.display = 'none';
      mm.style.display = 'block';
      lm.style.display = 'none';
      mt.style.display = 'none';

      hitswitch = wallsmm;

      break;
    case lm: // left middle
      character = document.querySelector('#character-lm');

      if (lm.style.display == 'none' && mm.style.display == 'block') {
        coord.x = lmgate5.x;
        coord.y = lmgate5.y;
      }

      if (lm.style.display == 'none' && lt.style.display == 'block') {
        coord.x = lmgate7.x;
        coord.y = lmgate7.y;
      }

      if (lm.style.display == 'none' && lb.style.display == 'block') {
        coord.x = lmgate11.x;
        coord.y = lmgate11.y;
      }

      lb.style.display = 'none';
      mm.style.display = 'none';
      lm.style.display = 'block';
      lt.style.display = 'none';

      hitswitch = wallslm;

      break;

    case lt: // left top
      character = document.querySelector('#character-lt');

      if (lt.style.display == 'none' && lm.style.display == 'block') {
        coord.x = ltgate7.x;
        coord.y = ltgate7.y;
      }

      if (lt.style.display == 'none' && mt.style.display == 'block') {
        coord.x = ltgate8.x;
        coord.y = ltgate8.y;
      }

      lm.style.display = 'none';
      lt.style.display = 'block';
      mt.style.display = 'none';

      hitswitch = wallslt;

      break;

    case mt: // middle top
      character = document.querySelector('#character-mt');

      if (mt.style.display == 'none' && lt.style.display == 'block') {
        coord.x = mtgate8.x;
        coord.y = mtgate8.y;
      }

      if (mt.style.display == 'none' && mm.style.display == 'block') {
        coord.x = mtgate10.x;
        coord.y = mtgate10.y;
      }

      if (mt.style.display == 'none' && rt.style.display == 'block') {
        coord.x = mtgate12.x;
        coord.y = mtgate12.y;
      }

      mm.style.display = 'none';
      lt.style.display = 'none';
      mt.style.display = 'block';
      rt.style.display = 'none';

      hitswitch = wallsmt;

      break;

    case rt: // right top
      character = document.querySelector('#character-rt');

      if (rt.style.display == 'none' && rm.style.display == 'block') {
        coord.x = rtgate9.x;
        coord.y = rtgate9.y;
      }

      if (rt.style.display == 'none' && mt.style.display == 'block') {
        coord.x = rtgate12.x;
        coord.y = rtgate12.y;
      }

      rm.style.display = 'none';
      mt.style.display = 'none';
      rt.style.display = 'block';

      hitswitch = wallsrt;

      break;
  }

  // KEY COLLECTION
  // KEY ONE
  var dx = coord.x - keyOne.x;
  var dy = coord.y - keyOne.y;
  var distance = Math.sqrt(dx * dx + dy * dy);
  if (Key.one === false && distance < coord.r + keyOne.r && currtile == lb) {
    document.querySelector('#key1-symbol').remove();
    document.querySelector('#key1-gate').remove();
    Key.one = true;
  }
  if (Key.one == true) {
    if (document.querySelector('#key1-gate'))
      document.querySelector('#key1-gate').remove();
  }

  // KEY TWO
  var dx = coord.x - keyTwo.x;
  var dy = coord.y - keyTwo.y;
  var distance = Math.sqrt(dx * dx + dy * dy);
  if (Key.two === false && distance < coord.r + keyTwo.r && currtile == rm) {
    if (distance < coord.r + keyTwo.r) {
      document.querySelector('#key2-symbol').remove();
      document.querySelector('#key2-gate').remove();
      Key.two = true;
    }
  }
  if (Key.two == true) {
    if (document.querySelector('#key2-gate'))
      document.querySelector('#key2-gate').remove();
  }

  // KEY THREE
  var dx = coord.x - keyThree.x;
  var dy = coord.y - keyThree.y;
  var distance = Math.sqrt(dx * dx + dy * dy);
  if (
    Key.three === false &&
    distance < coord.r + keyThree.r &&
    currtile == lm
  ) {
    if (distance < coord.r + keyThree.r) {
      document.querySelector('#key3-symbol').remove();
      document.querySelector('#key3-gate').remove();
      Key.three = true;
    }
  }
  if (Key.three == true) {
    if (document.querySelector('#key3-gate'))
      document.querySelector('#key3-gate').remove();
  }

  // KEY FOUR
  var dx = coord.x - keyFour.x;
  var dy = coord.y - keyFour.y;
  var distance = Math.sqrt(dx * dx + dy * dy);
  if (Key.four === false && distance < coord.r + keyFour.r && currtile == rb) {
    if (distance < coord.r + keyFour.r) {
      document.querySelector('#key4-symbol').remove();
      document.querySelector('#key4-gate').remove();
      Key.four = true;
    }
  }
  if (Key.four == true) {
    if (document.querySelector('#key4-gate'))
      document.querySelector('#key4-gate').remove();
  }

  // KEY FIVE
  var dx = coord.x - keyFive.x;
  var dy = coord.y - keyFive.y;
  var distance = Math.sqrt(dx * dx + dy * dy);
  if (Key.five === false && distance < coord.r + keyFive.r && currtile == mt) {
    if (distance < coord.r + keyFive.r) {
      document.querySelector('#key5-symbol').remove();
      document.querySelector('#key5-gate').remove();
      Key.five = true;
    }
  }
  if (Key.five == true) {
    if (document.querySelector('#key5-gate'))
      document.querySelector('#key5-gate').remove();
  }

  // KEY SIX
  var dx = coord.x - keySix.x;
  var dy = coord.y - keySix.y;
  var distance = Math.sqrt(dx * dx + dy * dy);
  if (Key.six === false && distance < coord.r + keySix.r && currtile == rt) {
    if (distance < coord.r + keySix.r) {
      document.querySelector('#key6-symbol').remove();
      document.querySelector('#key6-gate').remove();
      Key.six = true;
    }
  }
  if (Key.six == true) {
    if (document.querySelector('#key6-gate'))
      document.querySelector('#key6-gate').remove();
  }

  // KEY SEVEN
  var dx = coord.x - keySeven.x;
  var dy = coord.y - keySeven.y;
  var distance = Math.sqrt(dx * dx + dy * dy);
  if (
    Key.seven === false &&
    distance < coord.r + keySeven.r &&
    currtile == mm
  ) {
    if (distance < coord.r + keySeven.r) {
      document.querySelector('#key7-symbol').remove();
      document.querySelector('#key7-gate').remove();
      Key.seven = true;
    }
  }
  if (Key.seven == true) {
    if (document.querySelector('#key7-gate'))
      document.querySelector('#key7-gate').remove();
  }

  // KEY EIGHT
  var dx = coord.x - keyEight.x;
  var dy = coord.y - keyEight.y;
  var distance = Math.sqrt(dx * dx + dy * dy);
  if (
    Key.eight === false &&
    distance < coord.r + keyEight.r &&
    currtile == lb
  ) {
    if (distance < coord.r + keyEight.r) {
      document.querySelector('#key8-symbol').remove();
      document.querySelector('#key8-gate').remove();
      Key.eight = true;
    }
  }
  if (Key.eight == true) {
    if (document.querySelector('#key8-gate'))
      document.querySelector('#key8-gate').remove();
  }

  // CHARACTER POSITION UPDATE & LIGHT
  if (
    Moves.left == true ||
    Moves.up == true ||
    Moves.right == true ||
    Moves.down == true
  ) {
    character.setAttribute(
      'transform',
      'translate(' + coord.x + ' ' + coord.y + ')'
    );
    console.log('X = ' + coord.x + ', Y = ' + coord.y);
  }
  var g1 = document.querySelector('#MyGradient');
  var g2 = document.querySelector('#MyGradient2');
  var g3 = document.querySelector('#MyGradient3');
  var g4 = document.querySelector('#MyGradient4');
  var g5 = document.querySelector('#MyGradient5');
  var g6 = document.querySelector('#MyGradient6');
  var g7 = document.querySelector('#MyGradient7');
  var g8 = document.querySelector('#MyGradient8');
  var g9 = document.querySelector('#MyGradient9');
  g1.setAttribute('cx', coord.x + 25);
  g1.setAttribute('cy', coord.y + 25);
  g2.setAttribute('cx', coord.x + 25);
  g2.setAttribute('cy', coord.y + 25);
  g3.setAttribute('cx', coord.x + 25);
  g3.setAttribute('cy', coord.y + 25);
  g4.setAttribute('cx', coord.x + 25);
  g4.setAttribute('cy', coord.y + 25);
  g5.setAttribute('cx', coord.x + 25);
  g5.setAttribute('cy', coord.y + 25);
  g6.setAttribute('cx', coord.x + 25);
  g6.setAttribute('cy', coord.y + 25);
  g7.setAttribute('cx', coord.x + 25);
  g7.setAttribute('cy', coord.y + 25);
  g8.setAttribute('cx', coord.x + 25);
  g8.setAttribute('cy', coord.y + 25);
  g9.setAttribute('cx', coord.x + 25);
  g9.setAttribute('cy', coord.y + 25);

  // GATES LOGIC
  if (
    // from LB to MB
    currtile == lb &&
    coord.x === lbgate1.hopside &&
    coord.y < lbgate1.hopfrom &&
    coord.y > lbgate1.hopto &&
    Key.one == true
  ) {
    currtile = mb;
  } else if (
    // from MB to LB
    currtile == mb &&
    coord.x === mbgate1.hopside &&
    coord.y < mbgate1.hopfrom &&
    coord.y > mbgate1.hopto &&
    Key.one == true
  ) {
    currtile = lb;
  } else if (
    // from MB to RB
    currtile == mb &&
    coord.x === mbgate2.hopside &&
    coord.y < mbgate2.hopfrom &&
    coord.y > mbgate2.hopto // && Key.one == true
  ) {
    currtile = rb;
  } else if (
    // from RB to MB
    currtile == rb &&
    coord.x === rbgate2.hopside &&
    coord.y < rbgate2.hopfrom &&
    coord.y > rbgate2.hopto // && Key.one == true
  ) {
    currtile = mb;
  } else if (
    // from RB to RM
    currtile == rb &&
    coord.y === rbgate3.hopside &&
    coord.x < rbgate3.hopfrom &&
    coord.x > rbgate3.hopto // && Key.one == true
  ) {
    currtile = rm;
  } else if (
    // from RM to RB
    currtile == rm &&
    coord.y === rmgate3.hopside &&
    coord.x < rmgate3.hopfrom &&
    coord.x > rmgate3.hopto // && Key.one == true
  ) {
    currtile = rb;
  } else if (
    // from MB to MM
    currtile == mb &&
    coord.y === mbgate4.hopside &&
    coord.x < mbgate4.hopfrom &&
    coord.x > mbgate4.hopto &&
    Key.two == true
  ) {
    currtile = mm;
  } else if (
    // from MM to MB
    currtile == mm &&
    coord.y === mmgate4.hopside &&
    coord.x < mmgate4.hopfrom &&
    coord.x > mmgate4.hopto &&
    Key.two == true
  ) {
    currtile = mb;
  } else if (
    // from MM to LM
    currtile == mm &&
    coord.x === mmgate5.hopside &&
    coord.y < mmgate5.hopfrom &&
    coord.y > mmgate5.hopto // && Key.two == true
  ) {
    currtile = lm;
  } else if (
    // from LM to MM
    currtile == lm &&
    coord.x === lmgate5.hopside &&
    coord.y < lmgate5.hopfrom &&
    coord.y > lmgate5.hopto // && Key.two == true
  ) {
    currtile = mm;
  } else if (
    // from MB to RB2
    currtile == mb &&
    coord.x === mbgate6.hopside &&
    coord.y < mbgate6.hopfrom &&
    coord.y > mbgate6.hopto &&
    Key.three == true
  ) {
    currtile = rb;
    // window.alert('hm');
  } else if (
    // from RB2 to MB
    currtile == rb &&
    coord.x === rbgate6.hopside &&
    coord.y < rbgate6.hopfrom &&
    coord.y > rbgate6.hopto &&
    Key.three == true
  ) {
    currtile = mb;
    // window.alert('hm');
  } else if (
    // from LM to LT
    currtile == lm &&
    coord.y === lmgate7.hopside &&
    coord.x < lmgate7.hopfrom &&
    coord.x > lmgate7.hopto &&
    Key.four == true
  ) {
    currtile = lt;
    // window.alert('hm');
  } else if (
    // from LT to LM
    currtile == lt &&
    coord.y === ltgate7.hopside &&
    coord.x < ltgate7.hopfrom &&
    coord.x > ltgate7.hopto &&
    Key.four == true
  ) {
    currtile = lm;
    // window.alert('hm');
  } else if (
    // from LT to MT
    currtile == lt &&
    coord.x === ltgate8.hopside &&
    coord.y < ltgate8.hopfrom &&
    coord.y > ltgate8.hopto
  ) {
    currtile = mt;
    // window.alert('hm');
  } else if (
    // from MT to LT
    currtile == mt &&
    coord.x === mtgate8.hopside &&
    coord.y < mtgate8.hopfrom &&
    coord.y > mtgate8.hopto
  ) {
    currtile = lt;
    // window.alert('hm');
  } else if (
    // from RM to RT
    currtile == rm &&
    coord.y === rmgate9.hopside &&
    coord.x < rmgate9.hopfrom &&
    coord.x > rmgate9.hopto &&
    Key.five == true
  ) {
    currtile = rt;
    // window.alert('hm');
  } else if (
    // from RT to RM
    currtile == rt &&
    coord.y === rtgate9.hopside &&
    coord.x < rtgate9.hopfrom &&
    coord.x > rtgate9.hopto &&
    Key.five == true
  ) {
    currtile = rm;
    // window.alert('hm');
  } else if (
    // from RM to MM
    currtile == rm &&
    coord.x === rmgate10.hopside &&
    coord.y < rmgate10.hopfrom &&
    coord.y > rmgate10.hopto &&
    Key.six == true
  ) {
    currtile = mm;
    // window.alert('hm');
  } else if (
    // from MM to RM
    currtile == mm &&
    coord.x === mmgate10a.hopside &&
    coord.y < mmgate10a.hopfrom &&
    coord.y > mmgate10a.hopto &&
    Key.six == true
  ) {
    currtile = rm;
    // window.alert('hm');
  } else if (
    // from MM to MT
    currtile == mm &&
    coord.y === mmgate10b.hopside &&
    coord.x < mmgate10b.hopfrom &&
    coord.x > mmgate10b.hopto &&
    Key.six == true
  ) {
    currtile = mt;
    // window.alert('hm');
  } else if (
    // from MT to MM
    currtile == mt &&
    coord.y === mtgate10.hopside &&
    coord.x < mtgate10.hopfrom &&
    coord.x > mtgate10.hopto &&
    Key.six == true
  ) {
    currtile = mm;
    // window.alert('hm');
  } else if (
    // from LM to LB
    currtile == lm &&
    coord.y === lmgate11.hopside &&
    coord.x < lmgate11.hopfrom &&
    coord.x > lmgate11.hopto &&
    Key.seven == true
  ) {
    currtile = lb;
    // window.alert('hm');
  } else if (
    // from LB to LM
    currtile == lb &&
    coord.y === lbgate11.hopside &&
    coord.x < lbgate11.hopfrom &&
    coord.x > lbgate11.hopto &&
    Key.seven == true
  ) {
    currtile = lm;
    // window.alert('hm');
  } else if (
    // from MT to RT
    currtile == mt &&
    coord.x === mtgate12.hopside &&
    coord.y < mtgate12.hopfrom &&
    coord.y > mtgate12.hopto &&
    Key.eight == true
  ) {
    currtile = rt;
    // window.alert('hm');
  } else if (
    // from RT to MT
    currtile == rt &&
    coord.x === rtgate12.hopside &&
    coord.y < rtgate12.hopfrom &&
    coord.y > rtgate12.hopto &&
    Key.eight == true
  ) {
    currtile = mt;
    // window.alert('hm');
  }
}

// ----- MOVEMENT -----

function move() {
  // Switching hitbox array
  // cycle through hitboxes
  if (menu == 2) {
    if (Moves.up) {
      coord.y -= speed;
      for (i = 0; i < hitswitch.length; i++) {
        if (
          coord.y < hitswitch[i].y + hitswitch[i].h &&
          coord.x < hitswitch[i].x + hitswitch[i].w &&
          coord.y > hitswitch[i].y - 50 &&
          coord.x > hitswitch[i].x - 50
        ) {
          coord.y = hitswitch[i].y + hitswitch[i].h;
        }
      }
      if (coord.y <= coordBound.miny) {
        coord.y = coordBound.miny;
      }
    }

    if (Moves.down) {
      coord.y += speed;
      for (i = 0; i < hitswitch.length; i++) {
        if (
          coord.y < hitswitch[i].y + hitswitch[i].h &&
          coord.x < hitswitch[i].x + hitswitch[i].w &&
          coord.y > hitswitch[i].y - 50 &&
          coord.x > hitswitch[i].x - 50
        ) {
          coord.y = hitswitch[i].y - 50;
        }
      }
      if (coord.y >= coordBound.maxy) {
        coord.y = coordBound.maxy;
      }
    }

    if (Moves.left) {
      coord.x -= speed;
      for (i = 0; i < hitswitch.length; i++) {
        if (
          coord.y < hitswitch[i].y + hitswitch[i].h &&
          coord.x < hitswitch[i].x + hitswitch[i].w &&
          coord.y > hitswitch[i].y - 50 &&
          coord.x > hitswitch[i].x - 50
        ) {
          coord.x = hitswitch[i].x + hitswitch[i].w;
        }
      }
      if (coord.x <= coordBound.minx) {
        coord.x = coordBound.minx;
      }
    }

    if (Moves.right) {
      coord.x += speed;
      for (i = 0; i < hitswitch.length; i++) {
        if (
          coord.y < hitswitch[i].y + hitswitch[i].h &&
          coord.x < hitswitch[i].x + hitswitch[i].w &&
          coord.y > hitswitch[i].y - 50 &&
          coord.x > hitswitch[i].x - 50
        ) {
          coord.x = hitswitch[i].x - 50;
        }
      }
      if (coord.x >= coordBound.maxx) {
        coord.x = coordBound.maxx;
      }
    }
  }
  window.requestAnimationFrame(main);
}

// ----- UPDATE -----

window.requestAnimationFrame(main);
