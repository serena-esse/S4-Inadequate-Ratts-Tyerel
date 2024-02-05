const data = [70, 30];
const total = data.reduce((acc, value) => acc + value, 0);

const segment1 = document.getElementById("donut-segment1");
const segment2 = document.getElementById("donut-segment2");

segment1.style.transform = `rotate(${(data[0] / total) * 360}deg)`;
segment2.style.transform = `rotate(${(data[1] / total) * 360}deg)`;
