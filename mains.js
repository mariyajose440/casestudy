$(document).ready(function(){   
  $("#tododivv106").show(function(){
      var div = $("#tododivv106");
      startAnimation();
      function startAnimation(){
          div.animate({height: 300}, "slow");
    div.animate({width: 300}, "slow");  
    div.animate({height: 100}, "slow");
    div.animate({width: 100}, "slow", startAnimation);
      }
  });
  $("#tododivv107").show(function(){
      var div = $("#tododivv107");
      startAnimation();
      function startAnimation(){
          div.animate({height: 300}, "slow");
    div.animate({width: 300}, "slow");  
    div.animate({height: 100}, "slow");
    div.animate({width: 100}, "slow", startAnimation);
      }
  });
  $("#tododivv108").show(function(){
      var div = $("#tododivv108");
      startAnimation();
      function startAnimation(){
          div.animate({height: 300}, "slow");
    div.animate({width: 300}, "slow");  
    div.animate({height: 100}, "slow");
    div.animate({width: 100}, "slow", startAnimation);
      }
  });
});





function functionAlert(msg, myYes) {
  var confirmBox = $("#confirm");
  confirmBox.find(".message").text(msg);
  confirmBox.find(".yes").unbind().click(function() {
     confirmBox.hide();
  });
  confirmBox.find(".yes").click(myYes);
  confirmBox.show();
}





var un=document.getElementById("username");
var psd=document.getElementById("cupassword");
var ad="admin";
function user()
{
    if(un.value=="admin")
        un.style.border="5px solid green";
    else
        un.style.border="5px solid red";
    
}
function pass()
{
    if(psd.value=="12345")
        psd.style.border="5px solid green";
    else
        psd.style.border="5px solid red";
    
}
function validation()
{
    if((un.value=="admin")&&(psd.value=="12345"))
    {
        redirect();
    }
    else
    {
      var msgtxt="Wrong password or username";
      alert(msgtxt); 
    }
}
function redirect()
{
    document.getElementById('form').setAttribute("action","mainindex.html");
}
 




function done()
{
  var prom = new Promise(function(resolve, reject)
  {
  var check=$('input:checkbox:checked').length;
  var values=check-90;
  if (values>=5)
  {
    resolve("Congrats.You have succesfully completed "+values+ " tasks");
  }
  else
  {
    reject("not enough tasks completed");
  }
})
  prom.then(function(e)
  {
  setTimeout (function()
  { functionAlert(e);
  },100);  
  }) 
  .catch(function(e)
  {
    console.log(e);
  })  
}
