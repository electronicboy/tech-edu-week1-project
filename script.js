// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
let hasStarted = false;
window.onscroll = function () {
  const topButton = document.getElementById("top-button");

  if (document.documentElement.scrollTop > 30) {
    topButton.style.display = "";
  } else {
    topButton.style.display = "none";
  }

  if (hasStarted) return;
  // Google commenced a war with auto playing media and so, this will
  // not play by default. There are seemingly some hacks around this, however
  // I failed to get them to work, so, we'll just do this. This will not work until
  // a client has clicked the page.
  /** @type {HTMLAudioElement} */
  let audioPlayer = document.getElementById("player");

  // https://developer.chrome.com/blog/autoplay/#audiovideo_elements
  let promise = audioPlayer.play();
  if (promise !== undefined) {
    promise
      .then((_) => {
        // Autoplay started!
        audioPlayer.volume = 0.2;
        hasStarted = true;
      })
      .catch((error) => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
      });
  }
};
