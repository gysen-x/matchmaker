// const day = document.getElementById("day");
// const hrs = document.getElementById("hrs");
// const min = document.getElementById("min");
// const sec = document.getElementById("sec");

const dayOfMatch = new Date("2023-02-23T21:00:00.977Z");
console.log(dayOfMatch);

function countdownTimer() {
  const todayDate = Date.now();
  console.log(todayDate);
  // const diff = dayOfMatch > todayDate;
  // console.log(diff);
  const gap = dayOfMatch - todayDate;
  console.log(gap);
  let d = Math.floor(gap / 1000 / 60 / 60 / 24);
  let h = Math.floor((gap / 1000 / 60 / 60) % 24);
  let m = Math.floor((gap / 1000 / 60) % 60);
  let s = Math.floor((gap / 1000) % 60);

  //   day.innerHTML =
  d = d < 10 ? "0" + d : d;
  //   hrs.innerHTML =
  h = h < 10 ? "0" + h : h;
  //   min.innerHTML =
  m = m < 10 ? "0" + m : m;
  //   sec.innerHTML =
  s = s < 10 ? "0" + s : s;

  console.log(d, h, m, s);
}
// const counter = setInterval(countdownTimer, 1000);
// clearInterval(counter);
countdownTimer();
