var state = [0, 0, 0];

function slideAnimationCheck(x) {
  if (state[x] == 0) {
    slideAnimation(x);
    state[x] = 1;
  } else {
    slideAnimationReverse(x);
    state[x] = 0;
  }
}

function slideAnimation(x) {
  var button = document.querySelectorAll(".animation")[x];
  button.disabled = true;
  var box = document.querySelectorAll(".textBox")[x];
  var photo = document.querySelectorAll(".photoHover")[x];
  box.style.visibility = "hidden";
  var pos = 0;
  var width = 0;
  var id = setInterval(frame, 4);

  function frame() {
    if (pos == 39) {
      box.style.visibility = "visible";
      photo.style.visibility = "visible";
      if (width == 100) {
        clearInterval(id);
        button.disabled = false;

      } else {
        width = width + 0.5;
        box.style.width = width + "%";
      }
    } else {
      pos = pos + 0.5;
      button.style.right = pos + "vw";
    }
  }
}

function slideAnimationReverse(x) {
  var button = document.querySelectorAll(".animation")[x];
  button.disabled = true;
  var box = document.querySelectorAll(".textBox")[x];
  var photo = document.querySelectorAll(".photoHover")[x];
  var pos = 39;
  var width = 100;
  var id1 = setInterval(frame, 4);

  function frame() {
    if (width == 0) {
      if (pos == 0) {
        clearInterval(id1);
        button.disabled = false;
      } else {
        box.style.visibility = "hidden";
        photo.style.visibility = "hidden";
        pos = pos - 0.5;
        button.style.right = pos + "vw";
      }
    } else {
      width = width - 0.5;
      box.style.width = width + "%";
    }
  }
}

function skillLoad() {
  var bar1 = document.getElementsByClassName("skillProgress1")[0];
  var bar2 = document.getElementsByClassName("skillProgress2")[0];
  var bar3 = document.getElementsByClassName("skillProgress3")[0];
  var bar4 = document.getElementsByClassName("skillProgress4")[0];
  var bar5 = document.getElementsByClassName("skillProgress5")[0];
  var bar6 = document.getElementsByClassName("skillProgress6")[0];
  bar1.style.width = 80 + "%";
  bar2.style.width = 70 + "%";
  bar3.style.width = 50 + "%";
  bar4.style.width = 20 + "%";
  bar5.style.width = 20 + "%";
  bar6.style.width = 20 + "%";
}

function lineFade() {

  var line1 = document.getElementsByClassName("animatedLine1")[0];
  var line2 = document.getElementsByClassName("animatedLine2")[0];
  var line3 = document.getElementsByClassName("animatedLine3")[0];
  line1.style.opacity = 1;
  line2.style.opacity = 1;
  line3.style.opacity = 1;
}

function buttonFade() {
  var bubble1 = document.getElementsByClassName("projectButtons2")[0];
  var bubble2 = document.getElementsByClassName("projectButtons3")[0];
  var bubble3 = document.getElementsByClassName("projectButtons4")[0];
  bubble1.style.opacity = 1;
  bubble2.style.opacity = 1;
  bubble3.style.opacity = 1;
}

function projectFadeIn() {
  lineFade()
  setTimeout(buttonFade, 1500);
}
