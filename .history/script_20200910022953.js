let totalseat = document.getElementById("count");
let totalsum = document.getElementById("total");
let seat = document.querySelectorAll(".row .seat:not(.occupied)");
let pickmovie = document.getElementById("movie");
let ticketprice = pickmovie.value;
let seatcounter = 0;
let buybox = document.getElementById("buybox");
buybox.value = ticketprice;
let feedback = document.getElementById("feedback");
let pause = document.getElementById("pause");
let link = document.getElementById("link");
let screen = document.getElementById("screen");
const moviecontainer = document.getElementById("movie-container");

function saveseat() {
  const selectedseats = document.querySelectorAll(".row .seat.selected");
  const seatsindex = [...selectedseats].map(function (seated) {
    return [...seat].indexOf(seated);
  });
  localStorage.setItem("savedseatplaces", JSON.stringify(seatsindex));
}

function populateUI() {
  let selectedseats = JSON.parse(localStorage.getItem("savedseatplaces"));
  if (selectedseats !== null && selectedseats.length > 0) {
    seat.forEach((seats, index) => {
      if (selectedseats.indexOf(index) > -1) {
        seats.classList.add("selected");
      }
    });
  }
}

seat.forEach((seats) => {
  seats.addEventListener("click", (e) => {
    seats.classList.toggle("selected");
    saveseat();
  });
});

seat.forEach(function (seatcount) {
  seatcount.addEventListener("click", (e) => {
    ticketprice = pickmovie.value;
    totalsum.innerHTML = seatcounter * ticketprice + "$";
    if (e.target.classList.contains("selected")) {
      seatcounter++;
    } else {
      seatcounter--;
    }
    totalseat.innerHTML = seatcounter;
    localStorage.setItem("seatcounter", seatcounter);
    localStorage.setItem("totalsumprice", totalsum.innerHTML);
    localStorage.setItem("movie", pickmovie.value);
    buy();
  });
});

pickmovie.addEventListener("change", (e) => {
  ticketprice = e.target.value;
  totalsum.innerHTML = seatcounter * ticketprice + "$";
  localStorage.setItem("movie", pickmovie.value);
  localStorage.setItem("totalsumprice", totalsum.innerHTML);
});

function buy() {
  if (seatcounter >= 1) {
    buybox.style.display = "flex";
  }
}
// Secret that is not in use anymore

// var secretarr = [];
// function secretarray() {
//   addEventListener("keypress", (e) => {
//     if (secretarr.includes(99) && secretarr.includes(108)) {
//       var useranswer = prompt("Did you like the website? (yes/no) ");

function feedbacktome() {
  feedback.addEventListener("click", (e) => {
    stopmusic();
    var useranswer = prompt("Likte du nettsiden? (ja/nei)");
    if (useranswer == "ja") {
      party.play();
      document.getElementById("canvas").style.display = "block";

      // no longer in use

      // document.body.addEventListener("mousemove", (e) => {
      //   x = e.clientX;
      //   y = e.clientY;
      //   document.body.style.backgroundColor = `rgb(${x + 100}, ${y}, ${100})`;
      // });

      screen.addEventListener("mousemove", (e) => {
        x = e.clientX;
        y = e.clientY;
        screen.style.backgroundColor = `rgb(${x + 100}, ${y}, ${100})`;
      });
    } else if (useranswer == "nei") {
      Titanic.play();
    }
  });
}
feedbacktome();

// MUSIC MUSIC MUSIC
// MUSIC MUSIC MUSIC
//---------------------------------------------
var floore = new Audio("Music/WALLE - Put On Your Sunday Clothes.mp3");
var pitch = new Audio(
  "Music/Pitch Perfect - Barden Bellas Final Performance (HD).mp3"
);
var laland = new Audio("Music/A Lovely Night.mp3");
var greatshow = new Audio(
  "Music/The Greatest Show - The Greatest Showman Ensemble (Full Clip) HD.mp3"
);
var fight = new Audio("Music/Kanye West - Stronger.mp3");
var Titanic = new Audio(
  "Music/Titanic - My Heart Will Go On (Music Video).mp3"
);
var party = new Audio("Music/Chicken dance remix (madness combat).mp3");
//-------------------------------------------------------------------

buybox.addEventListener("click", (e) => {
  alert("Kos deg på kino!");
  screen.style.boxShadow = "0 10px 150px 5px whitesmoke";
  screen.style.backgroundColor = "Whitesmoke";
  screen.style.border = "3px solid #444451";

  feedback.style.display = "flex";
  pause.style.display = "flex";
  switch (ticketprice) {
    case "6":
      floore.play();
      break;
    case "8":
      link.setAttribute("href", "https://youtu.be/NEdOCvexyck?t=27");
      break;
    case "10":
      pitch.currentTime = 16;
      pitch.play();
      break;
    case "12":
      laland.play();
      break;
    case "14":
      greatshow.play();
      break;
    case "16":
      fight.currentTime = 5.5;
      fight.play();
      break;
    default:
      break;
  }
});

function stopmusic() {
  floore.pause();
  floore.currentTime = 0;
  laland.pause();
  laland.currentTime = 0;
  fight.pause();
  fight.currentTime = 0;
  greatshow.pause();
  greatshow.currentTime = 0;
  pitch.pause();
  pitch.currentTime = 0;
  Titanic.pause();
  Titanic.currentTime = 0;
  party.pause();
  party.currentTime = 0;
}
stopmusic();

pause.addEventListener("click", (e) => {
  stopmusic();
});

window.addEventListener("load", (e) => {
  // Bring up saved movie pick
  let savedmovie = localStorage.getItem("movie");
  pickmovie.value = savedmovie;
  // Bring up saved seat placing
  populateUI();
  // Bring up saved seat count
  let savedtotalseatcount = localStorage.getItem("seatcounter");
  seatcounter = savedtotalseatcount;
  totalseat.innerHTML = savedtotalseatcount;
  // Bring up saved total price
  let savedtotalsum = localStorage.getItem("totalsumprice");
  totalsum.value = savedtotalsum;
  totalsum.innerHTML = savedtotalsum;
  // bring up buy button
  buy();
});

// js Snippets taken from codepen

// Little Canvas things
var canvas = document.querySelector("#canvas"),
  ctx = canvas.getContext("2d");

// Set Canvas to be window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Configuration, Play with these
var config = {
  particleNumber: 800,
  maxParticleSize: 10,
  maxSpeed: 40,
  colorVariation: 50,
};

// Colors
var colorPalette = {
  bg: { r: 12, g: 9, b: 29 },
  matter: [
    { r: 36, g: 18, b: 42 }, // darkPRPL
    { r: 78, g: 36, b: 42 }, // rockDust
    { r: 252, g: 178, b: 96 }, // solorFlare
    { r: 253, g: 238, b: 152 }, // totesASun
  ],
};

// Some Variables hanging out
var particles = [],
  centerX = canvas.width / 2,
  centerY = canvas.height / 2,
  drawBg,
  // Draws the background for the canvas, because space
  drawBg = function (ctx, color) {
    ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

// Particle Constructor
var Particle = function (x, y) {
  // X Coordinate
  this.x = x || Math.round(Math.random() * canvas.width);
  // Y Coordinate
  this.y = y || Math.round(Math.random() * canvas.height);
  // Radius of the space dust
  this.r = Math.ceil(Math.random() * config.maxParticleSize);
  // Color of the rock, given some randomness
  this.c = colorVariation(
    colorPalette.matter[Math.floor(Math.random() * colorPalette.matter.length)],
    true
  );
  // Speed of which the rock travels
  this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), 0.7);
  // Direction the Rock flies
  this.d = Math.round(Math.random() * 360);
};

// Provides some nice color variation
// Accepts an rgba object
// returns a modified rgba object or a rgba string if true is passed in for argument 2
var colorVariation = function (color, returnString) {
  var r, g, b, a, variation;
  r = Math.round(
    Math.random() * config.colorVariation - config.colorVariation / 2 + color.r
  );
  g = Math.round(
    Math.random() * config.colorVariation - config.colorVariation / 2 + color.g
  );
  b = Math.round(
    Math.random() * config.colorVariation - config.colorVariation / 2 + color.b
  );
  a = Math.random() + 0.5;
  if (returnString) {
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  } else {
    return { r, g, b, a };
  }
};

// Used to find the rocks next point in space, accounting for speed and direction
var updateParticleModel = function (p) {
  var a = 180 - (p.d + 90); // find the 3rd angle
  p.d > 0 && p.d < 180
    ? (p.x += (p.s * Math.sin(p.d)) / Math.sin(p.s))
    : (p.x -= (p.s * Math.sin(p.d)) / Math.sin(p.s));
  p.d > 90 && p.d < 270
    ? (p.y += (p.s * Math.sin(a)) / Math.sin(p.s))
    : (p.y -= (p.s * Math.sin(a)) / Math.sin(p.s));
  return p;
};

// Just the function that physically draws the particles
// Physically? sure why not, physically.
var drawParticle = function (x, y, r, c) {
  ctx.beginPath();
  ctx.fillStyle = c;
  ctx.arc(x, y, r, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.closePath();
};

// Remove particles that aren't on the canvas
var cleanUpArray = function () {
  particles = particles.filter((p) => {
    return p.x > -100 && p.y > -100;
  });
};

var initParticles = function (numParticles, x, y) {
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(x, y));
  }
  particles.forEach((p) => {
    drawParticle(p.x, p.y, p.r, p.c);
  });
};

// That thing
window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

// Our Frame function
var frame = function () {
  // Draw background first
  drawBg(ctx, colorPalette.bg);
  // Update Particle models to new position
  particles.map((p) => {
    return updateParticleModel(p);
  });
  // Draw em'
  particles.forEach((p) => {
    drawParticle(p.x, p.y, p.r, p.c);
  });
  // Play the same song? Ok!
  window.requestAnimFrame(frame);
};

// Click listener
document.body.addEventListener("click", function (event) {
  var x = event.clientX,
    y = event.clientY;
  cleanUpArray();
  initParticles(config.particleNumber, x, y);
});

// First Frame
frame();

// First particle explosion
initParticles(config.particleNumber);
