// ----- VARS -----

const lb = document.querySelector('#lb');
const mb = document.querySelector('#mb');
const rb = document.querySelector('#rb');
const lm = document.querySelector('#lm');
const mm = document.querySelector('#mm');
const rm = document.querySelector('#rm');
const lt = document.querySelector('#lt');
const mt = document.querySelector('#mt');
const rt = document.querySelector('#rt');

var Moves = {
  // KEY SWITCHES
  up: false,
  down: false,
  left: false,
  right: false,
};

//SETUP GATES
const lbgate1 = {
  x: 1001,
  y: 569,
};
const mbgate1 = {
  x: 29,
  y: 569,
};

// TILE UPDATE
var currtile = lb;
var prevtile = lb;

// KEYS UPDATE
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

// KEY POSITIONS
var keyOne = { x: 230, y: 554, r: 40 };
var keyTwo = { x: 230, y: 554, r: 40 };

// CHARACTER POSITION
var coord = {
  x: 29,
  y: 1001,
  r: 25,
};

// TILE BORDERS
const coordBound = {
  minx: 00,
  maxx: 1030,
  miny: 00,
  maxy: 1030,
};

// ACCELERATION SETUP
var speedUp = 0;
const max = 1.5;

// CHARACTER SETUP
let character;

// ----- KEY DETECTION -----

window.onkeydown = function (e) {
  e.preventDefault();
  var key = e.keyCode;

  if (key === 37) Moves.left = true;
  if (key === 38) Moves.up = true;
  if (key === 39) Moves.right = true;
  if (key === 40) Moves.down = true;
  console.log(speedUp);
};

window.onkeyup = function (e) {
  e.preventDefault();
  var key = e.keyCode;
  if (key === 37) Moves.left = false;
  if (key === 38) Moves.up = false;
  if (key === 39) Moves.right = false;
  if (key === 40) Moves.down = false;
  else speedUp = 0;
};

// ----- MAIN FUNCTION -----

function main() {
  move();

  // TILE Display
  switch (currtile) {
    case lb:
      character = document.querySelector('#character-lb');

      if (lb.style.display == 'none') {
        coord.x = lbgate1.x;
        coord.y = lbgate1.y;
      }

      lb.style.display = 'block';
      mb.style.display = 'none';

      break;

    case mb:
      character = document.querySelector('#character-mb');

      if (mb.style.display == 'none') {
        coord.x = mbgate1.x;
        coord.y = mbgate1.y;
      }

      lb.style.display = 'none';
      mb.style.display = 'block';

      break;

    case rb:
      // Anweisungen werden ausgeführt,
      // falls expression mit valueN übereinstimmt
      break;
    case lm:
      // Anweisungen werden ausgeführt,
      // falls expression mit valueN übereinstimmt
      break;
    case mm:
      // Anweisungen werden ausgeführt,
      // falls expression mit valueN übereinstimmt
      break;
    case rm:
      // Anweisungen werden ausgeführt,
      // falls expression mit valueN übereinstimmt
      break;
    case lt:
      // Anweisungen werden ausgeführt,
      // falls expression mit valueN übereinstimmt
      break;
    case mt:
      // Anweisungen werden ausgeführt,
      // falls expression mit valueN übereinstimmt
      break;
    case rt:
      // Anweisungen werden ausgeführt,
      // falls expression mit valueN übereinstimmt
      break;
  }

  // KEY COLLECTION
  // KEY ONE
  var dx = coord.x - keyOne.x;
  var dy = coord.y - keyOne.y;
  var distance = Math.sqrt(dx * dx + dy * dy);

  if (Key.one === false && distance < coord.r + keyOne.r) {
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

  if (Key.one === false && distance < coord.r + keyTwo.r) {
    if (distance < coord.r + keyTwo.r) {
      document.querySelector('#key2-symbol').remove();
      document.querySelector('#key2-gate').remove();
    }
  }

  // CHARACTER POSITION UPDATE
  character.setAttribute(
    'transform',
    'translate(' + coord.x + ' ' + coord.y + ')'
  );

  // GATES
  if (
    currtile == lb &&
    coord.x === 1030 &&
    coord.y > 540 &&
    coord.y < 603 &&
    Key.one == true
  ) {
    currtile = mb;
  } else if (
    currtile == mb &&
    coord.x === 0 &&
    coord.y > 540 &&
    coord.y < 603 &&
    Key.one == true
  ) {
    currtile = lb;
  }

  // CHARACTER ACCELERATION
  if (Moves.left || Moves.right || Moves.down || Moves.up === true) {
    speedUp = speedUp + 0.03;
    if (speedUp > max) {
      speedUp = max;
    }
  } else speedUp === 0;

  // console.log(currtile);
}

// ----- MOVEMENT -----

function move() {
  if (Moves.up) {
    if (coord.y <= coordBound.miny) {
      coord.y = coordBound.miny;
    } else {
      coord.y -= 0.75 + speedUp;
    }
  }

  if (Moves.down) {
    if (coord.y >= coordBound.maxy) {
      coord.y = coordBound.maxy;
    } else {
      coord.y += 0.75 + speedUp;
    }
  }

  if (Moves.left) {
    if (coord.x <= coordBound.minx) {
      coord.x = coordBound.minx;
    } else {
      coord.x -= 0.75 + speedUp;
    }
  }

  if (Moves.right) {
    if (coord.x >= coordBound.maxx) {
      coord.x = coordBound.maxx;
    } else {
      coord.x += 0.75 + speedUp;
    }
  }
}

// ----- UPDATE -----

setInterval(main, 5);
