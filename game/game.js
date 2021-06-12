// ----- VARS -----

/* const lb = document.querySelector('#lb');
const mb = document.querySelector('#mb');
const rb = document.querySelector('#rb');
const lm = document.querySelector('#lm');
const mm = document.querySelector('#mm');
const rm = document.querySelector('#rm');
const lt = document.querySelector('#lt');
const mt = document.querySelector('#mt');
const rt = document.querySelector('#rt'); */

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
  hopto: 540,
};
const mbgate1 = {
  x: 29,
  y: 569,
  hopside: 0,
  hopfrom: 603,
  hopto: 540,
};
const mbgate2 = {
  x: 1001,
  y: 461,
  hopside: 1030,
  hopfrom: 495,
  hopto: 432,
};
const rbgate2 = {
  x: 29,
  y: 461,
  hopside: 0,
  hopfrom: 495,
  hopto: 432,
};
const rbgate3 = {
  x: 785,
  y: 29,
  hopside: 0,
  hopfrom: 819,
  hopto: 756,
};
const rmgate3 = {
  x: 785,
  y: 1001,
  hopside: 1030,
  hopfrom: 819,
  hopto: 756,
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

  console.log('X= ' + coord.x + ' Y= ' + coord.y);

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
