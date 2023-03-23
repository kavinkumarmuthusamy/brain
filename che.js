var a=0;
var b=0;
var z=0;
let point=0;
function che(a,b){
 z++;
 if(z==17){
  // alert("");
  document.getElementById("block").className="block";
  console.log(    document.getElementById("block").className);
  setTimeout(function(){
      // document.getElementById("block").className="bloc";
      location.reload();
  },5000)
}
   var c=document.getElementById(a+""+b).innerText--;
   console.log(z);
  if(a<6&&b<6){
    document.getElementById((a+1)+""+(b+1)).innerText--;}
  if(a<6&&b>1){
    document.getElementById((a+1)+""+(b-1)).innerText--;}
  if(a>1&&b<6){
    document.getElementById((a-1)+""+(b+1)).innerText--;}
  if(a>1&&b>1){
    document.getElementById((a-1)+""+(b-1)).innerText--;}
  if(a<6&&b<=6){
    document.getElementById((a+1)+""+b).innerText--;}
  if(a<=6&&b<6){
    document.getElementById(a+""+(b+1)).innerText--;}
  if(a>1&&b>=1){
    document.getElementById((a-1)+""+b).innerText--;}
  if(a>=1&&b>1){
    document.getElementById(a+""+(b-1)).innerText--;}
     point+=6.25;
    document.getElementById("point").style.marginLeft=(point+"%");


let s=true;
for(let i=1;i<7;i++){
    for(let j=1;j<7;j++){
       if( document.getElementById(i+""+j).innerText!=0){
        s=false;
           break;
       }
    }
}
if(s){
    document.getElementById("block").className="win";
    console.log(    document.getElementsByClassName("block").className);
    setTimeout(function(){
        // document.getElementById("block").className="bloc";
        location.reload();
    },5000)
}
}