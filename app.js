setInterval(function () {

	let dT = new Date ();
	let hR = dT.getHours ();
	let mT = dT.getMinutes();
	let sec = dT.getSeconds();
	let amPm = "";
	

 if (hR == 0){

 	hR = 12;
 	amPm += "am";

 }

 else if(hR == 12) {

 	amPm += "pm";

 }

 else if(hR > 12 && hR <= 23){

 	hR = hR -12;
 	amPm += "pm";

 }

 else {
 	amPm += "am";
 }

  if (hR.toString().length < 2) hR = "0" + hR;
  if (mT.toString().length < 2) mT = "0" + mT;
  if (sec.toString().length < 2) sec = "0" + sec; 

let cloCk =  hR+":"+mT+":"+sec+" "+ amPm;


  document.querySelector("#Time").innerHTML = cloCk;

},1000)

let myDate = new Date();

let gDay = myDate.getDay();
let gDate = myDate.getDate();
let gMonth = myDate.getMonth();
let gYear = myDate.getFullYear();

let myDay = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
];



let myMonth = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];




let fullDate = myDay[gDay].substr(0,3)+", " + gDate + "" + myMonth[gMonth].substr(0,3) +", "
+ gYear;


document.querySelector("#Date").innerHTML = fullDate;

