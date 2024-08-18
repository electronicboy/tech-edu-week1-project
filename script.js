// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

window.onscroll = function () {
  const topButton = document.getElementById("top-button");

  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 30) {
    topButton.style.display = "";
  } else {
    topButton.style.display = "none";
  }

  // Google commenced a war with auto playing media and so, this will
  // not play by default. There are seemingly some hacks around this, however
  // I failed to get them to work, so, we'll just do this. This will not work until
  // a client has clicked the page.
  /** @type {HTMLAudioElement} */
  let audioPlayer = document.getElementById("player");
  audioPlayer.play();
};
