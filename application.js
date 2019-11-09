function saveNumber()
{
	var guessNumber=document.getElementById("number").value;
	var stat = validation(guessNumber);
	if (stat==true) 
	{
		countSubmit = countSubmit + 1;
		console.log("validation Sucessful");
		var output;
		if(computerNumber>guessNumber)
		{
			output="Your Guessed Number "+guessNumber+" is smaller then My number !";
			document.getElementById("numbererror").innerHTML=output;
			document.getElementById("counter").innerHTML=(countLimit-countSubmit)+" try remaining !!!";
		}
		else if(computerNumber<guessNumber)
		{
			output="Your Guessed Number "+guessNumber+" is larger then My number !";
			document.getElementById("numbererror").innerHTML=output;
			document.getElementById("counter").innerHTML=(countLimit-countSubmit)+" try remaining !!!";
		} else if(computerNumber==guessNumber)
		{
			alert("You Guessed My Number !!!! You Win");
			$(document).ready(function(){
    			$("#div1").fadeOut(500);
    			$("#div2").fadeOut(500);
			});
		}
		if((countSubmit==7)&&(computerNumber!=guessNumber))
		{
			alert("Game Over!!!! You Loose, My Number Was "+computerNumber);
			$(document).ready(function(){
    			$("#div1").fadeOut(1000);
    			$("#div2").fadeOut(1000);
			});
		}
	}else{
		console.log("validation fail");
	}
	clear();
}
function validation(gNumber)
{
	var status=true;
	if ((gNumber=="")||(isNaN(gNumber)))
	{
		document.getElementById('number').style.borderColor="red";
		document.getElementById('numbererror').style.color="red";
		document.getElementById('numbererror').innerHTML="Plese Enter A Valid Number !";

		status=false;
	}else{
		document.getElementById('number').style.borderColor="";
		document.getElementById('number').innerHTML="";
		document.getElementById('numbererror').style.color="";
		document.getElementById('numbererror').innerHTML="";

		var msg;
		if ((parseInt(gNumber)>=0)&&(parseInt(gNumber)<=100) )
		{
			msg="";
			document.getElementById('numbererror').innerHTML=msg;
		}else
		{
			msg="Number Is Out Of Range !";
			document.getElementById('numbererror').style.color="red";
			document.getElementById('numbererror').innerHTML=msg;
			status=false;
		}
	}
	
	return status;
}
function clear()
{
	document.getElementById('number').value="";
}
var computerNumber;
var countSubmit = 0;
var countLimit = 7;
function computerAssume()
{
	computerNumber=(Math.floor(Math.random() * 101));
	document.getElementById('numbererror').innerHTML="";
	document.getElementById("counter").innerHTML="";
	countSubmit = 0;
}
