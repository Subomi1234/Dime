

var i=0
var text= "Straight-forward Way of Keeping Track of Your Networth!"
var speed= 50;
function type(){
    document.getElementById("stuff").innerHTML+=text.charAt(i)
    i++
    setTimeout(type,speed);
}

type()

const loader= document.querySelector(".loader")
window.onload=()=>{
    setTimeout(function(){
loader.style.opacity="0"
    setTimeout(function(){
loader.style.display="none"
    },500)
    },1500)
}
