



function timer(){

    var hour = document.getElementById('hour');
    var min = document.getElementById('min');
    var sec = document.getElementById('sec');
    var ampm = document.getElementById('am-pm');
    var date = document.getElementById('date');
    var month = document.getElementById('month');
    var day = document.getElementById('day');
    var year = document.getElementById('year');
    var time = new Date();
    



    
   min.innerText = time.getMinutes();
   sec.innerText = time.getSeconds();
date.innerText= time.getDate();
year.innerText= time.getFullYear();



   if( hour > 11 ){
    ampm.innerText= "AM";
   }
   else{
    ampm.innerText = "PM"; 
   }

   var Hour = time.getHours();


    if( Hour > 12){
        Hour = Hour - 12;
    }
    hour.innerText= Hour;
 

    var Day = time.getDay();

    if( Day == 0 ){
    day.innerText = "Sunday"
    }


    else if( Day == 1 ){
        day.innerText = "Monday"
        }

        
    else if( Day == 2 ){
        day.innerText = "Tuesday"
        }
   
        else if( Day == 3 ){
        day.innerText = "Wedensday"
        }
    
        else if( Day == 4 ){
        day.innerText = "Thursday"
        }
         else if( Day == 5 ){
         day.innerText = "Friday"
         }
    
         else if( Day == 6 ){
         day.innerText = "Sturday"
         }




      var Month = time.getMonth();

      if(Month == 0){
        month.innerText = "January";
      }


      else if(Month == 1){
        month.innerText = "Febuary";
      }

  
      else if(Month == 2){
        month.innerText = "March";
      }
      
      else if(Month == 3){
        month.innerText = "April";
      }
    
      else if(Month == 4){
        month.innerText = "May";
      }

      
      else if(Month == 5){
        month.innerText = "June";
      }

      
      else if(Month == 6){
        month.innerText = "July";
      }

   
      else if(Month == 7){
        month.innerText = "August";
      }
     
      else if(Month == 8){
        month.innerText = "September";
      }

      
      else if(Month == 9){
        month.innerText = "October";
      }

      
      else if(Month == 10){
        month.innerText = "November";
      }
    else{
        month.innerText = " December"
    }
}
setInterval(timer, 1000);