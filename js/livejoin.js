const names=["Rahul","Aman","Vikram","Rohit","Sahil","Arjun"];
const cities=["Delhi","Mumbai","Jaipur","Lucknow","Patna"];

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