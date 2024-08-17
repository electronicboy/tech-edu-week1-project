// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

window.onscroll = function () {
  const topButton = document.getElementById("top-button");

  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 30) {
    topButton.style.display = "";
  } else {
    topButton.style.display = "none";
  }
};
