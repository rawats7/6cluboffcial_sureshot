/* COUNTDOWN */
let time=30;

setInterval(()=>{
time--;
document.getElementById("count").innerText=time;

if(time<=0){
window.location.href="https://t.me/+k6GZ8WXzo_w3Zjg1";
}

},1000);

/* LIVE JOIN POPUP */
const names=[
"Rahul","Aman","Vikram","Rohit","Sahil",
"Arjun","Deepak","Ankit","Sumit","Karan",
"Neeraj","Yash","Ajay","Nitin","Harsh",
"Manish","Tarun","Abhishek","Raj","Vivek"
];

const cities=[
"Delhi","Mumbai","Jaipur","Lucknow",
"Patna","Bangalore","Kolkata","Surat",
"Indore","Chandigarh"
];

function showJoin(){
let name=names[Math.floor(Math.random()*names.length)];
let city=cities[Math.floor(Math.random()*cities.length)];

let box=document.getElementById("liveJoin");

box.innerHTML="🔥 "+name+" from "+city+" just joined the VIP channel";

box.style.opacity="1";

setTimeout(()=>{
box.style.opacity="0";
},3000);
}

setInterval(showJoin,4000);

/* DECREASING SEATS */
let seats=37;

setInterval(()=>{

if(seats>12){
seats--;
document.getElementById("seats").innerText=seats;
}

},7000);
