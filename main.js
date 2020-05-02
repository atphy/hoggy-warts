const enterSite = () => {
  var enterWindow = document.getElementById("confirmPage");
    enterWindow.style.display = "none";
  document.getElementById("mainPage").style.display = "block";
}

const clickConfirm = () => {
  document.querySelector('#confirmButton').addEventListener('click', enterSite);
}

const init = () => {
document.getElementById("mainPage").style.display = "none";
clickConfirm()
}

init()
