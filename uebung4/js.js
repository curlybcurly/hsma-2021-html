const videoEle = document.querySelector("video");

const playMedia = function () {
  videoEle.play();
};

const pauseMedia = function () {
  videoEle.pause();
};

const playButton = document.querySelector("#play");
playButton.addEventListener("click", playMedia);

const pauseButton = document.querySelector("#pause");
pauseButton.addEventListener("click", pauseMedia);
