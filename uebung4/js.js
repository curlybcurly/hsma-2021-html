const videoEle = document.querySelector("video");

const mediaPlayPause = function () {
  if (
    videoEle.currentTime > 0 &&
    !videoEle.paused &&
    !videoEle.ended &&
    videoEle.readyState > 2
  ) {
    videoEle.pause();
    buttonPlayPause.src = "img/play.svg";
  } else {
    videoEle.play();
    buttonPlayPause.src = "img/pause.svg";
  }
};

const muteMedia = function () {
  if (videoEle.muted == true) {
    videoEle.muted = false;
    muteButton.src = "img/unmute.svg";
  } else {
    videoEle.muted = true;
    muteButton.src = "img/mute.svg";
  }
};

const buttonPlayPause = document.querySelector("#playpause");
buttonPlayPause.addEventListener("click", mediaPlayPause);

const muteButton = document.querySelector("#mute");
muteButton.addEventListener("click", muteMedia);

videoEle.addEventListener("ended", mediaEnded);
function mediaEnded() {
  buttonPlayPause.src = "img/play.svg";
}
