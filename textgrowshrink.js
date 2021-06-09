<!DOCTYPE html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
</head>
<html>
<body>
 <div id="h"></div>
 <script>
  var v = 0, f = 1,t="TEXT-GROWING",color;
  function a()
  {
   if(f==1)
    v+=5,color="red";
   else
    v-=5,color="blue";
   document.getElementById("h").innerHTML = "<h1 style=\"font-size: "+v+"px ; margin: 0px; color : "+color+"\"><b> "+t+"</b></h1>";
   if(v==50)
    f = 0, t="TEXT-SHRINKING";
   if(v==5)
    f = 1, t="TEXT-GROWING";
   c();
  }
  function c()
  {
   setTimeout(a,300);
  }
  c();
 </script>
</body>
</html>


 

 

