setInterval(function(){
    let a=new Date();
    let h=a.getHours();
    let m=a.getMinutes();
    let s=a.getSeconds();
    let am_or_pm="AM";
    if(h==12){
        am_or_pm="PM"
    }
      if(h>=13){
        h-=12;
      am_or_pm="PM"
      }
      if (h== 0) {
        h= 12;
        am_or_pm = "AM";
    }
    box1.innerHTML="</br></br>"+h+"";
    box2.innerHTML="</br></br>"+m+"";
    box3.innerHTML="</br></br>"+s+"";
    box4.innerHTML="</br></br>"+am_or_pm;
      
    
    },1000)
   
    