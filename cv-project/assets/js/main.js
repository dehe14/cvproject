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
  var butt1 = document.getElementsByClassName("projectButtons1")[0];
  var butt2 = document.getElementsByClassName("projectButtons2")[0];
  var butt3 = document.getElementsByClassName("projectButtons3")[0];
  var butt4 = document.getElementsByClassName("projectButtons4")[0];
  var butt5 = document.getElementsByClassName("projectButtons5")[0];
  var butt6 = document.getElementsByClassName("projectButtons6")[0];
  var butt7 = document.getElementsByClassName("projectButtons7")[0];
  var butt8 = document.getElementsByClassName("projectButtons8")[0];
  var butt9 = document.getElementsByClassName("projectButtons9")[0];
  var butt10 = document.getElementsByClassName("projectButtons10")[0];
  var butt11 = document.getElementsByClassName("projectButtons11")[0];
  var butt12 = document.getElementsByClassName("projectButtons12")[0];

  var line1 = document.getElementsByClassName("animatedLine1")[0];
  bar1.style.width = 80 + "%";
  bar2.style.width = 70 + "%";
  bar3.style.width = 50 + "%";
  bar4.style.width = 20 + "%";
  bar5.style.width = 20 + "%";
  bar6.style.width = 20 + "%";
}

function thoughts() {
  var butt1 = document.getElementsByClassName("skillProgress1")[0];

}
