let count = 0;
document.getElementById("decreasebtn").onclick = function () {
  count--;
  document.getElementById("countlabel").innerHTML = count;
};
document.getElementById("resetbtn").onclick = function () {
  count = 0;
  document.getElementById("countlabel").innerHTML = count;
};
document.getElementById("increasebtn").onclick = function () {
  count++;
  document.getElementById("countlabel").innerHTML = count;
};
