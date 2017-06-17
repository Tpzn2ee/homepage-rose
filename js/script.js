
/*=====================================================================================================*/
/* Giving credit where credit is due, The JS is all built off of my original mod of Tropiz's homepage. */
/* Add dynamic menu and add the possibility to change the avatar. Credits to Spolli & Tropiz          */
/*                              https://github.com/Spolli                                            */
/*==================================================================================================*/

var $ = function(id) {
  return document.getElementById(id);
};

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayNames = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THRUSDAY", "FRIDAY", "SATURDAY"];

var linkMenu = [
  ["Tab 1", "-HEAD-", "1"], // Tab 1
  ["Sample", "http://www.example.com/", "1"],
  ["Sample", "http://www.example.com/", "1"],
  ["Sample", "http://www.example.com/", "1"],
  ["Sample", "http://www.example.com/", "1"],
  ["Sample", "http://www.example.com/", "1"],
  ["Sample", "http://www.example.com/", "1"],

  ["Tab 2", "-HEAD-", "2"], // Tab 2
  ["Sample", "http://www.example.com/", "2"],
  ["Sample", "http://www.example.com/", "2"],
  ["Sample", "http://www.example.com/", "2"],
  ["Sample", "http://www.example.com/", "2"],
  ["Sample", "http://www.example.com/", "2"],
  ["Sample", "http://www.example.com/", "2"],

  ["Tab 3", "-HEAD-", "3"], // Tab 3
  ["Sample", "http://www.example.com/", "3"],
  ["Sample", "http://www.example.com/", "3"],
  ["Sample", "http://www.example.com/", "3"],
  ["Sample", "http://www.example.com/", "3"],
  ["Sample", "http://www.example.com/", "3"],
  ["Sample", "http://www.example.com/", "3"],

  ["Tab 3", "-HEAD-", "4"], // Tab 4
  ["Sample", "http://www.example.com/", "4"],
  ["Sample", "http://www.example.com/", "4"],
  ["Sample", "http://www.example.com/", "4"],
  ["Sample", "http://www.example.com/", "4"],
  ["Sample", "http://www.example.com/", "4"],
  ["Sample", "http://www.example.com/", "4"]
];

//Init the function
jQuery(document).ready(function() {
  buildMenu(1);
  buildColors();
  changeBackground();
  buildDate();
  buildTime();
});

//build color column
function buildColors() {
  var newMenu = "";
  for (var i = 0; i < 4; i++) {
    newMenu += "<div onclick=\"changeGirl(" + (i + 1) + ");\" id=\"color" + (i + 1) + "\"><a href=\"#\"></a></div>";
  }
  $('colors').innerHTML = newMenu;
}

//change girl avatar
function changeGirl(color) {
  var girl = "img/girls/girl" + color + ".jpg";
  document.getElementById('girl').src = girl;
  buildMenu(color);
  switch (color) {
    case 1:
      document.getElementById('links').style.backgroundColor = "#82b5b8";
      break;
    case 2:
      document.getElementById('links').style.backgroundColor = "#3d1120";
      break;
    case 3:
      document.getElementById('links').style.backgroundColor = "#D4DCC8";
      break;
    case 4:
      document.getElementById('links').style.backgroundColor = "#a2988f";
      break;
  }
}

//build the link menu
function buildMenu(type) {
  var newMenu = "";
  for (var i = 0; i < linkMenu.length; i++) {
    if (linkMenu[i][1] === "-HEAD-" && linkMenu[i][2] == type) {
      newMenu += "<span>" + linkMenu[i][0] + "</span> ";
    } else if (linkMenu[i][1] !== "-HEAD-" && linkMenu[i][2] == type) {
      newMenu += "&gt <a href=\"" + linkMenu[i][1] + "\" target=\"_blank\">" + linkMenu[i][0] + "</a> <br>";
    }
  }
  $('links').innerHTML = newMenu;
}

//take a random image
function randomBackground() {
  var image = "img/bg/bg" + Math.floor((Math.random() * 6) + 1) + ".jpg";
  return 'url(' + image + ')';
}

//change background every restart
function changeBackground() {
  document.getElementsByTagName('body')[0].style.backgroundImage = randomBackground();
}

//build the date text
function buildDate() {
  var today = new Date();
  $('dateContainer').innerHTML = "<font class=\"font-3em\">" +
    monthNames[today.getMonth()] +
    " " +
    today.getDate() +
    "</font><br><font>" +
    dayNames[today.getDay()] +
    ", " +
    today.getFullYear() +
    "</font>";
  setTimeout(buildDate, 500000);
}

//build the time text
function buildTime() {
  var today = new Date();
  $('time').innerHTML = "<br><font class=\"font-3em\">" +
    ("0" + today.getHours()).slice(-2) + ":" +
    ("0" + today.getMinutes()).slice(-2) + ":" +
    ("0" + today.getSeconds()).slice(-2) + "</font>";
  setTimeout(buildTime, 1000);
}
