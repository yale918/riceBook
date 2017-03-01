var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
  if(this.readyState == 4 & this.status == 200){
    document.getElementById("").innerHTML = xhttp.responseText;

  }
}

xhttp.open("POST","/MYSQL",true);
xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xhttp.send("op=select&data=none");
