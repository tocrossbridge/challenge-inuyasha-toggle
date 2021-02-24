function showInuyasha(){
    var checkbox = document.getElementById('checkInuyasha');

    var imageInuyasha = document.getElementById('isDay');

    if(checkbox.checked === false){
        imageInuyasha.classList.remove("inuyasha--day");
        imageInuyasha.classList.add("inuyasha--night");
    }else{
        imageInuyasha.classList.remove("inuyasha--night");
        imageInuyasha.classList.add("inuyasha--day");
    }
}
  