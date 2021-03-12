let circle1 = document.querySelector('.loyalty__circle-sceptics');
let circle2 = document.querySelector('.loyalty__circle-promotes');
let radius1 = circle1.r.baseVal.value;
let radius2 = circle2.r.baseVal.value;
let circumference1 = radius1 * 2 * Math.PI;
let circumference2 = circumference1 + radius2 * 2 * Math.PI;

circle1.style.strokeDasharray = `${circumference1} ${circumference1}`;
circle1.style.strokeDashoffset = `${circumference1}`;

circle2.style.strokeDasharray = `${circumference2} ${circumference2}`;
circle2.style.strokeDashoffset = `${circumference2}`;

function setProgress1(percent) {
  const offset1 = circumference1 + 16 - percent / 100 * circumference1;
  circle1.style.strokeDashoffset = offset1;
}
function setProgress2(percent) {
  const offset2 = circumference2 + 16 - percent / 100 * circumference2;
  circle2.style.strokeDashoffset = offset2;
}

const sceptics = document.querySelector(".loyalty__percentage-sceptics").getAttribute("data-sceptics");
setProgress1(sceptics);

const promots = document.querySelector('.loyalty__percentage-promots').getAttribute("data-promots");
setProgress2(promots);