function random() {
  return Math.floor(Math.random() * 9) + 1;
}


function check() {
  var number = document.getElementById("text")
    .value;
  var res = random();
  if (Number.parseInt(number) != res) {
      document.getElementById("winOrloss")
        .innerHTML = "Wrong Guess try again!";
  } else {
    document.getElementById("winOrloss")
      .innerHTML = "congratulations you won!";
  }
}

function restart() {
  location.reload();
}