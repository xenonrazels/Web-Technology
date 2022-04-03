function Interest(P,T,R){
 return (P*T*R)/100;
}
function conformPopup(){
   var txt;
  if (confirm("Are you sure!")) {
   let p=document.querySelector('#inputPrincipal').value;
   
   let t=document.querySelector('#inputTime').value;
   let r=document.querySelector('#inputRate').value;
   txt= Interest(p,t,r);
   document.querySelector('#Interest').innerHTML="<h2> The interest is :"+txt+"</h2";
  } else {
   document.querySelector('#Interest').innerHTML="<h2> Please, select ok </h2"
  }

  return false;
}