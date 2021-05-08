const date = new Date();
//date.setHours(9, 57, 0, 0);
const minutes = date.getMinutes() + (date.getHours() * 60);
if(minutes >= (8 * 60) + 0 && minutes < (8 * 60) + 45){
  document.getElementById("p_1").style.background = "red";
} else if(minutes >= (8 * 60) + 55 && minutes < (9 * 60) + 40){
  document.getElementById("p_2").style.background = "red";
} else if(minutes >= (9 * 60) + 50 && minutes < (10 * 60) + 35){
  document.getElementById("p_3").style.background = "red";
} else if(minutes >= (10 * 60) + 55 && minutes < (11 * 60) + 40){
  document.getElementById("p_4").style.background = "red";
} else if(minutes >= (12 * 60) + 0 && minutes < (12 * 60) + 45){
  document.getElementById("p_5").style.background = "red";
} else if(minutes >= (12 * 60) + 55 && minutes < (13 * 60) + 40){
  document.getElementById("p_6").style.background = "red";
} else if(minutes >= (13 * 60) + 50 && minutes < (14 * 60) + 35){
  document.getElementById("p_7").style.background = "red";
} else if(minutes >= (14 * 60) + 45 && minutes < (15 * 60) + 30){
  document.getElementById("p_8").style.background = "red";
}