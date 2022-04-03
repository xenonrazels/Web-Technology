const email=document.querySelector('#email').value;
    const password=document.querySelector('#password').value;
    const first_name=document.querySelector('#first_name').value;
    const last_name=document.querySelector('#last_name').value;
    const address=document.querySelector('#address').value;
    const mobile_no=document.querySelector('#mobile_no').value;


function validate(){
    console.log(email);
    if (email=="" || password=="" || first_name=="" || last_name=="" ||mobile_no==""){
        alert("please fill all fileds");
        return false;

    }
        
}
function validateemail(e)  
{  
var atposition=email.indexOf("@");  
var dotposition=email.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);
 
  return false;  
  }  
}  
function validateMobile(){
    if(mobile_no.length<10){
        alert("Your number should be 10");
        return false;

    }
}