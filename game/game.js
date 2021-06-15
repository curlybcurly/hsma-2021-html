// ----- VARS -----

var hitswitch;

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
  hopto: 648,
};
const mmgate4 = {
  x: 677,
  y: 1001,
  hopside: 1030,
  hopfrom: 711,
  hopto: 648,
};
const mmgate5 = {
  x: 29,
  y: 569,
  hopside: 0,
  hopfrom: 603,
  hopto: 540,
};
const lmgate5 = {
  x: 1001,
  y: 569,
  hopside: 1030,
  hopfrom: 603,
  hopto: 540,
};
const mbgate6 = {
  x: 1001,
  y: 785,
  hopside: 1030,
  hopfrom: 819,
  hopto: 756,
};
const rbgate6 = {
  x: 29,
  y: 785,
  hopside: 0,
  hopfrom: 819,
  hopto: 756,
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
var keyTwo = { x: 122, y: 122, r: 40 };
var keyThree = { x: 122, y: 554, r: 40 };
var keyFour = { x: 662, y: 878, r: 40 };

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
var speed = 2;
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

// ----- SVG Walls STUFF -----^
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
  // { id: 8, x: 324, y: 324, w: 216, h: 108 },
  // { id: 9, x: 216, y: 432, w: 324, h: 108 },
  // { id: 10, x: 0, y: 540, w: 540, h: 108 },
  // { id: 11, x: 0, y: 648, w: 756, h: 108 },
  // { id: 12, x: 648, y: 756, w: 324, h: 108 },
  // { id: 13, x: 0, y: 864, w: 108, h: 108 },
  // { id: 14, x: 756, y: 864, w: 216, h: 108 },
  // { id: 15, x: 0, y: 972, w: 1080, h: 108 },
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

drawWallsLb();
drawWallsMb();
drawWallsRb();
drawWallsRm();

// ----- MAIN FUNCTION -----

function main() {
  move();
  // collision();

  // TILE Display
  switch (currtile) {
    case lb: // left bottom
      character = document.querySelector('#character-lb');

      if (lb.style.display == 'none') {
        coord.x = lbgate1.x;
        coord.y = lbgate1.y;
      }

      lb.style.display = 'block';
      mb.style.display = 'none';
      rb.style.display = 'none';
      rm.style.display = 'none';
      mm.style.display = 'none';
      lm.style.display = 'none';

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
      rm.style.display = 'none';
      mm.style.display = 'none';
      lm.style.display = 'none';

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

      lb.style.display = 'none';
      mb.style.display = 'none';
      rb.style.display = 'block';
      rm.style.display = 'none';
      mm.style.display = 'none';
      lm.style.display = 'none';

      hitswitch = wallsrb;

      break;
    case rm: // right middle
      character = document.querySelector('#character-rm');

      if (rm.style.display == 'none' && rb.style.display == 'block') {
        coord.x = rmgate3.x;
        coord.y = rmgate3.y;
      }

      lb.style.display = 'none';
      mb.style.display = 'none';
      rb.style.display = 'none';
      rm.style.display = 'block';
      mm.style.display = 'none';
      lm.style.display = 'none';

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

      lb.style.display = 'none';
      mb.style.display = 'none';
      rb.style.display = 'none';
      rm.style.display = 'none';
      mm.style.display = 'block';
      lm.style.display = 'none';

      break;
    case lm: // left middle
      character = document.querySelector('#character-lm');

      if (lm.style.display == 'none' && mm.style.display == 'block') {
        coord.x = lmgate5.x;
        coord.y = lmgate5.y;
      }

      lb.style.display = 'none';
      mb.style.display = 'none';
      rb.style.display = 'none';
      rm.style.display = 'none';
      mm.style.display = 'none';
      lm.style.display = 'block';

      break;
  }

  // console.log('X= ' + coord.x + ' Y= ' + coord.y);

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

  // CHARACTER POSITION UPDATE
  character.setAttribute(
    'transform',
    'translate(' + coord.x + ' ' + coord.y + ')'
  );

  // GATES
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
  for (i = 0; i < wallslb.length; i++) {
    //// corners
    /* // TL
    var distTL = Math.sqrt(
      Math.pow(wallslb[i].x - (coord.x + coord.r), 2) +
        Math.pow(wallslb[i].y - (coord.y + coord.r), 2)
    );
    if (distTL <= coord.r) {
      console.log('TL hit!' + distTL);
    }
    // BL
    var distBL = Math.sqrt(
      Math.pow(wallslb[i].x - (coord.x + coord.r), 2) +
        Math.pow(wallslb[i].y + wallslb[i].h - (coord.y + coord.r), 2)
    );
    if (distBL <= coord.r) {
      console.log('Bl hit!' + distTR);
    }
    // TR
    var distTR = Math.sqrt(
      Math.pow(wallslb[i].x + wallslb[i].w - (coord.x + coord.r), 2) +
        Math.pow(wallslb[i].y - (coord.y + coord.r), 2)
    );
    if (distTR <= coord.r) {
      console.log('TR hit!' + distBL);
    }
    // BR
    var distBR = Math.sqrt(
      Math.pow(wallslb[i].x + wallslb[i].w - (coord.x + 25), 2) +
        Math.pow(wallslb[i].y + wallslb[i].h - (coord.y + 25), 2)
    );
    if (distBR <= coord.r) {
      console.log('BR hit!' + distBR);
    } */
    // Walls
    /* if (
      coord.y + 50 > wallslb[i].y &&
      coord.y < wallslb[i].y + wallslb[i].h &&
      coord.x + 50 > wallslb[i].x &&
      coord.x < wallslb[i].x + wallslb[i].w
    ) {
      console.log('wallhit!');
    } */
  }

  // Switching hitbox array

  // cycle through hitboxes
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
  // console.log(currtile);
}

// ----- UPDATE -----

setInterval(main, 5);
