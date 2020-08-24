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

function thoughts() {
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
  var line2 = document.getElementsByClassName("animatedLine2")[0];
  var line3 = document.getElementsByClassName("animatedLine3")[0];
  var line4 = document.getElementsByClassName("animatedLine4")[0];
  var line5 = document.getElementsByClassName("animatedLine5")[0];
  var line6 = document.getElementsByClassName("animatedLine6")[0];
  var line7 = document.getElementsByClassName("animatedLine7")[0];
  var line8 = document.getElementsByClassName("animatedLine8")[0];
  var line9 = document.getElementsByClassName("animatedLine9")[0];
  var line10 = document.getElementsByClassName("animatedLine10")[0];
  var line11 = document.getElementsByClassName("animatedLine11")[0];
  var stem = document.getElementsByClassName("stem")[0];
  var petal1 = document.getElementsByClassName("Petal1")[0];
  var petal2 = document.getElementsByClassName("Petal2")[0];
  var petal3 = document.getElementsByClassName("Petal3")[0];
  var petal4 = document.getElementsByClassName("Petal4")[0];
  butt1.disabled = false;
  butt7.style.opacity = 1;
  line5.style.opacity = 1;
  setTimeout(function () {
    butt7.style.opacity = 0;
    line5.style.opacity = 0;
  }, 5000);

  setTimeout(function () {
    butt4.style.opacity = 1;
    line2.style.opacity = 1;
    setTimeout(function () {
      line4.style.opacity = 1;
      butt5.style.opacity = 1;
      setTimeout(function () {
        line4.style.opacity = 0;
        butt5.style.opacity = 0;
        setTimeout(function () {
          butt6.style.opacity = 1;
          line6.style.opacity = 1;
          setTimeout(function () {
            butt6.style.opacity = 0;
            line6.style.opacity = 0;
            setTimeout(function () {
              butt8.style.opacity = 1;
              line7.style.opacity = 1;
              setTimeout(function () {
                butt8.style.opacity = 0;
                line7.style.opacity = 0;
                setTimeout(function () {
                  butt4.style.opacity = 0;
                  line2.style.opacity = 0;
                  setTimeout(function () {
                    line3.style.opacity = 1;
                    butt3.style.opacity = 1;
                    setTimeout(function () {
                      line8.style.opacity = 1;
                      butt9.style.opacity = 1;
                      setTimeout(function () {
                        line8.style.opacity = 0;
                        butt9.style.opacity = 0;
                        line9.style.opacity = 1;
                        butt10.style.opacity = 1;
                        setTimeout(function () {
                          line9.style.opacity = 0;
                          butt10.style.opacity = 0;
                          line3.style.opacity = 0;
                          butt3.style.opacity = 0;
                          setTimeout(function () {
                            line1.style.opacity = 1;
                            butt2.style.opacity = 1;
                            setTimeout(function () {
                              line10.style.opacity = 1;
                              butt11.style.opacity = 1;
                              setTimeout(function () {
                                line10.style.opacity = 0;
                                butt11.style.opacity = 0;
                                butt1.style.opacity = 0;
                                line1.style.opacity = 0;
                                butt2.style.opacity = 0;
                                setTimeout(function () {
                                  stem.style.opacity = 1;
                                  stem.style.height = 100 + "%";
                                  setTimeout(function () {
                                    butt12.style.opacity = 1;
                                    petal1.style.opacity = 1;
                                    petal2.style.opacity = 1;
                                    petal3.style.opacity = 1;
                                    petal4.style.opacity = 1;
                                  }, 3000);
                                }, 1000);
                              }, 4000);
                            }, 1000);
                          }, 1000);
                        }, 5000);
                      }, 5000);
                    }, 1000);
                  }, 5000);
                }, 10);
              }, 5000);
            }, 5000);
          }, 5000);
        }, 5000);
      }, 5000);
    }, 2000);
  }, 5000);



}
