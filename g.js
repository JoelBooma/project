function myFunction(){
  location.replace("pro-1.html");
}


var audio = document.getElementById('audio');
var icon = document.getElementById('icon');
var count = 0;

function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
        icon.className = "fa-solid fa-pause";
       
    }else{
        count = 0;
        audio.pause()
        icon.className = "fa-solid fa-play";
    }
}

var hear = document.getElementById('fil');
var count = 0;
function change1(){
  if(count==0){
    count = 1;
  hear.className = "fa-solid fa-heart";
  hear.style.color="white";
}
else{
count = 0;
hear.className ="fa fa-heart-o";
hear.style.color=" rgb(177, 174, 174)";
}

}



var audio2 = document.getElementById('audio2');
var icon2 = document.getElementById('icon2');
var count = 0;

function playPause2(){
    if(count == 0){
        count = 1;
        audio2.play();
        icon2.className = "fa-solid fa-pause";
       
    }else{
        count = 0;
        audio2.pause()
        icon2.className = "fa-solid fa-play";
    }
}


var hear2 = document.getElementById('fil2');
var count = 0;
function change2(){
  if(count==0){
    count = 1;
  hear2.className = "fa-solid fa-heart";
  hear2.style.color="white";
}
else{
count = 0;
hear2.className ="fa fa-heart-o";
hear2.style.color=" rgb(177, 174, 174)";
}

}

var audio3 = document.getElementById('audio3');
var icon3 = document.getElementById('icon3');
var count = 0;

function playPause3(){
    if(count == 0){
        count = 1;
        audio3.play();
        icon3.className = "fa-solid fa-pause";
       
    }else{
        count = 0;
        audio3.pause()
        icon3.className = "fa-solid fa-play";
    }
}

var hear3 = document.getElementById('fil3');
var count = 0;
function change3(){
  if(count==0){
    count = 1;
  hear3.className = "fa-solid fa-heart";
  hear3.style.color="white";
}
else{
count = 0;
hear3.className ="fa fa-heart-o";
hear3.style.color=" rgb(177, 174, 174)";
}

}


